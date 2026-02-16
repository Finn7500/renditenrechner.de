import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import { loadTexts } from "@/composables/useText"

loadTexts();


const app = createApp(App)

// 1) globale Sprache
const lang = ref("de")

// 2) bereitstellen
app.provide("lang", lang)

app
  .use(router)
  .mount('#app')


