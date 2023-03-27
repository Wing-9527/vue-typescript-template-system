import router from '@/router'
// import { useUserInfoStore } from '@/store/userInfo'

// const userInfoStore = useUserInfoStore()

const vAuth = {
  mounted(el: HTMLElement, binding: Record<string, any>) {
    // console.log('aa', userInfoStore.btnPermissionMap)

    let currentPath: string = router.currentRoute.value.path
    let action: string = binding.arg
    let btnPermissionMap: Record<string, string[]> = JSON.parse(
      sessionStorage.getItem('userInfo')!
    )['btnPermissionMap']
    let actions: string[] = btnPermissionMap[currentPath]
    if (actions && !actions.includes(action)) {
      el.parentNode?.removeChild(el)
    }
  },
}

export default vAuth
