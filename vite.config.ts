import { fileURLToPath, URL } from 'node:url'
import plugins from './vite/plugins'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(()=> {
  return {
    plugins:plugins(),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
