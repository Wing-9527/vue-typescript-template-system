import { defineStore } from 'pinia'
import { reqUserInfoApi } from '@/api/login/login.api'
import {
  generateRoutePathAndPermissionList,
  filterDynamicRoute,
} from '@/router/permissionUtils'
import type { RouteStruct } from '@/router/router'
import { dynamicRoutes } from '@/router/routes'

interface UserInfoStoreState {
  name: string
  role: string
  permissionList: string[]
  routePathList: string[]
  menu: RouteStruct[]
}

export const useUserInfoStore = defineStore('userInfo', {
  persist: {
    key: 'info',
    storage: sessionStorage,
  },
  state: () => {
    return {
      name: '',
      role: '',
      permissionList: [],
      routePathList: [],
      menu: [],
    } as UserInfoStoreState
  },
  actions: {
    async reqUserInfo() {
      let { data: responseData } = await reqUserInfoApi()
      this.name = responseData.name
      this.role = responseData.role
      let { permissionList, routePathList } =
        generateRoutePathAndPermissionList(responseData.permissions)
      this.permissionList = permissionList
      this.routePathList = routePathList
      this.menu = filterDynamicRoute(this.permissionList, dynamicRoutes)
    },
  },
})
