<template>
  <div class="home-page">
    <div class="content">
      <div class="title">电站统计</div>

      <StationStats></StationStats>
    </div>

    <div class="content">
      <div class="title">发电量统计</div>
    </div>

    <div class="content">
      <div class="title">发电量图表</div>
    </div>

    <div class="content">
      <div class="title">社会贡献</div>
      <SocialStats></SocialStats>
    </div>
  </div>
</template>

<script setup lang="ts">
import StationStats from './components/StationStats.vue'
import SocialStats from './components/SocialStats.vue'
</script>

<style scoped lang="scss">
.home-page {
  padding: var(--i-page-gap) var(--i-page-gap) 60px;
  color: var(--van-text-color);

  .content {
    padding: var(--van-padding-sm);
    margin-bottom: var(--van-padding-lg);
    background-color: var(--van-background-2);
    border-radius: var(--van-radius-lg);

    .title {
      font-size: var(--van-font-size-md);
      font-weight: bold;
      padding-bottom: var(--van-padding-sm);
    }
  }
}
</style>
