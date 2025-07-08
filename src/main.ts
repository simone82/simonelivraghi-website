import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'
import gtagPlugin from './plugins/gtag'
import { analyticsDirectives } from './directives/analytics'
import './assets/main.css'

const app = createApp(App)
const head = createHead()

app.use(createPinia())
app.use(router)
app.use(head)
app.use(gtagPlugin, router)

// Register analytics directives
Object.entries(analyticsDirectives).forEach(([name, directive]) => {
  app.directive(name, directive)
})

app.mount('#app')
