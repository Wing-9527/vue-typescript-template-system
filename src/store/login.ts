import { defineStore } from 'pinia'

import { reqLoginApi } from '@/api/login/login.api'

export const useLoginStore = defineStore('login', {
  actions: {
    async reqLogin(data: Record<string, string>) {
      let res = await reqLoginApi(data)
      sessionStorage.setItem('token', res.data)
    },
  },
})
