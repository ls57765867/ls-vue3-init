import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import jsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    jsx(),
    AutoImport({
      imports: ['vue', 'vue-router', { pinia: ['defineStore', 'storeToRefs'] }],
      dirs: ['./components/**'],
      dts: true,
      resolvers: [ElementPlusResolver()],
      eslintrc: {
        enabled: true // <-- this
      }
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ]
})
