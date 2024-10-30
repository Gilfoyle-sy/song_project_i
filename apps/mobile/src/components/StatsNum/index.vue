<template>
  <span class="stats-num">{{ outputValue.toFixed(2) }}</span>
</template>

<script setup lang="ts">
// TODO 这里的类型需要研究一下
import { computed } from 'vue'
import { useTransition } from '@vueuse/core'

const { num = 0 } = defineProps<{
  num: number
}>()

const copyNumComputed = computed(() => num)
const outputValue = useTransition(copyNumComputed, {
  duration: 1500
})
</script>

<style scoped></style>
