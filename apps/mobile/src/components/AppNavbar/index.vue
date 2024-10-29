<template>
  <van-nav-bar :title="title" fixed placeholder>
    <template #right>
      <ThemeButton></ThemeButton>
    </template>
  </van-nav-bar>
</template>

<script setup lang="ts">
import ThemeButton from '../ThemeButton/index.vue'
const { title = '...' } = defineProps<{
  title?: string
}>()
</script>

<style scoped></style>
