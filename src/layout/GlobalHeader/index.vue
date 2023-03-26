<template>
  <t-header>
    <div class="g-header">
      <div class="g-header__leftContent">
        <t-breadcrumb max-item-width="150">
          <template v-for="item of breadcrumb" :key="item.path">
            <!-- TODO: 此处杜绝渲染 / 根路径 -->
            <t-breadcrumbItem v-if="item.path !== '/'" :to="item.path">
              {{ item.meta?.title }}
            </t-breadcrumbItem>
          </template>
        </t-breadcrumb>
      </div>
      <div class="g-header__rightContent">
        <AvatarDropdown />
      </div>
    </div>
  </t-header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import AvatarDropdown from './components/AvatarDropdown.vue'

const route = useRoute()

let breadcrumb = computed(() => {
  return route.matched
})
</script>

<style scoped lang="scss">
.g-header {
  height: 100%;
  display: flex;
  &__leftContent {
    flex: 1;
    display: flex;
    :deep() .t-breadcrumb {
      margin-left: 20px;
    }
  }
  &__rightContent {
    width: 200px;
  }
}
</style>
