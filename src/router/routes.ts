const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  // {
  //   name: 'Home',
  //   path: '/home',
  //   component: () => import('@/views/home/index.vue'),
  // },
]

export default routes
