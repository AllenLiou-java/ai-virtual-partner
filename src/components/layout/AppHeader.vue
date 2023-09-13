<template>
  <!-- for pc -->
  <nav
    class="navbar navbar-expand-lg bg-transparent py-4 fixed-top d-none d-lg-block border-bottom"
  >
    <div class="container d-flex justify-content-between align-items-center">
      <h1 class="fs-8 font-Shrikhand fw-normal">
        <router-link to="/" class="text-decoration-none">ALPHABOX+</router-link>
      </h1>
      <div>
        <ul class="navbar-nav mt-6 mt-lg-0">
          <li class="px-3 py-2 text-center">
            <router-link to="/product" class="nav-link">產品</router-link>
          </li>
          <li class="px-3 py-2 text-center">
            <router-link to="/aboutUs" class="nav-link">關於我們</router-link>
          </li>
          <li class="px-3 py-2 text-center">
            <router-link to="/news" class="nav-link">最新消息</router-link>
          </li>
          <li class="px-3 py-2 text-center">
            <router-link to="/faq" class="nav-link">FAQ</router-link>
          </li>
          <li class="px-3 py-2 text-center">
            <router-link to="/contact" class="nav-link">聯絡我們</router-link>
          </li>
        </ul>
      </div>
      <div class="mb-lg-0">
        <ul class="navbar-nav">
          <li class="px-1 py-2 text-center">
            <router-link to="/signUp" class="nav-link">註冊</router-link>
          </li>
          <li class="px-1 py-2 text-center">
            <router-link to="/signIn" class="nav-link">登入</router-link>
          </li>
          <li class="mx-auto ms-lg-5">
            <a
              class="btn btn-white btn-signUp border-0 d-flex justify-content-center align-items-center"
            >
              <img src="@/assets/img/point.svg" alt="point" /><span class="ms-1">訂閱</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- for mobile -->
  <nav class="navbar navbar-expand-lg bg-primary-300 py-0 fixed-top d-block d-lg-none">
    <div>
      <div class="container d-flex justify-content-between align-items-center border-bottom">
        <h1 class="fs-6 font-Shrikhand fw-normal">
          <router-link to="/" class="text-decoration-none">ALPHABOX+</router-link>
        </h1>
        <img
          class="navbar-toggler py-3"
          src="@/assets/img/menu.svg"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          alt="menu"
          @click="openNavbar"
        />
      </div>
      <div class="collapse navbar-collapse bg-header" id="navbarNav">
        <ul class="navbar-nav pt-6">
          <li class="nav-item text-center mb-1 mb-lg-0">
            <router-link to="/product" class="nav-link px-3 py-2">產品</router-link>
          </li>
          <li class="nav-item text-center mb-1 mb-lg-0">
            <router-link to="/aboutUs" class="nav-link px-3 py-2">關於我們</router-link>
          </li>
          <li class="nav-item text-center mb-1 mb-lg-0">
            <router-link to="/news" class="nav-link px-3 py-2">最新消息</router-link>
          </li>
          <li class="nav-item text-center mb-1 mb-lg-0">
            <router-link to="/faq" class="nav-link px-3 py-2">FAQ</router-link>
          </li>
          <li class="nav-item text-center mb-1 mb-lg-0">
            <router-link to="/contact" class="nav-link px-3 py-2">聯絡我們</router-link>
          </li>
        </ul>

        <ul class="navbar-nav pb-8">
          <li class="nav-item text-center mb-1">
            <router-link to="/signUp" class="nav-link px-3 py-2">註冊</router-link>
          </li>
          <li class="nav-item text-center mb-1">
            <router-link to="/signIn" class="nav-link px-3 py-2">登入</router-link>
          </li>
          <li class="nav-item text-center mb-1">
            <a
              class="btn btn-white btn-signUp mx-auto ms-lg-5 border-0 d-flex justify-content-center align-items-center"
            >
              <img src="@/assets/img/point.svg" alt="point" /><span class="ms-1">訂閱</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpenToggler = ref(false);

const openNavbar = () => {
  isOpenToggler.value = !isOpenToggler.value;
  console.log('open');
};
</script>

<style scoped></style>
