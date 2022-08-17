<template>
    <q-layout view="lHh lpr lFf" container style="height: 400px">
        <q-header elevated>
            <q-toolbar>
                <q-btn flat round dense icon="menu" class="q-mr-sm" />
                <q-avatar class="gt-sm">
                    <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
                </q-avatar>
                <q-space />
                <q-input dark dense standout v-model="data.text" input-class="text-right" class="q-ml-md seach">
                    <template v-slot:append>
                        <q-icon v-if="data.text === ''" name="search" />
                        <q-icon v-else name="clear" class="cursor-pointer" @click="data.text = ''" />
                    </template>
                </q-input>
                <q-space />
                <q-btn flat round dense icon="whatshot " />
                <q-btn>
                    <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
                </q-btn>
            </q-toolbar>
        </q-header>
    </q-layout>
</template>

<script setup lang="ts" name="header">
import { reactive } from 'vue'
const data = reactive({
    text: ''
})
</script>
<style lang="scss" scoped>
.seach{
    width: 600px;
}
</style>
