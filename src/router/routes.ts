import { RouteRecordRaw } from 'vue-router'
import store from '@/store/index'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/homePage',
        name: 'homePage',
        component: () => import('@/pages/homePage/index.vue'),
        meta: { transition: 'fade', keepAlive: true }
    },
    {
        path: '/page',
        name: 'page',
        component: () => import('@/pages/page/index.vue'),
        meta: { transition: 'fade', keepAlive: false }
    },
    { path: '/', redirect: '/homePage' }
]
store.dispatch('setKeepAliveRouteList', routes)
export default routes
