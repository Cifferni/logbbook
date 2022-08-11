import { createStore } from 'vuex'
import keepAliveRoute from './modules/keepAliveRoute'
const state = {}
const actions = {}
const mutations = {}
const store = createStore({
    state,
    actions,
    mutations,
    modules: {
        keepAliveRoute
    }
})
export default store
