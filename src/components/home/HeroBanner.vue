<template>
    <section class="hero">
        <!-- 背景轮播 -->
        <transition-group name="fade" tag="div" class="hero-bg-wrapper">
            <div v-for="(img, index) in images" :key="img" v-show="currentIndex === index" class="hero-bg"
                :style="{ backgroundImage: `url(${img})` }"></div>
        </transition-group>

        <!-- 中央文字 -->
        <div class="hero-content">
            <h1 class="title">涛远中华料理</h1>
            <p class="subtitle">TAOYUAN CHINESE CUISINE</p>
        </div>

        <!-- scroll 提示 -->
        <div class="scroll-indicator">
            <span>scroll</span>
            <div class="line"></div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const images = [
    '/src/assets/images/hero1.jpg',
    '/src/assets/images/hero2.jpg',
    '/src/assets/images/hero3.jpg'
]

const currentIndex = ref(0)

onMounted(() => {
    setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % images.length
    }, 3000)
})
</script>

<style scoped>
.hero {
    position: relative;
    height: 100vh;
    min-height: 600px;
    overflow: hidden;
}

/* 背景轮播容器 */
.hero-bg-wrapper {
    position: absolute;
    inset: 0;
}

/* 单张背景图 */
.hero-bg {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    filter: brightness(0.75);
    transform: scale(1.1);
    animation: zoom 12s ease-in-out infinite alternate;
}

/* 缩放动画 */
@keyframes zoom {
    from {
        transform: scale(1.1);
    }

    to {
        transform: scale(1.25);
    }
}

/* 淡入淡出动画 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* 中央文字 */
.hero-content {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
}

.title {
    font-size: 48px;
    letter-spacing: 0.25em;
    margin-bottom: 10px;
    animation: fadeIn 1.2s ease forwards;
    opacity: 0;
}

.subtitle {
    font-size: 16px;
    letter-spacing: 0.3em;
    animation: fadeIn 1.6s ease forwards;
    opacity: 0;
}

@keyframes fadeIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* scroll 提示 */
.scroll-indicator {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: #fff;
    z-index: 3;
    animation: fadeIn 2s ease forwards;
    opacity: 0;
}

.scroll-indicator span {
    font-size: 12px;
    letter-spacing: 0.2em;
    display: block;
    margin-bottom: 6px;
}

.scroll-indicator .line {
    width: 1px;
    height: 40px;
    margin: 0 auto;
    background: #fff;
    animation: scrollLine 1.8s ease-in-out infinite;
}

@keyframes scrollLine {
    0% {
        transform: scaleY(0);
        opacity: 0;
    }

    50% {
        transform: scaleY(1);
        opacity: 1;
    }

    100% {
        transform: scaleY(0);
        opacity: 0;
    }
}

/* 手机端适配 */
@media (max-width: 768px) {
    .title {
        font-size: 32px;
    }

    .subtitle {
        font-size: 12px;
    }
}
</style>
