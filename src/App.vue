<template>
    <router-view v-slot="{ Component, route }">
        <!-- 使用任何自定义过渡和回退到 `fade` -->
        <transition :name="transition" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const router = useRoute()
const transition = computed(() => {
    if (router.meta.transition) {
        return (router.meta.transition) as string
    }
    return 'fade'
})
</script>
<style  lang="scss" scoped>
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
