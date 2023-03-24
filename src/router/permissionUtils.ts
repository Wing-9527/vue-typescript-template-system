import type { RoutePermissionsItem, RouteStruct } from './router'

export function hasPermission(permissionList: string[], route: RouteStruct) {
  if (route.meta && route.meta.permission) {
    let isInclude = false
    route.meta.permission.forEach((item) => {
      isInclude = permissionList.includes(item)
    })
    return isInclude
  }
  return true
}

// 生成路由路径和权限列表
export function generateRoutePathAndPermissionList(
  permissions: RoutePermissionsItem[]
) {
  let permissionList: string[] = []
  let routePathList: string[] = []
  function iterator(permissions: RoutePermissionsItem[]) {
    for (let item of permissions) {
      permissionList.push(item.permission)
      routePathList.push(item.path)
      if (item.children && item.children.length) {
        iterator(item.children)
      }
    }
  }
  iterator(permissions)
  return {
    permissionList,
    routePathList,
  }
}

// 根据生成的权限列表（permissionList），过滤路由
export function filterDynamicRoute(
  permissionList: string[],
  routes: RouteStruct[]
) {
  let menu: RouteStruct[] = []
  for (let route of routes) {
    let menuItem: RouteStruct = {
      ...route,
      children: [],
    }
    if (hasPermission(permissionList, route)) {
      if (route.children && route.children.length) {
        menuItem.children = filterDynamicRoute(permissionList, route.children)
      }
      menu.push(menuItem)
    }
  }
  return menu
}
