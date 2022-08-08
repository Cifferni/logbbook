<template>
    <div>
        <div>cifferni</div>
        <div>{{ data.num }}</div>
        <ElButton type="success" @click="add">1231231</ElButton>
    </div>
</template>
<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElButton } from 'element-plus'
const router = useRouter()
interface DataType {
    num: number
}
const data = reactive<DataType>({
    num: 0
})
onMounted(() => {

})
const add = (): void => {
    router.push('/page')
}
</script>
<style scoped></style>
