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

    <div class="footer">
      <van-checkbox v-model="isAgree"></van-checkbox>
      &nbsp; 我已阅读
      <div class="tip">《隐私协议》</div>
      与
      <div class="tip">《用户服务协议》</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputPassword from '@/components/InputPassword/index.vue'
import { showToast } from 'vant'
import { useRouter } from 'vue-router'

const userPhone = ref('admin')
const userPwd = ref('admin')

const isAgree = ref(false)

const router = useRouter()
function onLogin() {
  console.log(userPwd.value)
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
    padding: 0 24px 40px;
    background-image: url('@/assets/background/bg-login.png');
    background-size: cover;
    div {
      font-size: 20px;
      font-weight: 600;
    }
  }

  .form {
    padding: 36px;

    .title {
      font-size: 18px;
      width: max-content;
      padding-bottom: 4px;
      margin-bottom: 16px;
      border-bottom: 3px solid #4787fa;
    }
  }

  .footer {
    margin-top: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-bottom: 36px;

    .tip {
      color: #4787fa;
    }
  }

  .van-field {
    border: 1px solid var(--van-border-color);
    border-radius: 4px;
    margin-bottom: 16px;
  }
}
</style>
