import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/index.ts',
      name: 'Utils',
      fileName: 'utils'
    },
    // 排除文件
    rollupOptions: {
      external: ['moment', 'dayjs'],
      output: {
        globals: {
          moment: 'moment',
          dayjs: 'dayjs'
        }
      }
    }
  }
})
