import { defineStore } from 'pinia'
import { reqUserInfoApi } from '@/api/login/login.api'
import {
  generatePermission,
  filterDynamicRoute,
} from '@/router/permissionUtils'
import type { RouteRecordRaw } from 'vue-router'
import { dynamicRoutes } from '@/router/routes'

interface UserInfoStoreState {
  name: string
  role: string
  permissionList: string[]
  routePathList: string[]
  menu: RouteRecordRaw[]
  avatar: string
  btnPermissionMap: Record<string, string[]>
}

export const useUserInfoStore = defineStore('userInfo', {
  persist: {
    key: 'userInfo',
    storage: sessionStorage,
  },
  state: () => {
    return {
      name: '',
      role: '',
      permissionList: [],
      routePathList: [],
      menu: [],
      avatar: '',
      btnPermissionMap: {},
    } as UserInfoStoreState
  },
  actions: {
    async reqUserInfo() {
      let { data: responseData } = await reqUserInfoApi()
      this.name = responseData.name
      this.role = responseData.role
      let { permissionList, routePathList, btnPermissionMap } =
        generatePermission(responseData.permissions)
      this.permissionList = permissionList
      this.routePathList = routePathList
      this.btnPermissionMap = btnPermissionMap
      this.menu = filterDynamicRoute(this.permissionList, dynamicRoutes)
      this.avatar = responseData.avatar
    },
  },
})
