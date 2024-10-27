<template>
  <div class="login-page">
    <DynamicBackground />
    <!--
    <div class="login-page__banner">
      <div>
        您好，欢迎使用
        <br />
        个人电网资产管理平台
      </div>
    </div>

    <div class="login-page__form"></div> -->
  </div>
</template>

<script setup lang="ts">
import DynamicBackground from '@/components/DynamicBackground/index.vue'
// import InputPassword from '@/components/InputPassword/index.vue'
</script>

<style scoped lang="scss">
.login-page {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  .login-page__banner {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 240px;
    padding: 0 24px 40px;
    background-image: url('@/assets/background/bg-login.png');
    background-size: cover;
    font-weight: 600;
    div {
      // color: #ffffff;
      font-size: 20px;
    }
  }

  .login-page__form {
    background-color: red;
    width: 80%;
    max-width: 400px;
    height: 60%;
    max-height: 500px;
  }
}
</style>
