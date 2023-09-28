<template>
  <div class="position-relative">
    <!--   Slides   -->
    <Swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }"
      @swiper="onSwiper"
    >
      <SwiperSlide v-for="img in imageList" :key="img">
        <img :src="getImageUrl(img)" alt="productImg" />
      </SwiperSlide>
    </Swiper>
    <div class="swiper-button-prev">
      <IconCircleArrowPrev />
    </div>
    <div class="swiper-button-next">
      <IconCircleArrowNext />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation } from 'swiper/modules';
import { ref } from 'vue';
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

defineProps<{
  imageList: string[];
}>();

const modules = ref([Navigation]);

const getImageUrl = (name: string) => {
  return new URL(`../../assets/img/week8-ai/${name}`, import.meta.url).href;
};

const mySwiper = ref();
const onSwiper = (swiper: any) => {
  mySwiper.value = swiper;
};

watch(
  () => route.params.productName,
  function () {
    mySwiper.value.slideTo(0);
  }
);
</script>

<style lang="scss" scoped>
.swiper-button-next,
.swiper-button-prev {
  width: 48px;
  height: 48px;

  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
}

.swiper-button-next {
  right: 12px;
  @media (min-width: 768px) {
    right: 16px;
  }
}

.swiper-button-prev {
  left: 12px;
  @media (min-width: 768px) {
    left: 16px;
  }
}

.swiper-button-next::after,
.swiper-button-prev::after {
  display: none;
}
</style>
