/**
 * @file 登录
 */

import http from '@/http'

export function reqLoginApi(body: Record<string, string>) {
  return http.post('/login', body)
}

export function reqUserInfoApi() {
  return http.post('/getUserInfo')
}
