<template>
  <div>
    <h1>This is an product page</h1>
    <p>{{ product }}</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const product = ref<string | string[]>('');

onMounted(() => {
  console.log(route.params.productName);
  product.value = route.params.productName;
});
</script>

<style lang="scss" scoped></style>
