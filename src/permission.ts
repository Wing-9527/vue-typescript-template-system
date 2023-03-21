import router from './router'
import { useUserInfoStore } from '@/store/userInfo'
const whitelist = ['/login', '/404']

const userInfoStore = useUserInfoStore()

let isRefresh = true

router.beforeEach(async (to, from, next) => {
  let token = sessionStorage.getItem('token')
  if (token) {
    // 判断是否通过 F5 刷新页面（防止addRoute动态添加的路由丢失）
    if (isRefresh) {
      await userInfoStore.reqUserInfo()
      userInfoStore.menu.forEach((route) => {
        router.addRoute(route)
      })
      isRefresh = false
      next({ ...to, replace: true })
      /**
       * 👆 this line
       * 可能 next 跳转后，动态路由还未被添加进去
       * 再次触发 beforEach 钩子，并且replace防止页面一直存储进路由栈
       */
    } else {
      // 如果已登录，跳转路径还是为登录页，重定向到首页
      if (to.path === '/login') {
        next('/home')
      }
      // 如果有该路由则跳转，无则重定向到404
      let hasPage = userInfoStore.routePathList.includes(to.path)
      if (hasPage) {
        next()
      }
    }
  } else {
    // 未登录，白名单中放行
    let inWhitelist = whitelist.includes(to.path)
    if (inWhitelist) {
      next()
    } else {
      // 无token，重定向到登陆
      next('/login')
    }
  }
})
