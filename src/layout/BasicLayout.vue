<template>
  <t-layout>
    <t-aside :width="collapsed ? '80px' : '200px'">
      <t-menu :collapsed="collapsed" :width="['200px', '80px']">
        <template #logo>
          <img
            :src="Logo"
            :style="{ width: '32px', height: '32px', marginLeft: '24px' }"
          />
          <span v-show="!collapsed" class="system-name">Vue admin</span>
        </template>
        <div v-for="item of renderMenu" :key="item.path" :value="item.path">
          <t-submenu
            v-if="item.children?.length"
            :value="item.path"
            :title="item.meta?.title"
          >
            <template #icon>
              <t-icon :name="item.meta?.icon" />
            </template>
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
            <template #icon>
              <t-icon :name="item.meta?.icon" />
            </template>
            {{ item.meta?.title }}
          </t-menu-item>
        </div>
        <template #operations>
          <t-button
            class="t-demo-collapse-btn"
            variant="text"
            shape="square"
            @click="handleCollapsedChange"
          >
            <template #icon><t-icon :name="iconName" /></template>
          </t-button>
        </template>
      </t-menu>
    </t-aside>
    <t-layout>
      <GlobalHeader />
      <t-content>
        <RouterView />
      </t-content>
    </t-layout>
  </t-layout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import router from '@/router'
import { useUserInfoStore } from '@/store/userInfo'
import GlobalHeader from './GlobalHeader/index.vue'

const Logo = require('@/assets/logo/logo.png')

const userInfoStore = useUserInfoStore()
const renderMenu = userInfoStore.menu[0].children // 渲染的菜单

const pathPrefix = router.options.history.base ? '/#' : '' // 判断是hash路由还是history路由，给路径加前缀

// 菜单展开收起
const collapsed = ref(false)

const iconName = computed(() => (collapsed.value ? 'menu-fold' : 'menu-unfold'))

function handleCollapsedChange() {
  collapsed.value = !collapsed.value
}
</script>

<style lang="scss" scoped>
.t-layout {
  height: 100%;
}
:deep() .t-menu__logo {
  background-color: #304156;
}
.system-name {
  margin-left: 10px;
  font-family: 'INKFREE';
  font-size: large;
  font-weight: bold;
  color: #ffffff;
}
</style>
