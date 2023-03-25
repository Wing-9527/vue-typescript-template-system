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
          title: '首页',
          permission: ['Home'],
          icon: 'home',
        },
      },
      {
        name: 'SystemManage',
        path: '/systemManege',
        meta: {
          title: '系统管理',
          permission: ['SystemManage'],
          icon: 'setting',
        },
        children: [
          {
            name: 'RoleManage',
            path: '/systemManege/roleManage',
            meta: {
              title: '角色管理',
              permission: ['RoleManage'],
              // icon: 'usergroup',
            },
            component: () =>
              import('@/views/systemManage/roleManage/index.vue'),
          },
          {
            name: 'AccountManage',
            path: '/systemManege/accountManage',
            meta: {
              title: '账号管理',
              permission: ['AccountManage'],
              // icon: 'user',
            },
            component: () =>
              import('@/views/systemManage/accountManage/index.vue'),
          },
        ],
      },
    ],
  },
]
