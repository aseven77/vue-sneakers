<template>
    <div class="slider-index mb-4">
        <swiper
            :slides-per-view="1"
            :space-between="5"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :modules="modules"
            navigation>
            <swiper-slide>
                <router-link to="/test">
                    <img src="/slider-1.png" alt="">
                </router-link>
            </swiper-slide>
            <swiper-slide>
                <router-link to="/test2">
                    <img src="/slider-1.png" alt="">
                </router-link>
            </swiper-slide>
        </swiper>
    </div>

</template>
<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = (e) => {
            console.log(e);
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation]
        };
    },
};

</script>

<style lang="scss">

.slider-index {
    position: relative;
}

.swiper-slide {

    img {
        max-width: none;
        width: 100%;
    }
}

.swiper-button-next,
.swiper-button-prev {
    background-image: url("data:image/svg+xml,%0A%3Csvg width='7' height='12' viewBox='0 0 7 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L1 11' stroke='%23C8C8C8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04);
    background-color: #FFF;
    border-radius: 50%;

    @apply w-[35px] h-[35px];

    &:after {
        display: none;
    }
}

.swiper-button-next {
    right: -17px;
}

.swiper-button-prev {
    transform: scale(-1);
    left: -17px;
}

</style>

