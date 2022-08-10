import { RouteRecordRaw } from 'vue-router'
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
export default routes
