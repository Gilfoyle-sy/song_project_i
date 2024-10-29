<template>
  <div class="station-stats">
    <div class="text-content">
      <div class="text-item">
        <div>15000</div>
        <div>电站总数量（户）</div>
      </div>
      <div class="line"></div>
      <div class="text-item">
        <div>1101.37</div>
        <div>装机总容量（kW）</div>
      </div>
    </div>
    <div class="chart-content">
      <VueDataUi component="VueUiDonut" :dataset="dataset" :config="config" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { VueDataUi } from 'vue-data-ui'
import 'vue-data-ui/style.css'
import { stationData } from './station_chart_config'
import { useThemeStore } from '@/stores/theme'

const dataset = ref([
  { name: '正常', values: [1020], color: '#30c479' },
  { name: '未并网', values: [246], color: '#4ca4fd' },
  { name: '离线', values: [104], color: '#38cfff' },
  { name: '故障', values: [50], color: '#f86f5c' },
  { name: '异常', values: [100], color: '#ff9f30' }
])
const config = ref(stationData)
const themeStore = useThemeStore()

watch(
  () => themeStore.vueDataUiTheme,
  newVal => {
    config.value.theme = newVal
  },
  { immediate: true }
)
</script>

<style scoped lang="scss">
.station-stats {
  .text-content {
    background-color: var(--van-primary-color);
    box-shadow: 0rpx 4rpx 16rpx 0rpx rgba(8, 110, 209, 0.2);
    border-radius: var(--van-radius-lg);
    display: flex;
    padding: 20px;
    .text-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: var(--van-white);

      :first-child {
        font-size: 24px;
      }
      :last-child {
        font-size: var(--van-font-size-xs);
      }
    }
    .line {
      width: 1px;
      align-items: stretch;
      margin: var(--van-padding-base) 0;
      background-color: var(--van-white);
    }
  }

  .chart-content {
    border-radius: var(--van-radius-lg);
    margin-top: var(--van-padding-xs);
    box-shadow: 0rpx 4rpx 16rpx 0rpx rgba(8, 110, 209, 1);

    overflow: hidden;
    :deep(.vue-data-ui-legend) {
      background-color: red;
    }
  }
}
</style>
