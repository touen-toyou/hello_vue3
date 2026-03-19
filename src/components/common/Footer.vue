<template>
    <footer class="footer">
        <p>© {{ year }} Restaurant. All rights reserved.</p>
    </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
    padding: 20px;
    text-align: center;
    font-size: 12px;
    letter-spacing: 0.1em;
}
</style>
