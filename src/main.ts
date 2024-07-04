import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { vuetify } from '@/plugins/vuetify'

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(vuetify)

app.mount('#app')
