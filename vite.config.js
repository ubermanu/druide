import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte()],
    resolve: {
        alias: {
            $components: path.resolve(__dirname, './src/components'),
            $stores: path.resolve(__dirname, './src/stores'),
            $views: path.resolve(__dirname, './src/views'),
        }
    }
})
