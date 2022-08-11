import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from '@/store/index'
import '@/assets/styles/reset.scss'
import 'element-plus/dist/index.css'
import { banConsole } from '@/utils/banConsole'
try {
    banConsole()
} catch (error: any) {
    console.log(error)
}
createApp(App).use(store).use(router).mount('#app')
