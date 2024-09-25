<template>
    <header class="header">
        <router-link to="/" class="logo">
            <img src="/logo.png" alt=""/>
            <div>
                <h2>Vue SNEAKERS</h2>
                <p>Магазин лучших кроссовок</p>
            </div>
        </router-link>
        <div class="header__right">
            <nav class="nav-right">
                <router-link to="/cart" :class="{ active: isActive }">
                    <img src="/cart.svg" alt="cart"/>
                    <strong>1205 руб.</strong>
                </router-link>
                <router-link to="/favorites">
                    <img src="/heart.svg" alt="heart"/>
                    <span>Закладки</span>
                </router-link>
                <router-link to="/profile">
                    <img src="/profile.svg" alt="profile"/>
                    <span>Профиль</span>
                </router-link>
            </nav>
        </div>
    </header>
</template>

<script setup>
import {ref} from 'vue'
import {RouterLink} from 'vue-router'

const isActive = ref(false)
</script>
<style scoped lang="scss">
.header {
    @apply md:mb-4.5 mb-3 md:flex justify-between border-b pl-[45px] pr-[60px] pt-[43px] pb-[40px] items-center;
}

.nav-right {
    @apply flex gap-3;

    a {
        @apply flex items-center gap-[8px] text-[14px] hover:text-black;
        color: #5c5c5c;
    }

    strong {
        @apply font-semibold;
    }

    img {
        @apply w-2;
    }
}

.logo {
    @apply flex gap-1.5 items-center leading-[1.2] mb-2 md:mb-0;

    h2 {
        @apply text-xl uppercase font-bold mb-0;
    }

    p {
        @apply mb-0 text-[14px];
        color: #9d9d9d;
    }

    img {
        @apply w-4 flex-1;
    }
}
</style>
