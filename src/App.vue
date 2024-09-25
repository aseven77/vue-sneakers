<template>
    <Drawer/>
    <div class="wrapper">
        <Header/>
        <div class="container">
            <RouterView/>
        </div>
    </div>
</template>

<script setup>
import {RouterView} from 'vue-router';
import Header from '@/components/Header.vue';
import Drawer from "@/components/Drawer.vue";
</script>

<style scoped>
.container {
    @apply px-[60px];
}
</style>
