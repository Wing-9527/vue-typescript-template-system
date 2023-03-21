// import type { RouteStruct } from './router'

// 基础路由
export const basicRoutes = [
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
]

// 异步路由（权限路由）
export const dynamicRoutes = [
  {
    name: 'Index',
    path: '/',
    component: () => import('@/layout/BasicLayout.vue'),
    children: [
      {
        name: 'Home',
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          permission: ['Home'],
        },
      },
      {
        name: 'SystemManage',
        path: '/systemManege',
        meta: {
          permission: ['SystemManage'],
        },
        children: [
          {
            name: 'AccountManage',
            path: '/systemManege/accountManage',
            meta: {
              permission: ['AccountManage'],
            },
            component: () =>
              import('@/views/systemManage/accountManage/index.vue'),
          },
          {
            name: 'RoleManage',
            path: '/systemManege/roleManage',
            meta: {
              permission: ['RoleManage'],
            },
            component: () =>
              import('@/views/systemManage/roleManage/index.vue'),
          },
        ],
      },
    ],
  },
]
