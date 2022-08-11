import { RouteRecordRaw } from 'vue-router'
interface StateType {
    keepAliveRouteList: string[]
}
const state: StateType = {
    keepAliveRouteList: []
}
const actions = {
    setKeepAliveRouteList({ commit }: any, value: Array<RouteRecordRaw>) {
        const result: Array<string> = value.reduce((pre: StateType['keepAliveRouteList'], item: any) => {
            if (item?.meta?.keepAlive) {
                pre.push(item.name)
            }
            return pre
        }, [])
        commit('SETKEEPALIVEROUTELIST', result)
    }
}
const mutations = {
    SETKEEPALIVEROUTELIST(state: StateType, value: StateType['keepAliveRouteList']) {
        state.keepAliveRouteList = value
    }
}
const getters = {}
export default {
    state,
    actions,
    mutations,
    getters
}
