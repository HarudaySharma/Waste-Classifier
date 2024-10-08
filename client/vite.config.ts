import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import sass from "sass"


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                implementation: sass,
            },
        },
    },
    server: {
        proxy: {
            // this proxy is not working
            '/api': {
                target: "https://waste-classifier-server.vercel.app",
                changeOrigin: true,
            }
        }

    }
})
