<template>
    <div class="drawer"></div>
    <div class="drawer-main">
        <DrawerHead />
        <div class="drawer-list">
            <CartItem :price="12999" title="Мужские Кроссовки Nike Air Max 270" imageUrl="/sneakers/sneakers-1.jpg"/>
        </div>
    </div>
</template>

<script setup>

import DrawerHead from "@/components/DrawerHead.vue";
import CartItem from "@/components/CartItem.vue";


</script>

<style scoped lang="scss">
.drawer {
    @apply fixed top-0 left-0 right-0 bottom-0 bg-black z-10 opacity-50
}

.drawer-main {
    @apply bg-white w-[385px] h-full fixed right-0 top-0 z-20 p-3
}


</style>