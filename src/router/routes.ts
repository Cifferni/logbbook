import { RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/homePage',
        name: 'homePage',
        component: () => import('@/pages/homePage/index.vue')
    }
]
export default routes
