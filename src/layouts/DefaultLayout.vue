<template>
    <div class="layout">
        <Header />

        <main class="layout-main">
            <slot />
        </main>

        <Footer />
    </div>
</template>

<script setup lang="ts">
import Header from '../components/common/Header.vue'
import Footer from '../components/common/Footer.vue'
</script>

<style scoped>
.layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.layout-main {
    flex: 1;
}
</style>
