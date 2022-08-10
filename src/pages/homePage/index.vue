<template>
    <div>
        {{num}}
        <ElButton type="success" @click="jia">+1</ElButton>
        <ElButton type="success" @click="add">1231231</ElButton>
    </div>
</template>
<script lang="ts" setup name="homePage">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElButton, ElMenu, ElMenuItem, ElSubMenu } from 'element-plus'
const num = ref(0)
const router = useRouter()
const add = (): void => {
    router.push('/page')
}
const jia = () => {
    num.value += 1
}
</script>
<style scoped></style>
