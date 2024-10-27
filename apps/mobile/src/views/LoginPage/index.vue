<template>
  <div class="login-page">
    <div>这是登录页面</div>
    <canvas
      class="bg-canvas"
      ref="canvas"
    ></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue'

const canvasRef = useTemplateRef<HTMLCanvasElement>('canvas')

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  canvas.setAttribute('width', this.el.offsetWidth)
  const ctx = canvas.getContext('2d')
})

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function draw() {
  const circles = []
  const colors = ['#836fff', '#15f58a', '#69f2ff']
}
</script>

<style scoped lang="scss">
.bg-canvas {
  width: 100%;
  height: 100%;
  background-color: red;
}
</style>
