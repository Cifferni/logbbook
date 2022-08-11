<template>
    <div>
        <ElButton @click="num += 1">{{ num }}</ElButton>
        <ElButton @click="add">123123123</ElButton>
    </div>
</template>
<script lang="ts" setup name="page">
import { ref } from 'vue'
import { ElButton } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()
const num = ref(0)
const add = () => {
    router.push('/homePage')
}
</script>
