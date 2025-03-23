import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export const vuePlugin = () => {
  return vue()
}
export const vueDevToolsPlugin = () => {
  return vueDevTools({
    launchEditor: 'webstorm'
  })
}

