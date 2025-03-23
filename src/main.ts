import 'virtual:uno.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from './pinia.ts'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
