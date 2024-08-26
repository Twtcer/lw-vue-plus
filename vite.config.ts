import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import vueSetupExtend from 'vite-plugin-vue-setup-extend' // 设置name属性 
import viteCompression from 'vite-plugin-compression' // 静态资源压缩
import dts from 'vite-plugin-dts'
// import AutoImport from 'unplugin-auto-import/vite' // 自动导入
// import {visualizer} from 'rollup-plugin-visualizer' // 打包后的视图文件 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({outputDir: 'dist/es'}), 
    vueJsx(),
    vueSetupExtend(),
    viteCompression({
      verbose: true,
      disable: false, // 不禁用压缩
      deleteOriginFile: false, // 压缩后是否删除原文件
      threshold: 10240, // 压缩前最小文件大小
      algorithm: 'gzip', // 压缩算法
      ext: '.gz', // 文件类型
    }),
    // visualizer({
    //   open:true,  //注意这里要设置为true，否则无效
    //   gzipSize:true,
    //   brotliSize:true
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
      '@': resolve(__dirname, 'packages'),
      'docs': resolve(__dirname, 'docs')      
    },
    // 类型： string[] 导入时想要省略的扩展名列表。
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs'],
  },
  // base: './',
  build: { 
    outDir: 'dist',
    // target: 'modules', 
    minify: false, // 压缩
    // cssCodeSplit: true, // 强制内联CSS
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: [
        'vue',
         'element-plus'
        ],
      input: ['packages/index.ts'],
      output: [   
        {
          format: 'es',
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          // preserveModules: true,
          // exports: 'named',
          //配置打包根目录
          dir: 'dist/es'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].umd.js',
          //让打包目录和我们目录对应
          // preserveModules: true,
          // exports: 'named',
          //配置打包根目录
          dir: 'dist/lib'
        }
      ]
    },
    lib: { 
      entry: resolve(__dirname, 'packages/index.ts'),
      name: 'LwVuePlus',
      formats: ['es', 'cjs'],
      fileName: 'lw-vue-plus'
    },
  }
})
