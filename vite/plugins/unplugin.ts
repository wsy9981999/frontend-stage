import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'


export const AutoImportPlugin =  () => {
  // console.log(await fs.mkdir(dirname("app.json")))

  return AutoImport({
    imports: ['vue', '@vueuse/core', '@vueuse/math', '@vueuse/head', VueRouterAutoImports, 'pinia'],
    resolvers: [
      NaiveUiResolver(),
      IconsResolver({
        prefix: 'icon',
      }),
    ],
    dirs: ['src/api', 'src/hooks', 'src/utils'],
    dts: './types/imports.d.ts',
    eslintrc: {
      enabled: true,
      filepath:'./eslint/imports.json'
    },
  })
}
export const ComponentsPlugin = () => {
  return Components({
    dts: 'types/components.d.ts',
    resolvers: [
      NaiveUiResolver(),
      IconsResolver({
        prefix: 'icon',
      }),
    ],
    dirs: ['src/components'],
  })
}

export const IconsPlugin = () => {
  return Icons({
    // experimental
    autoInstall: true,
    compiler: 'vue3',
  })
}

export const routerPlugin = () => {
  return VueRouter({
    routesFolder: [
      {
        src: 'src/pages',
      },
    ],
    dts: './types/routes.d.ts',
  })
}
