import { defineConfig } from 'unocss'
import { transformerDirectives } from 'unocss'
export default defineConfig({
  // ...UnoCSS options
  transformers:[transformerDirectives()],
})
