<template>
    <div class="cart-drawer">
        <div class="cart-drawer__preview">
            <img :src="imageUrl" alt="" >
        </div>
        <div class="cart-drawer__info">
            <div class="cart-drawer__name">
                {{ title }}
            </div>
            <div class="cart-drawer__price">
                {{ price }} руб.
            </div>
        </div>
        
    </div>
</template>
<script setup>
defineProps({
    title: String,
    price: Number,
    imageUrl: String
});

</script>

<style lang="scss" scoped>
.cart-drawer {
    @apply border p-2 rounded-md grid grid-cols-[70px_auto] gap-2 items-end;

    &__preview {
        @apply w-[70px] h-[70px] flex-auto;
    }

    &__tit {
        @apply text-black leading-[1.2] mb-[8px] text-[14px];
    }

    &__price {
        @apply font-bold text-[14px];
    }


}
</style>