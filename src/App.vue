<template>
  123
  <div class="msg">
    {{ msg }}
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  let msg = ref('hello world')
</script>

<style scoped lang="scss">
  .msg {
    font-family: MyFont;
    background-color: aqua;
  }
</style>
