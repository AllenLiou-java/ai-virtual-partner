<template>
  <div class="d-flex align-items-center justify-content-between g-0">
    <!--  左箭頭  -->
    <div class="d-none d-md-block me-13">
      <div class="swiper-button-prev" @click="mySwiper.slidePrev()">
        <img
          src="https://hackmd.io/_uploads/BJUmHUm6n.png"
          alt="left arrow"
          class="img-fluid rotate"
        />
      </div>
    </div>
    <!--   Slides   -->
    <Swiper
      :slides-per-view="'auto'"
      :space-between="24"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      style="max-width: 1296px"
    >
      <SwiperSlide v-for="data in introductDataProp" :key="data.idxNo">
        <div
          class="h-introduct-slide bg-norepeat bg-position-center bg-size-cover d-flex flex-column align-items-start align-items-md-end justify-content-end justify-content-md-center"
          :style="{ 'background-image': 'url(' + data.imgUrl + ')' }"
        >
          <div class="p-4 p-md-10">
            <h3 class="fs-6 fs-lg-8 text-md-end mb-2 mb-md-4">
              <span class="font-Shrikhand fs-16 fs-md-24">{{ data.idxNo }}</span
              ><br />
              <span class="ls-60 ls-md-80" style="margin-right: -32px">{{ data.title }}</span>
            </h3>
            <p class="mb-0">{{ data.description }}</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <!--  右箭頭  -->
    <div class="d-none d-md-block ms-13">
      <div class="swiper-button-next" @click="mySwiper.slideNext()">
        <img src="https://hackmd.io/_uploads/BJUmHUm6n.png" alt="right arrow" class="img-fluid" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { onMounted, ref } from 'vue';
import type { IntroductDataType } from '@/type/home';

const props = defineProps<{
  introductData: IntroductDataType[];
}>();
const introductDataProp = ref<IntroductDataType[]>(props.introductData);

const mySwiper = ref();
const onSwiper = (swiper: any) => {
  mySwiper.value = swiper;
};
const onSlideChange = () => {
  initNavigationBtn();
};
const initNavigationBtn = () => {
  const btnPrev = document.querySelector('.swiper-button-prev');
  const btnNext = document.querySelector('.swiper-button-next');
  btnPrev?.classList.remove('swiper-button-disabled');
  btnNext?.classList.remove('swiper-button-disabled');

  if (mySwiper.value.isBeginning) {
    btnPrev?.classList.add('swiper-button-disabled');
  }
  if (mySwiper.value.isEnd) {
    btnNext?.classList.add('swiper-button-disabled');
  }
};

onMounted(() => {
  initNavigationBtn();
});
</script>

<style lang="scss" scoped>
.alphabox {
  height: 351px;
  background-image: url(https://hackmd.io/_uploads/Syn6HV7Tn.png);
  background-size: cover;
  background-position: center;
  padding: 16px;
  @media (min-width: 768px) {
    height: 560px;
    padding-right: 40px;
  }

  &-title {
    letter-spacing: 24px;
    @media (min-width: 768px) {
      letter-spacing: 32px;
      margin-right: -32px;
    }
  }
}

.rotate {
  rotate: 180deg;
}

.fs-96 {
  font-size: 96px;
}

.font-Shrikhand {
  font-family: 'Shrikhand', cursive;
}

// 箭頭
.swiper-button-next,
.swiper-button-prev {
  color: #fff;
  position: initial;
  margin-top: 0;
  width: auto;
  height: auto;
  &::after {
    content: '';
  }
}

.h-introduct-slide {
  height: 351px;
  @media (min-width: 768px) {
    height: 560px;
  }
}
</style>
