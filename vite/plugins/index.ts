import { vuePlugin, vueDevToolsPlugin } from './vue'
import { jsxPlugin } from './jsx'
import { AutoImportPlugin, ComponentsPlugin, IconsPlugin, routerPlugin } from './unplugin'
import { UnocssPlugin } from './uno'
import { AlovaJs } from './alova'

export default () => {
  return [
    UnocssPlugin(),
    routerPlugin(),
    IconsPlugin(),
    vuePlugin(),
    vueDevToolsPlugin(),
    jsxPlugin(),
    AutoImportPlugin(),
    ComponentsPlugin(),
  ]
}
