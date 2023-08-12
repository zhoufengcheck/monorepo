import { defineConfig } from "vite";
export default defineConfig({
  build: {
    target: 'modules',
    //打包文件目录
    outDir: "dist",
    //压缩
    minify: true,

    lib: {
      entry: './src/index.ts',
      fileName: ()=>'index.js',
    },
    rollupOptions: {
      input: ['./src/index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js', //不用打包成.es.js,这里我们想把它打包成.js
          preserveModules: true, //让打包目录和我们目录对应
          dir: 'dist/es',//配置打包根目录
          preserveModulesRoot: 'src'
        },
        {
          format: 'umd',
          name: "core.js",
          dir: 'dist/lib',
        }
      ]
    },
  }
})
