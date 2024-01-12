import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver, VantResolver } from 'unplugin-vue-components/resolvers'
import jsx from '@vitejs/plugin-vue-jsx'
import autoprefixer from 'autoprefixer'
import path from 'path'
import tailwindcss from 'tailwindcss'
import { Plugin } from 'postcss'

interface Options {
  viewportWidth?: number
}

const _options = {
  viewportWidth: 750 // UI设计稿的宽度，可以修改(375,750)，默认给375
}

export const PostCssPxToViewport = (options: Options = _options): Plugin => {
  const opt = Object.assign({}, _options, options)
  return {
    postcssPlugin: 'postcss-px-to-viewport',
    Declaration(node) {
      // 有些px可能不需要转换  可以自定义名称
      if (
        !node.source.input.file.includes('/node_modules/') &&
        parseFloat(node.value) > 12 &&
        node.value.includes('px')
      ) {
        const num = parseFloat(node.value) // 考虑到有小数
        node.value = `${((num / opt.viewportWidth) * 100).toFixed(2)}vw`
      }
    }
  }
}

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
        resolvers: [ElementPlusResolver(), VantResolver()]
      })
    ],
    css: {
      postcss: {
        plugins: [
          tailwindcss(),
          autoprefixer({
            // 自动添加前缀 的浏览器
            overrideBrowserslist: [
              'Android 4.1',
              'iOS 7.1',
              'Chrome > 31',
              'ie >= 8'
              //'last 2 versions', // 所有主流浏览器最近2个版本
            ],
            grid: true
          }),
          PostCssPxToViewport()
        ]
      }
    },
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
