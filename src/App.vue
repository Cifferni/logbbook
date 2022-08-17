<template>
    <div>
        <Header></Header>
        <router-view v-slot="{ Component, route }">
            <transition :name="transition" :max="10" mode="out-in">
                <keep-alive :include="data.keepAliveRouteList">
                    <component :key="route.name" :is="Component" />
                </keep-alive>
            </transition>
        </router-view>
    </div>
</template>
<script lang="ts" setup>
import { computed, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import Header from '@/components/Header/index.vue'
const router = useRoute()
const store = useStore()
interface DataType {
    keepAliveRouteList: string[]
}
const data = reactive<DataType>({
    keepAliveRouteList: []
})
onMounted(() => {
    data.keepAliveRouteList = store.state.keepAliveRoute.keepAliveRouteList
})
const transition = computed(() => {
    if (router.meta.transition) {
        return router.meta.transition as string
    }
    return 'fade'
})
</script>
<style lang="scss" scoped>
.fade-transform-leave-active,
/* fade */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.28s;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
    transition: all 0.5s;
}

.fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
}

.fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* breadcrumb transition */
.breadcrumb-enter-active,
.breadcrumb-leave-active {
    transition: all 0.5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(20px);
}

.breadcrumb-move {
    transition: all 0.5s;
}

.breadcrumb-leave-active {
    position: absolute;
}
</style>
