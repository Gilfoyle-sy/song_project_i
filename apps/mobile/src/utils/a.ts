export const switchTheme = (target: MouseEvent, cb: () => void) => {
  if (!document.startViewTransition) return cb()

  const transition = document.startViewTransition(() => {
    cb()

    // 动画效果
    transition.ready.then(() => {
      const x = target?.clientX ?? innerWidth / 2
      const y = target?.clientY ?? innerHeight / 2
      const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
      document.documentElement.animate(
        {
          clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
        },
        {
          duration: 1000,
          easing: 'ease-in',
          // 指定要附加动画的伪元素
          pseudoElement: '::view-transition-new(root)'
        }
      )
    })
  })
}
