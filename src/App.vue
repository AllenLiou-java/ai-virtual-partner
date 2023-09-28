<template>
  <AppHeader />
  <div class="pt-17 pt-lg-20">
    <RouterView />
  </div>
  <Appfooter />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppHeader from '@/components/layout/AppHeader.vue';
import Appfooter from '@/components/layout/Appfooter.vue';
</script>

<style lang="scss" scoped></style>
