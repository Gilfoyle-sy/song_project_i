<template>
  <div class="power-stats">
    <div class="text-content">
      <div>当日发电量（万kWh）</div>
      <div>29355</div>
    </div>

    <div class="line"></div>
    <div>
      <VueDataUi component="VueUiSparkStackbar" :dataset="monthDataset" :config="monthConfig" />
    </div>
    <div class="line"></div>
    <div>
      <VueDataUi component="VueUiSparkStackbar" :dataset="yearDataset" :config="yearConfig" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { VueDataUi } from 'vue-data-ui'
import 'vue-data-ui/style.css'
import { _monthConfig, _yearConfig } from './power_stats_config'
import { useThemeStore } from '@/stores/theme'

const monthConfig = ref(_monthConfig)
const yearConfig = ref(_yearConfig)
const themeStore = useThemeStore()

const monthDataset = ref([
  {
    name: '本月发电量',
    value: 256,
    color: '#42d392'
  },
  {
    name: '剩余发电量',
    value: 128,
    color: '#6376DD'
  }
])

const yearDataset = ref([
  {
    name: '今年发电量',
    value: 64,
    color: '#ff6400'
  },
  {
    name: '剩余发电量',
    value: 256,
    color: '#6376DD'
  }
])

watch(
  () => themeStore.vueDataUiTheme,
  newVal => {
    monthConfig.value.theme = newVal
    yearConfig.value.theme = newVal
  },
  { immediate: true }
)
</script>

<style scoped lang="scss">
.power-stats {
  .line {
    border: 1px solid var(--van-border-color);
    margin: var(--van-padding-xs) 0;
  }

  .text-content {
    border-radius: var(--van-radius-lg);
    background-color: var(--van-background);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 var(--van-padding-lg);
    :first-child {
      color: var(--van-text-color);
    }
    :last-child {
      font-size: 24px;
      color: var(--van-primary-color);
      font-weight: bold;
    }
  }
}
</style>
