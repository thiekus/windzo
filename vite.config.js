import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import eslintPlugin from 'vite-plugin-eslint'
// import legacy from '@vitejs/plugin-legacy'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        vue(),
        // eslintPlugin(),
        // legacy({
        //     targets: ['defaults', 'Firefox >= 52'],
        //     additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
        // }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    server: {
        open: true,
    },
})
