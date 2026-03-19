<template>
    <header class="header">
        <div class="header-inner">
            <RouterLink to="/" class="logo">Restaurant</RouterLink>

            <!-- PC 导航 -->
            <nav class="nav pc-nav">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/room">Room</RouterLink>
                <RouterLink to="/menu">Menu</RouterLink>
                <RouterLink to="/takeout">Takeout</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/access">Access</RouterLink>
            </nav>

            <!-- 手机端汉堡按钮 -->
            <div class="hamburger" @click="toggleMenu">
                <span :class="{ open: isOpen }"></span>
                <span :class="{ open: isOpen }"></span>
                <span :class="{ open: isOpen }"></span>
            </div>
        </div>

        <!-- 手机端全屏菜单 -->
        <transition name="fade">
            <div v-if="isOpen" class="mobile-menu">
                <nav class="mobile-nav">
                    <RouterLink @click="closeMenu" to="/">Home</RouterLink>
                    <RouterLink @click="closeMenu" to="/room">Room</RouterLink>
                    <RouterLink @click="closeMenu" to="/menu">Menu</RouterLink>
                    <RouterLink @click="closeMenu" to="/takeout">Takeout</RouterLink>
                    <RouterLink @click="closeMenu" to="/about">About</RouterLink>
                    <RouterLink @click="closeMenu" to="/access">Access</RouterLink>
                </nav>
            </div>
        </transition>
    </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
    isOpen.value = !isOpen.value
}

const closeMenu = () => {
    isOpen.value = false
}
</script>

<style scoped>
.header {
    padding: 24px 40px;
    position: relative;
    z-index: 100;
}

.header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 22px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
}

/* PC 导航 */
.pc-nav {
    display: flex;
    gap: 24px;
}

.pc-nav a {
    font-size: 14px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    position: relative;
}

.pc-nav a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0%;
    height: 1px;
    background-color: var(--color-text);
    transition: width 0.3s ease;
}

.pc-nav a:hover::after {
    width: 100%;
}

/* 汉堡按钮 */
.hamburger {
    width: 26px;
    height: 20px;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
}

.hamburger span {
    display: block;
    height: 2px;
    background: #333;
    transition: 0.3s;
}

.hamburger span.open:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
}

.hamburger span.open:nth-child(2) {
    opacity: 0;
}

.hamburger span.open:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
}

/* 手机端菜单 */
.mobile-menu {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
}

.mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 24px;
    text-align: center;
}

.mobile-nav a {
    color: #fff;
    font-size: 20px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    animation: fadeUp 0.6s ease forwards;
    opacity: 0;
}

.mobile-nav a:nth-child(1) {
    animation-delay: 0.1s;
}

.mobile-nav a:nth-child(2) {
    animation-delay: 0.2s;
}

.mobile-nav a:nth-child(3) {
    animation-delay: 0.3s;
}

.mobile-nav a:nth-child(4) {
    animation-delay: 0.4s;
}

.mobile-nav a:nth-child(5) {
    animation-delay: 0.5s;
}

.mobile-nav a:nth-child(6) {
    animation-delay: 0.6s;
}

@keyframes fadeUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* 淡入淡出 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* 手机端显示规则 */
@media (max-width: 768px) {
    .pc-nav {
        display: none;
    }

    .hamburger {
        display: flex;
    }
}
</style>
