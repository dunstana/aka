import './assets/main.css'

import { createApp } from 'vue'
import App from './layout/App.vue'
import router from "@/routes/index.js";
import mainStore from "@/stores/MainStore/index.js";

const app = createApp(App)

app.use(mainStore)
app.use(router)

app.mount('#app')
