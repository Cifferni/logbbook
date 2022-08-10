<template>
<ElButton @click="add">asdfasdf</ElButton>
</template>
<script lang="ts" setup>
import { ElButton } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()
const add = () => {
    router.push('/homePage')
}
</script>
