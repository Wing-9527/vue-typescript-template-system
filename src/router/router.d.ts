import type { RouteRecordRaw } from 'vue-router'

export type RoutePermissionsItem = {
  name: string
  path: string
  permission: string
  children?: RoutePermissionsItem[]
  actionEntitySet?: Record<string, string>[]
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
  actionEntitySet?: Record<string, string>[]
} & RouteRecordRaw
