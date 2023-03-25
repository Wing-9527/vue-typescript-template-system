<template>
  <t-layout>
    <t-aside>
      <t-menu theme="light" default-value="2-1" height="550px">
        <template #logo>
          <t-image
            fit="cover"
            :src="Logo"
            :style="{ width: '232px', height: '56px' }"
          />
        </template>
        <div v-for="item of renderMenu" :key="item.path" :value="item.path">
          <t-submenu
            v-if="item.children?.length"
            :value="item.path"
            :title="item.meta?.title"
          >
            <!-- <template #icon>
                <t-icon name="code" />
              </template> -->
            <t-menu-item
              v-for="subItem of item.children"
              :key="subItem.path"
              :value="subItem.path"
              :href="pathPrefix + subItem.path"
            >
              {{ subItem.meta?.title }}
            </t-menu-item>
          </t-submenu>
          <t-menu-item v-else :href="pathPrefix + item.path">
            {{ item.meta?.title }}
          </t-menu-item>
        </div>
      </t-menu>
    </t-aside>
    <t-layout>
      <t-header>Header</t-header>
      <t-content>
        <RouterView />
      </t-content>
      <t-footer>Footer</t-footer>
    </t-layout>
  </t-layout>
</template>

<script setup lang="ts">
import { useUserInfoStore } from '@/store/userInfo'
import router from '@/router'

const Logo = require('@/assets/logo/logo.png')

const userInfoStore = useUserInfoStore()
const renderMenu = userInfoStore.menu[0].children // 渲染的菜单

const pathPrefix = router.options.history.base ? '/#' : '' // 判断是hash路由还是history路由，给路径加前缀
</script>

<style lang="scss" scoped>
.t-layout {
  height: 100%;
}
</style>
