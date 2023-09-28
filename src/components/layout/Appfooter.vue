<template>
  <div class="bg-white text-dark">
    <div
      class="container d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center px-10 px-lg-3 py-10 py-lg-12"
    >
      <div>
        <h1 class="font-Shrikhand fs-8 fw-normal mb-2 mb-lg-0">ALPHABOX+</h1>
        <p class="fs-4 fw-bold d-none d-lg-block mb-0">Copyright © 2023 Hexschool.</p>
      </div>
      <img
        src="@/assets/img/emergency.svg"
        class="mb-2 mb-lg-0 rotate360-infinite"
        alt="emergency"
      />
      <ul
        class="d-flex flex-column flex-lg-row justify-content-between align-items-center gap-lg-6"
      >
        <li class="mb-2 mb-lg-0">
          <router-link to="/aboutUs" class="text-dark fw-bold">關於我們</router-link>
        </li>
        <li class="mb-2 mb-lg-0">
          <router-link
            :to="{ name: 'product', params: { productName: 'Diane' } }"
            class="text-dark fw-bold"
            >產品資訊</router-link
          >
        </li>
        <li class="mb-2 mb-lg-0">
          <router-link to="/faq/aboutUse" class="text-dark fw-bold">常見問題</router-link>
        </li>
        <li class="mb-2 mb-lg-0">
          <router-link to="/" class="text-dark fw-bold">隱私政策</router-link>
        </li>
      </ul>
      <p class="fs-4 fw-bold d-lg-none mb-0">Copyright © 2023 Hexschool.</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
