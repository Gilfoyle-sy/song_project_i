<template>
  <span class="stats-num">{{ outputValue.toFixed(decimals) }}</span>
</template>

<script setup lang="ts">
// TODO 这里的类型需要研究一下
import { computed } from 'vue'
import { useTransition } from '@vueuse/core'

const { num = 0, decimals = 2 } = defineProps<{
  num: number
  decimals?: number
}>()

const copyNumComputed = computed(() => num)
const outputValue = useTransition(copyNumComputed, {
  duration: 1500
})
</script>

<style scoped></style>
