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
        <t-menu-item value="item1">
          <template #icon>
            <t-icon name="dashboard" />
          </template>
          仪表盘1
        </t-menu-item>
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
const Logo = require('@/assets/logo/logo.png')
</script>

<style lang="scss" scoped></style>
