<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import type { ConfigProviderTheme } from 'vant'
import Tabbar from '@/components/Tabbar/index.vue'
const theme = ref<ConfigProviderTheme>('light')
setTimeout(() => {
  theme.value = 'dark'
}, 3000)

const route = useRoute()
const meta = ref()

watchEffect(() => {
  meta.value = route.meta && route.meta
})
</script>

<template>
  <!-- <van-nav-bar safe-area-inset-top /> -->

  <van-nav-bar v-if="!meta.hideNavBar" :title="meta.navBarTitle" fixed placeholder />

  <van-config-provider class="app-container" :theme="theme">
    <RouterView />
  </van-config-provider>

  <Tabbar v-if="meta.showTabBar"></Tabbar>

  <van-number-keyboard safe-area-inset-bottom />
</template>

<style lang="scss" scoped>
.app-container {
  height: 100%;
}
</style>
