import { defineStore } from 'pinia'

import { reqUserInfoApi } from '@/api/login/login.api'

interface UserInfoStoreState {
  menu: Record<string, unknown>[]
}

export const useUserInfoStore = defineStore('userInfo', {
  persist: {
    key: 'info',
    storage: sessionStorage,
  },
  state: () => {
    return {
      menu: [],
    } as UserInfoStoreState
  },
  actions: {
    async reqUserInfo() {
      let res = await reqUserInfoApi()
      this.menu = res.data
    },
  },
})
