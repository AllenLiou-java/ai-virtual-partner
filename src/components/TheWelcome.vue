<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue';
</script>

<template>
  <WelcomeItem>
    <template #icon> icon </template>
    <template #heading>Heading</template>

    <p>Lorem ipsum dolor sit amet.</p>
  </WelcomeItem>
</template>
