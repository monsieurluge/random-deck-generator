import vue from '@vitejs/plugin-vue'
import { resolve as pathResolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: [
            {
                find: '@api',
                replacement: pathResolve(__dirname, 'src/api'),
            },
            {
                find: '@generator',
                replacement: pathResolve(__dirname, 'src/generator'),
            },
            {
                find: '@libs',
                replacement: pathResolve(__dirname, 'src/libs'),
            },
            {
                find: '@plugins',
                replacement: pathResolve(__dirname, 'src/plugins'),
            },
            {
                find: '@root',
                replacement: pathResolve(__dirname, 'src'),
            },
            {
                find: '@ui',
                replacement: pathResolve(__dirname, 'src/ui'),
            },
        ],
    },
})
