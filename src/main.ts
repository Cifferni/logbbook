import { createApp } from 'vue'
import { Quasar, Notify } from 'quasar'
import { banConsole } from '@/utils/banConsole'
import App from './App.vue'
import router from './router/index'
import store from '@/store/index'
import '@/assets/styles/reset.scss'
import 'quasar/src/css/index.sass'
import '@quasar/extras/material-icons/material-icons.css'
import quasarLang from 'quasar/lang/zh-CN'
try {
    banConsole()
} catch (error: any) {
    console.log(error)
}

createApp(App)
    .use(router)
    .use(store)
    .use(Quasar, {
        lang: quasarLang,
        plugins: {
            Notify
        }
    })
    .mount('#app')
