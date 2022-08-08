import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import 'element-plus/dist/index.css'
import request from '@/api/axios'
request
    .get('/weather_mini?city=北京')
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error, 'error')
    })
createApp(App).use(router).mount('#app')
