import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import ElementPlus from 'unplugin-element-plus/vite'
import viteCompression from 'vite-plugin-compression'
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
    let sourcemap: 'inline' | boolean | 'hidden' = false
    if (env.VITE_CREATE_SOURCEMAP === 'inline') {
        sourcemap = 'inline'
    }
    return {
        base: './',
        brotliSize: true,
        plugins: [
            vue(),
            ElementPlus(),
            viteCompression({
                verbose: true,
                disable: false,
                threshold: 10240,
                algorithm: 'gzip',
                ext: '.gz'
            })
        ],
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src')
            }
        },
        server: {
            proxy: {
                '/api': {
                    target: env.VITE_BASE_API,
                    changeOrigin: true,
                    secure: false,
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
            }
        },
        build: {
            terserOptions: {
                compress: {
                    drop_console: JSON.parse(env.VITE_DROP_CONSOLE),
                    drop_debugger: true
                }
            },
            rollupOptions: {
                output: {
                    chunkFileNames: 'js/[name]-[hash].js',
                    entryFileNames: 'js/[name]-[hash].js',
                    assetFileNames: '[ext]/[name]-[hash].[ext]'
                }
            },
            minify: 'terser',
            sourcemap,
            chunkSizeWarningLimit: 500
        }
    }
})
