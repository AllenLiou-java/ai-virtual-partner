import type { info } from 'console'; import type { info } from 'console';
<template>
  <div
    class="position-relative d-flex flex-column justify-content-center align-items-center px-3 px-md-10 py-6 pb-md-14"
    :class="personality.bgClass"
  >
    <p class="fs-32 fs-md-100 font-extraCondensed fw-light mb-4 mb-md-5">{{ personality.index }}</p>
    <p class="fs-6 fs-md-8 font-Shrikhand mb-4 mb-md-20">{{ personality.name }}</p>
    <div class="align-self-start w-100">
      <p class="mb-0 fw-bold">{{ personality.type }}</p>
      <div class="d-flex flex-column flex-md-row justify-content-md-between flex-wrap">
        <p class="me-md-10 mb-0">{{ personality.typeDescription }}</p>
        <img
          src="@/assets/img/line_end_arrow_notch.svg"
          style="width: 155px"
          alt="line_end_arrow"
        />
      </div>
    </div>
    <router-link
      :to="{ name: 'product', params: { productName: personality.name } }"
      class="stretched-link"
    ></router-link>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue';
import type { PersonalityType } from '@/type/home';

defineProps({
  personality: {
    type: Object as PropType<PersonalityType>,
    required: true
  }
});
</script>

<style lang="" scss scoped></style>
