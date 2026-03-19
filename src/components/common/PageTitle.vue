<template>
    <section class="page-title">
        <h1>{{ title }}</h1>
        <p v-if="subtitle">{{ subtitle }}</p>
    </section>
</template>

<script setup>
const props = defineProps({
    title: { type: String, required: true },
    subtitle: { type: String, default: '' }
})
</script>

<style scoped>
.page-title {
    text-align: center;
    padding: 60px 20px 40px;
}

.page-title h1 {
    font-size: 28px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    margin-bottom: 10px;
}

.page-title p {
    font-size: 14px;
    color: #666;
}
</style>
