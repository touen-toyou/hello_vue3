<template>
    <article class="menu-card">
        <img :src="img" :alt="title" />
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
    </article>
</template>

<script setup>
const props = defineProps({
    title: String,
    description: String,
    img: String
})
</script>

<style scoped>
.menu-card {
    max-width: 280px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}

.menu-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.menu-card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    margin-bottom: 14px;
    border-radius: 4px;
}

.menu-card h3 {
    font-size: 16px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 8px;
}

.menu-card p {
    font-size: 13px;
    color: var(--color-light-text);
}
</style>
