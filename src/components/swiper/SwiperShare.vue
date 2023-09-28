<template>
  <div>
    <Swiper
      :modules="modules"
      :slides-per-view="'auto'"
      :space-between="24"
      :direction="'vertical'"
      :breakpoints="breakpoints"
      :scrollbar="{ draggable: true }"
    >
      <SwiperSlide v-for="post in postList" :key="post.id">
        <div class="p-10 card-size" :class="[post.bgColorClass, post.textColorClass]">
          <div class="position-relative h-100">
            <p class="mb-8 mb-md-10 fw-bold">
              <span>{{ post.name }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                class="d-inline-block mx-2"
              >
                <circle cx="4" cy="4" r="4" fill="white" :style="{ fill: post.textColor }" />
              </svg>
              <span>{{ post.address }}</span>
            </p>
            <p class="fw-bold">{{ post.comment }}</p>
            <p class="position-absolute bottom-0 mb-0 fw-bold d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                class="me-4"
              >
                <circle cx="8" cy="8" r="8" fill="white" :style="{ fill: post.textColor }" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                class="me-4"
              >
                <circle cx="8" cy="8" r="8" fill="white" :style="{ fill: post.textColor }" />
              </svg>
              <span>ALPHABOX+ {{ post.product }}</span>
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import type { PostListType } from '@/type/home';

import 'swiper/scss/scrollbar';

const modules = ref([Scrollbar]);

export interface Props {
  postList: PostListType[];
}

defineProps<Props>();

const breakpoints = ref<any>({
  992: {
    slidesPerView: 3,
    direction: 'horizontal'
  },
  576: {
    slidesPerView: 2,
    direction: 'horizontal'
  }
});
</script>

<style lang="scss" scoped>
.card-size {
  height: 351px;
  @media (min-width: 768px) {
    height: 416px;
  }
}

:deep(.swiper-scrollbar.swiper-scrollbar-horizontal) {
  display: none;
  background: rgba(255, 255, 255, 0.2);
  position: static;
  margin-top: 48px;

  @media (min-width: 768px) {
    display: block;
  }
}

:deep(.swiper-scrollbar-drag) {
  background: #ffffff;
}
</style>
