<template>
  <t-dropdown
    :options="[{ content: '退出登录', value: 'logout' }]"
    @click="handleDropdownClick"
  >
    <div class="avatar-dropdown">
      <t-avatar shape="round" size="large">
        <template #icon>
          <t-image
            fit="cover"
            :src="userInfoStore.avatar"
            :style="{ width: '40px', height: '40px' }"
          />
        </template>
      </t-avatar>
      <span class="avatar-dropdown__username">{{ userInfoStore.name }}</span>
    </div>
  </t-dropdown>
</template>

<script setup lang="ts">
import { useUserInfoStore } from '@/store/userInfo'
import { useLoginStore } from '@/store/login'

const userInfoStore = useUserInfoStore()
const loginStore = useLoginStore()

function handleDropdownClick(dropdownItem) {
  if (dropdownItem.value === 'logout') {
    loginStore.reqLogout()
  }
}
</script>

<style scoped lang="scss">
.avatar-dropdown {
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  &__username {
    margin-left: 10px;
  }
}
</style>
