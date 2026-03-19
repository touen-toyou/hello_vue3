<template>
    <DefaultLayout>
        <HeroBanner />
        <HomeSection2 />
        <HomeSection3 />
    </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '../layouts/DefaultLayout.vue'
import HeroBanner from '../components/home/HeroBanner.vue'
import HomeSection2 from '../components/home/HomeSection2.vue'
import HomeSection3 from '../components/home/HomeSection3.vue'
import { onMounted } from 'vue'
import { initScrollReveal } from '../utils/scrollReveal'

onMounted(() => {
    initScrollReveal()
})
</script>

