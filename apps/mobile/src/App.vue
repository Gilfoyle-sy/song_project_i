<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import AppNavBar from '@/components/AppNavbar/index.vue'
import AppTabbar from '@/components/AppTabbar/index.vue'

const route = useRoute()
const themeStore = useThemeStore()
const meta = ref()

watchEffect(() => {
  meta.value = route.meta && route.meta
})
</script>

<template>
  <!-- <van-nav-bar safe-area-inset-top /> -->

  <AppNavBar v-if="!meta.hideNavBar" :title="meta.navBarTitle" />

  <van-config-provider class="app-container" :theme="themeStore.theme">
    <RouterView />
  </van-config-provider>

  <AppTabbar v-if="meta.showTabBar" />
</template>

<style lang="scss" scoped>
.app-container {
  height: 100%;
}
</style>
