import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import request from '@/api/axios'
import '@/assets/styles/reset.scss'
import 'element-plus/dist/index.css'
request
    .get('/weather_mini?city=北京')
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error, 'error')
    })
createApp(App).use(router).mount('#app')
