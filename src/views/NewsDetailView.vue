<template>
  <div>
    <h2>News-Detail</h2>
    <p>{{ newsId }}</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const newsId = ref<string | string[]>('');

onMounted(() => {
  newsId.value = route.params.newsId;
});
</script>

<style lang="scss" scoped></style>
