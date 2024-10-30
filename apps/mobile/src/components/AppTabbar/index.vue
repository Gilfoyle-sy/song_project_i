<template>
  <van-tabbar v-model="active">
    <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/station" icon="birthday-cake-o">电站</van-tabbar-item>
    <van-tabbar-item replace to="/workbench" icon="apps-o">工作台</van-tabbar-item>
    <van-tabbar-item replace to="/backlog" icon="todo-list-o">待办</van-tabbar-item>
    <van-tabbar-item replace to="/user" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref(0)
</script>

<style lang="scss" scoped></style>
