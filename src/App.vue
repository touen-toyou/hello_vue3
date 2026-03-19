<template>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { initScrollReveal } from './utils/scrollReveal'

onMounted(() => {
  initScrollReveal()
})
</script>

<style>
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: 1s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
