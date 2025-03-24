import 'virtual:uno.css'

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router.ts'
import pinia from './pinia.ts'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
