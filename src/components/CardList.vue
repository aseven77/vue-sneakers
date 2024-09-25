<template>
    <div class="card-list">
        <Card
            imageUrl="/sneakers/sneakers-1.jpg"
            title="Мужские Кроссовки Nike Blazer Mid Suede"
            :price="12999"
            :isAdded="false"
            :onClickAdd="onClickAdd"
        />
    </div>
</template>

<script setup>
import Card from '@/components/Card.vue'

const onClickAdd = () => {
    alert("asd")
}
</script>

<style scoped lang="scss">
.card-list {
    @apply grid gap-4 grid-cols-4;
}
</style>
