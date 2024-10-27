<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
const theme = ref('dark')
setTimeout(() => {
  // theme.value = 'light'
}, 3000)
</script>

<template>
  <van-config-provider
    class="app-container"
    :theme="theme"
  >
    <RouterView />
  </van-config-provider>
</template>

<style lang="scss" scoped>
.app-container {
  height: 100vh;
}
</style>
