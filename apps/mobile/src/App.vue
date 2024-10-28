<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import type { ConfigProviderTheme } from 'vant'
const theme = ref<ConfigProviderTheme>('light')
setTimeout(() => {
  theme.value = 'dark'
}, 3000)
</script>

<template>
  <!-- <van-nav-bar safe-area-inset-top /> -->

  <van-config-provider class="app-container" :theme="theme">
    <RouterView />
  </van-config-provider>

  <van-number-keyboard safe-area-inset-bottom />
</template>

<style lang="scss" scoped>
.app-container {
  height: 100%;
}
</style>
