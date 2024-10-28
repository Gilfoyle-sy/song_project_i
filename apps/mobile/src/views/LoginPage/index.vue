<template>
  <div class="login-page">
    <!-- <DynamicBackground /> -->

    <div class="banner">
      <div>您好,欢迎使用</div>
      <div>个人电网资产管理平台</div>
    </div>

    <div class="form">
      <div class="title">密码登录</div>
      <van-field v-model="userPhone" placeholder="请输入手机号" clearable />

      <InputPassword v-model="userPwd" />

      <van-button type="primary" block @click="onLogin"> 登录 </van-button>
    </div>

    <AgreementLine class="footer" v-model="isAgree" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import InputPassword from '@/components/InputPassword/index.vue'
import AgreementLine from '@/components/AgreementLine/index.vue'

const userPhone = ref('admin')
const userPwd = ref('admin')

const isAgree = ref(false)

const router = useRouter()
function onLogin() {
  if (!isAgree.value) return showToast('请阅读协议并同意')
  router.push({ name: 'Home' })
}
</script>

<style scoped lang="scss">
.login-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: var(--van-text-color);

  .banner {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 220px;
    padding: 0 var(--i-page-gap) 40px;
    background-image: url('@/assets/background/bg-login.png');
    background-size: cover;
    div {
      font-size: 20px;
      font-weight: 600;
    }
  }

  .form {
    padding: calc(var(--i-page-gap) + 8px);

    .title {
      font-size: var(--van-font-size-lg);
      width: max-content;
      padding-bottom: var(--van-padding-xs);
      margin-bottom: 16px;
      border-bottom: 3px solid #4787fa;
    }
  }

  .footer {
    margin-top: auto;
    padding-bottom: 36px;
  }

  .van-field {
    border: 1px solid var(--van-border-color);
    border-radius: var(--van-radius-md);
    margin-bottom: 16px;
  }
}
</style>
