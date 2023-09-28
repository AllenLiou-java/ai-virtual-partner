<template>
  <router-link :to="`/newsDetail/${newsItem.idxNo}`">
    <div class="container">
      <div class="row justify-content-start justify-content-lg-center align-items-lg-center">
        <div class="col-2 col-lg-1 fs-24 fs-md-32 font-extraCondensed">
          {{ newsItem.idxNo }}
        </div>
        <img
          class="col-lg-2 d-none d-lg-block"
          :src="getIamgeUrl(newsItem.imageName)"
          :alt="newsItem.imageName"
          style="width: 196px; height: 228px"
        />
        <img
          class="col-10 col-lg-2 d-lg-none mb-4"
          :src="getIamgeUrlMobile(newsItem.imageNameMobile)"
          :alt="newsItem.imageNameMobile"
        />
        <div class="col-12 col-lg-6">
          <div class="px-4 py-6 py-lg-10 border-top border-bottom">
            <div class="mb-2">
              <IconEmergency class="me-4" style="width: 24px; height: 24px" /><span
                class="align-middle ls-40 fw-medium"
                >{{ newsItem.duration }}</span
              >
            </div>
            <p class="fs-5 ls-50 mb-3">{{ newsItem.title }}</p>
            <p class="mb-0">{{ newsItem.overview }}</p>
          </div>
        </div>

        <div class="col-12 col-lg-1 align-self-lg-end text-end text-lg-start mt-4 mt-lg-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <mask
              id="mask0_321_5981"
              style="mask-type: alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="40"
              height="40"
            >
              <rect width="40" height="40" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_321_5981)">
              <path
                d="M19.9999 32.6923L18.2179 30.9359L27.9038 21.25H7.30762V18.75H27.9038L18.2179 9.06413L19.9999 7.30775L32.6921 20L19.9999 32.6923Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type { NewsItemType } from '@/type/home';

export interface Props {
  newsItem: NewsItemType;
}

defineProps<Props>();

const getIamgeUrl = (name: string) => {
  return new URL(`../../assets/img/week8-ai/news/${name}`, import.meta.url).href;
};

const getIamgeUrlMobile = (name: string | undefined) => {
  return new URL(`../../assets/img/week8-ai/mobile/${name}`, import.meta.url).href;
};
</script>

<style lang="scss" scoped>
:deep(.emergency) g path {
  fill: white;
}

a:hover {
  text-decoration: none;
}
</style>
