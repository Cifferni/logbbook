<template>
    <div>
        <button @click="add">13123123</button>
    </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import request from '@/api/axios'
const router = useRouter()
onMounted(() => {
    request
        .get('/weather_mini?city=北京')
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error, 'error')
        })
    console.log(import.meta.env.VITE_BASE_API)
})
const add = (): void => {
    router.push('/homePage')
}
</script>
<style scoped></style>
