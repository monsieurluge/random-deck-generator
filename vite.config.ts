import vue from '@vitejs/plugin-vue'
import { resolve as pathResolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: [
            {
                find: '_api',
                replacement: pathResolve(__dirname, 'src/api'),
            },
            {
                find: '_libs',
                replacement: pathResolve(__dirname, 'src/libs'),
            },
            {
                find: '_plugins',
                replacement: pathResolve(__dirname, 'src/plugins'),
            },
            {
                find: '_root',
                replacement: pathResolve(__dirname, 'src'),
            },
            {
                find: '_ui',
                replacement: pathResolve(__dirname, 'src/ui'),
            },
        ],
    },
})
