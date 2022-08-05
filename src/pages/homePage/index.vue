<template>
    <div>
        <div>cifferni</div>
        <div>{{ data.num }}</div>
        <button @click="add">+1</button>
    </div>
</template>
<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
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
    data.num += 1
}
</script>
<style scoped></style>
