import { defineConfig, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import vueSetupExtend from 'vite-plugin-vue-setup-extend' // 设置name属性  
import dts from 'vite-plugin-dts'
// import viteCompression from 'vite-plugin-compression' // 静态资源压缩
// import AutoImport from 'unplugin-auto-import/vite' // 自动导入
// import {visualizer} from 'rollup-plugin-visualizer' // 打包后的视图文件 

// https://vitejs.dev/config/
export const getConfig =(): UserConfig=>{
   const config: UserConfig = 
  {
    plugins: [
      vue(),
      dts({
        entryRoot: 'src',
        outputDir: ['../dist/es/src','../dist/lib/src'],
        tsConfigFilePath: '../../tsconfig.json'

      }), 
      vueJsx(),
      vueSetupExtend(),
      // viteCompression({
      //   verbose: true,
      //   disable: false, // 不禁用压缩
      //   deleteOriginFile: false, // 压缩后是否删除原文件
      //   threshold: 10240, // 压缩前最小文件大小
      //   algorithm: 'gzip', // 压缩算法
      //   ext: '.gz', // 文件类型
      // }),
      // visualizer({
      //   open: false
      // })
    ],
    server: {
      host: '0.0.0.0',
      port: 3300,
      open: true
    },
    resolve: {
      // 配置别名
      alias: { 
        '@': resolve(__dirname, 'packages')
      },
      // 类型： string[] 导入时想要省略的扩展名列表。
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs'],
    },
    // base: './',
    build: { 
      // target: 'modules', 
      minify: false, // 压缩
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      sourcemap: false, //单独输出sourcemap文件
      // cssCodeSplit: true, // 强制内联CSS
      emptyOutDir: true,
      rollupOptions: {
        // 请确保外部化那些你的库中不需要的依赖
        external: [
          'vue'
          ],
        input: ['index.ts'],
        output:
         [   
          {
            format: 'es', 
            entryFileNames: '[name].mjs',
            //让打包目录和我们目录对应
            // preserveModules: true,
            exports: 'named',
            //配置打包根目录
            dir: '../dist/es'
          },
          {
            format: 'cjs',
            entryFileNames: '[name].js',
            //让打包目录和我们目录对应
            // preserveModules: true,
            exports: 'named',
            //配置打包根目录
            dir: '../dist/lib'
          }
        ] 
      },
      lib: { 
        entry: './index.ts',
        name: 'lw-vue-plus',
        // formats: ['es', 'umd'],
        // fileName: 'dist'
      }
    }
  }
  return config
} 
export default defineConfig(getConfig())