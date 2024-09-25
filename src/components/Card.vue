<template>
    <div class="card"
         :class="{ 'card--active': isFavorite, 'card--added': isAdded }"
    >
        <div class="card__status" @click="onClickFavorite"></div>
        <div class="card__preview">
            <img :src="imageUrl" alt="">
        </div>

        <div class="card__name">
            {{ title }}
        </div>

        <div class="card__info">
            <div class="card__left">
                <div class="card__tit">
                    Цена:
                </div>
                <div class="card__price">
                    {{ price }} руб.
                </div>
            </div>
            <div class="card__add" @click="onClickAdd"></div>

        </div>
    </div>
</template>
<script setup>
defineProps({
    title: String,
    price: Number,
    imageUrl: String,
    isFavorite: Boolean,
    isAdded: Boolean,
    onClickAdd: Function,
    onClickFavorite: Function
})


</script>

<style scoped lang="scss">
.card {
    @apply relative bg-white border border-slate-200 rounded-xl cursor-pointer transition hover:shadow-md hover:-translate-y-1.5 px-3 py-2;

    &__status {
        @apply w-[32px] h-[32px] bg-no-repeat bg-center bg-[url('/like-1.svg')] absolute left-3 top-3;
    }

    &--active &__status {
        @apply bg-[url('/like-2.svg')]
    }

    &--added &__add {
        @apply bg-[url('/checked.svg')]
    }

    &__name {
        @apply text-black leading-[1.2] mb-[14px] text-[14px];
    }

    &__info {
        @apply flex justify-between;
    }

    &__preview {
        @apply w-[133px] mb-1.5
    }

    &__left {
        @apply flex flex-col;
    }

    &__tit {
        @apply uppercase text-[#BDBDBD] font-medium text-[11px];
    }

    &__price {
        @apply font-bold text-[14px];
    }

    &__add {
        @apply bg-[url('/plus.svg')] w-[32px] h-[32px]
    }
}
</style>