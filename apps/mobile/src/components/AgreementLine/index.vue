<template>
  <div class="agreement-line">
    <van-checkbox v-model="isAgree"></van-checkbox>
    <div class="txt">我已阅读</div>
    <div class="tag">《隐私协议》</div>
    <div class="txt">与</div>
    <div class="tag">《用户服务协议》</div>
  </div>
</template>

<script setup lang="ts">
const isAgree = defineModel<boolean>({ default: false })
</script>

<style scoped lang="scss">
.agreement-line {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--van-font-size-sm);

  .txt {
    margin: 0 var(--van-padding-base);
  }

  .tag {
    color: var(--van-primary-color);
  }
}
</style>
