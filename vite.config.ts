import { resolve } from 'path';
import { defineConfig } from 'vite'


export default defineConfig({
    plugins: [

    ],
    build: {
        rollupOptions: {
        },
        lib: {
            entry: 'src/index.ts', // 设置入口文件
            name: 'imagePreviewer', 
            fileName: (format) => `index.${format}.js`, // 打包后的文件名
            formats: ['es','umd','iife']
        },
        sourcemap: true, // 输出.map文件
    },
})