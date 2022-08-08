<template>
    <div>
        <button @click="add"></button>
    </div>
</template>
<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
interface DataType {
    num: number
}
const data = reactive<DataType>({
    num: 0
})
onMounted(() => {
    console.log(import.meta.env.VITE_BASE_API)
})
const add = (): void => {
    router.push('/homePage')
}
</script>
<style scoped></style>
