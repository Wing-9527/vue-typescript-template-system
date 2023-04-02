import router from '@/router'
import { useUserInfoStore } from '@/store/userInfo'

const vAuth = {
  mounted(el: HTMLElement, binding: Record<string, any>) {
    const userInfoStore = useUserInfoStore()
    let currentPath: string = router.currentRoute.value.path
    let action: string = binding.arg
    // let btnPermissionMap: Record<string, string[]> = JSON.parse(
    //   sessionStorage.getItem('userInfo')!
    // )['btnPermissionMap'] // TODO: storage 清除后，需要 window.reload()
    let btnPermissionMap = userInfoStore.btnPermissionMap
    // 没有对应页面映射，actions  = []
    let actions: string[] = btnPermissionMap[currentPath] ?? []
    if (actions && !actions.includes(action)) {
      el.parentNode?.removeChild(el)
    }
  },
}

export default vAuth
