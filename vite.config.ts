import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import jsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import { createCache } from 'rollup'

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
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
      }),
      {
        name: 'custom-post-build',
        // config(config) {
        //   console.log('config')
        //   console.log(config)
        //   console.log(111111)
        //   return {
        //     test: 'test'
        //   }
        // },
        // configResolved(config) {
        //   console.log(config)
        // },
        //   resolveId() {
        //     // console.log(__dirname)
        //   },
        // transform(code, id) {
        //   const filterName = __dirname + '/node_modules'
        //   if (!id.includes(filterName)) {
        //     console.log(id, 0)
        //   }
        // }
        // writeBundle(options, bundle) {
        //   bundle['assets/test.js'] = bundle['assets/HelloWorld-[my-hash]-2222.js']
        //   // console.log(bundle)

        //   // console.log(Object.keys(bundle), 111)
        // },

        // // 这个是rollup独有的钩子,这个狗子是处理hash占位符的,vite不能使用

        generateBundle(options, bundle, isProxy) {
          // bundle['assets/test.js'] = bundle['assets/index-[my-hash]-1111.js']
          bundle['assets/HelloWorld-[my-hash]-2222.js'].fileName = 'assets/index-test-33333.css'
        }
      }
    ],
    build: {
      rollupOptions: {
        output: {
          dir: 'dist',
          assetFileNames: 'assets/[name]-[hash]-33333.[ext]', // 其他文件
          entryFileNames: 'assets/[name]-[my-hash]-1111.js', // 用于指定入口文件的 *输出* 名称，即通过 input 配置项指定的入口文件。
          chunkFileNames: 'assets/[name]-[my-hash]-2222.js' // 用于指定非入口文件（即动态导入或代码分割生成的文件）的输出名称。
        }
      }
    },
    server: {
      proxy: {
        [loadEnv(mode, process.cwd()).VITE_API_PREFIX]: {
          target: loadEnv(mode, process.cwd()).VITE_API_SERVER,
          changeOrigin: true,
          rewrite: path => path.replace(new RegExp(`^${loadEnv(mode, process.cwd()).VITE_API_PREFIX}`), '')
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@api': '@/api'
      }
    }
  })
