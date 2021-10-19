import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import path from 'path/posix'

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  // 类型： Record<string, string> 定义全局变量替换方式。每项在开发时会被定义为全局变量，而在构建时则是静态替换。
  define: {
    'process.platform': null,
    'process.version': null,
  },
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, './'),
      '@': resolve(__dirname, 'src')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs'] // 类型： string[] 导入时想要省略的扩展名列表。
  },
  server: {
    hmr: {
      overlay: false // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
    },

    // 服务配置
    port: 8000,
    open: true,
    cors: true, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace('/api', '')
      }
    }
  },

  // https://www.vitejs.net/config/#build-commonjsoptions
  build: {
    chunkSizeWarningLimit: 1500,
    commonjsOptions: {
      ignoreDynamicRequires: false, // Default: false
      transformMixedEsModules: true,
      brotliSize: false, // 禁用会提高大型项目的构建性能。
      sourceMap: false
    } as any,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if(id.includes('node_modules')) {
            return id.toString().split('node_modules')[1].split('/')[0].toString()
          }
        }
      }
    }
  }
})
