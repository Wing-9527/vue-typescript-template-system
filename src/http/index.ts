import Axios from 'axios'

const http = Axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 60000,
})

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    let token = sessionStorage.getItem('token')
    if (token) {
      config['token'] = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    // handle global error
    if (response.data.code === 400) {
      alert('error')
    }
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

// const AxiosPlugin = {
//   install(app) {
//     app.config.globalProperties.http = http
//   },
// }

// export default AxiosPlugin

export default http
