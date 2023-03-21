import type { RouteRecordRaw } from 'vue-router'

export type RoutePermissionsItem = {
  name: string
  path: string
  permission: string
  children?: RoutePermissionsItem[]
}

export type RouteStruct = {
  name: string
  path: string
  component?: () => Promise<unknown> | Promise<unknown>
  hidden?: boolean
  redirect?: string
  meta?: {
    title?: string
    keepAlive?: boolean
    icon?: any
    permission: string[]
  }
  children?: RouteStruct[]
} & RouteRecordRaw
