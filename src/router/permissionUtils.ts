import type { RoutePermissionsItem } from './router'
import type { RouteRecordRaw } from 'vue-router'

export function hasPermission(permissionList: string[], route: RouteRecordRaw) {
  if (route.meta && route.meta.permission) {
    let isInclude = false
    ;(route.meta.permission as string[]).forEach((item) => {
      isInclude = permissionList.includes(item)
    })
    return isInclude
  }
  return true
}

// 生成路由路径和权限列表
export function generatePermission(permissions: RoutePermissionsItem[]) {
  let permissionList: string[] = []
  let routePathList: string[] = []
  let btnPermissionMap: Record<string, string[]> = {}
  function iterator(permissions: RoutePermissionsItem[]) {
    for (let item of permissions) {
      permissionList.push(item.permission)
      routePathList.push(item.path)
      if (item.actionEntitySet && item.actionEntitySet.length) {
        btnPermissionMap[item.path] = item.actionEntitySet.map(
          (actionEntity) => actionEntity.action
        )
      }
      if (item.children && item.children.length) {
        iterator(item.children)
      }
    }
  }
  iterator(permissions)
  return {
    permissionList,
    routePathList,
    btnPermissionMap,
  }
}

// 根据生成的权限列表（permissionList），过滤路由
export function filterDynamicRoute(
  permissionList: string[],
  routes: RouteRecordRaw[]
) {
  let menu: RouteRecordRaw[] = []
  for (let route of routes) {
    let menuItem: RouteRecordRaw = {
      ...route,
      children: [],
    }
    if (hasPermission(permissionList, route)) {
      if (route.children && route.children.length) {
        menuItem.children = filterDynamicRoute(permissionList, route.children)
        menuItem.redirect = menuItem.children[0].path // 重定向到第一个子路由
      }
      menu.push(menuItem)
    }
  }
  return menu
}
