import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './lib/index.ts',
      name: 'Lib',
      fileName: 'lib'
    },
    rollupOptions: {
      external: ['moment'],
      output: {
        globals: {
          moment: 'moment'
        }
      }
    }
  }
})
