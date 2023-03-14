import router from '.'
import { useUserInfoStore } from '@/store/userInfo'

const whitelist = ['/login', '/404']

const userInfoStore = useUserInfoStore()

router.beforeEach(async (to, from, next) => {
  let token = sessionStorage.getItem('token')
  let inWhitelist = whitelist.includes(to.path)
  // 白名单放行
  if (inWhitelist) {
    next()
    return
  }
  // 无token，重定向到登陆
  if (token) {
    await userInfoStore.reqUserInfo()
    let hasPage = userInfoStore.menu.findIndex((item) => item.path === to.path)
    if (hasPage !== -1) {
      next()
    }
    console.log('user', userInfoStore.menu)
  } else {
    next('/login')
  }
})
