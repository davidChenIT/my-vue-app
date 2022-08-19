
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
      alias: {
          '@': path.resolve(__dirname, 'src') // 用 @ 符号替换 src 文件路径
      } 
  },
  plugins: [vue()]
})
