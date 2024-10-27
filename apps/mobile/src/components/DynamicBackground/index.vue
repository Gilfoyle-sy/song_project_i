<template>
  <div class="dynamic-background">
    <canvas
      id="dynamic-background-canvas"
      ref="canvas"
      width="0"
      height="0"
    ></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, useTemplateRef, type Ref } from 'vue'

const canvas = useTemplateRef('canvas') as Ref<HTMLCanvasElement>
const ctx = ref() as Ref<CanvasRenderingContext2D>

type Circle = {
  x: number
  y: number
  dx: number
  dy: number
  radius: number
  color: string
}
let circles: Circle[] = []
const colors = ['#836fff', '#15f5ba', ' #69f2ff']

onMounted(() => {
  ctx.value = canvas.value.getContext('2d') as CanvasRenderingContext2D
  console.log(ctx.value)
  window.addEventListener('resize', resizeCanvas)
  resizeCanvas()
  animate()
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeCanvas)
})

/**
 * 初始化圆
 */
function initCircles() {
  circles = []
  const circlesCount = window.innerWidth / 100

  for (let i = 0; i < circlesCount; i++) {
    const radius = window.innerWidth / 4
    const x = randomBetween(radius, canvas.value.width - radius)
    const y = randomBetween(radius, canvas.value.height - radius)
    const dx = randomBetween(window.innerWidth / -2000, window.innerWidth / 2000)
    const dy = randomBetween(window.innerWidth / -2000, window.innerWidth / 2000)
    const color = colors[Math.floor(Math.random() * colors.length)]
    circles.push({ x, y, dx, dy, radius, color })
  }
}

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min
}

/**
 * 调整画布大小
 */
function resizeCanvas() {
  canvas.value.width = window.innerWidth * 1.5
  canvas.value.height = window.innerHeight * 1.5
  initCircles()
}

/**
 * 帧动画
 */
function animate() {
  requestAnimationFrame(animate)
  ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height)
  circles.forEach(circle => {
    if (circle.x + circle.radius > canvas.value.width || circle.x - circle.radius < 0) {
      circle.dx = -circle.dx
    }
    if (circle.y + circle.radius > canvas.value.height || circle.y - circle.radius < 0) {
      circle.dy = -circle.dy
    }
    circle.x += circle.dx
    circle.y += circle.dy
    drawCircle(circle)
  })
}

function drawCircle(circle: Circle) {
  ctx.value.beginPath()
  ctx.value.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false)
  ctx.value.fillStyle = circle.color
  ctx.value.fill()
  ctx.value.closePath()
}
</script>

<style scoped lang="scss">
.dynamic-background {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #211951;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &::before {
    content: '';
    background: hsla(0, 0%, 41%, 0.25);
    backdrop-filter: blur(70px);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &-canvas {
    position: absolute;
    top: 50%;
    left: 50;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
}
</style>
