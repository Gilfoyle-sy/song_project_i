<template>
  <div class="social-stats">
    <div class="item item1">
      <div>22.35吨</div>
      <div>节约标准煤</div>
    </div>
    <div class="item item2">
      <div>26.54吨</div>
      <div>CO₂减排量</div>
    </div>
    <div class="item item3">
      <div>37千棵</div>
      <div>等效植树量</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.social-stats {
  display: flex;
  justify-content: space-between;

  .item {
    border-radius: var(--van-radius-lg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: var(--van-padding-xs);
    flex: 1;
    height: 118px;
    color: var(--van-gray-7);

    :first-child {
      font-size: var(--van-font-size-lg);
      font-weight: bold;
    }
    :last-child {
      font-size: var(--van-font-size-xs);
    }
  }

  .item1 {
    background-image: url('@/assets/background/bg-social-1.png');
    margin-right: var(--van-padding-base);
  }

  .item2 {
    background-image: url('@/assets/background/bg-social-2.png');
    margin: 0 var(--van-padding-base);
  }

  .item3 {
    background-image: url('@/assets/background/bg-social-3.png');
    margin-left: var(--van-padding-base);
  }
}
</style>
