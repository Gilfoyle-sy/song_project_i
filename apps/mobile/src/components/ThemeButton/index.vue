<template>
  <div class="theme-button" @click="themStore.toggle">
    <div class="silder" :class="themStore.theme === 'light' ? 'left' : 'right'"></div>
    <SvgSun class="svg" :class="{ gray: themStore.theme !== 'light' }" />
    <SvgMoon class="svg" :class="{ gray: themStore.theme !== 'dark' }" />
  </div>
</template>

<script setup lang="ts">
import SvgSun from './SvgSun.vue'
import SvgMoon from './SvgMoon.vue'
import { useThemeStore } from '@/stores/theme'

const themStore = useThemeStore()
</script>

<style scoped lang="scss">
.theme-button {
  --btn-width: 24px;

  width: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--van-radius-md);
  padding: var(--van-padding-base);
  background-color: var(--van-background);
  position: relative;

  .silder {
    position: absolute;
    z-index: 1;
    background-color: var(--van-background-2);
    width: var(--btn-width);
    height: var(--btn-width);
    border-radius: var(--van-radius-md);

    &.left {
      left: var(--van-padding-base);
    }
    &.right {
      right: var(--van-padding-base);
    }
  }

  .svg {
    z-index: 2;
    width: var(--btn-width);
    height: var(--btn-width);
    padding: 2px;
  }

  .gray {
    filter: grayscale(1);
  }
}
</style>
