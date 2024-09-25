<template>
    <Slider/>
    <div class="">
        <div class="section-head">
            <h1 class="section-title">Все кроссовки</h1>
        </div>
        <CardList/>
    </div>
</template>

<script setup>

import Slider from "@/components/Slider.vue";
import CardList from "@/components/CardList.vue";
</script>

<style scoped lang="scss">
.section-head {
    @apply flex mb-3
}

.section-title {
    @apply text-[32px] font-bold
}
</style>