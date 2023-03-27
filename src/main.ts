import { createApp } from 'vue'

import App from './App.vue'

import TDesign from 'tdesign-vue-next'

import '@/styles/global.scss'

import router from './router'

// import AxiosPlugin from './http'

import { createPinia } from 'pinia'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// mockjs
import './mock'

import vAuth from '@/directives/vAuth'

const app = createApp(App)

const pinia = createPinia()

app.use(router)

app.use(TDesign)

// app.use(AxiosPlugin)

pinia.use(piniaPluginPersistedstate)

app.use(pinia)

import './permission'

// directives
app.directive('auth', vAuth)

app.mount('#app')
