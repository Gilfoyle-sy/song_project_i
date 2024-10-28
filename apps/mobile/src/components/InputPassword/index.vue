<template>
  <van-field
    v-model="password"
    :placeholder="placeholder"
    :type="showPassword ? 'text' : 'password'"
    clearable
  >
    <template #right-icon>
      <img
        class="icon-eye"
        v-show="showPassword"
        src="@/assets/icons/eye-fill.png"
        @click="showPassword = false"
        alt=""
      />
      <img
        class="icon-eye"
        v-show="!showPassword"
        src="@/assets/icons/eye-off.png"
        @click="showPassword = true"
        alt=""
      />
    </template>
  </van-field>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const { placeholder = '请输入密码' } = defineProps<{
  placeholder?: string
}>()
const password = defineModel({ default: '' })
const showPassword = ref(false)
</script>

<style lang="scss" scoped>
.van-field {
  border: 1px solid var(--van-border-color);
  border-radius: 4px;
  margin-bottom: 16px;
  .van-field__right-icon {
    .icon-eye {
      width: 20px;
      height: 20px;
      display: block;
    }
  }
}
</style>
