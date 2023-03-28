export type RoutePermissionsItem = {
  name: string
  path: string
  permission: string
  children?: RoutePermissionsItem[]
  actionEntitySet?: Record<string, string>[]
}
