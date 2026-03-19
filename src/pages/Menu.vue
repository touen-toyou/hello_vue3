<template>
    <DefaultLayout>
        <section class="menu-section">
            <h1 class="menu-title">メニュー</h1>
            <p class="menu-subtitle">Our Menu</p>

            <div class="menu-grid">
                <div class="menu-item" v-for="item in menuItems" :key="item.name">
                    <img :src="item.image" :alt="item.name" class="menu-image" />

                    <div class="menu-info">
                        <h3 class="menu-name">{{ item.name }}</h3>
                        <p class="menu-price">{{ item.price }}</p>
                    </div>
                </div>
            </div>
        </section>
    </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '../layouts/DefaultLayout.vue'

// 正确导入图片（Vite 会自动处理路径）
import mabo from '@/assets/images/menu/mabo.jpg'
import ebichiri from '@/assets/images/menu/ebichiri.jpg'
import chinjao from '@/assets/images/menu/chinjao.jpg'
import chaofan from '@/assets/images/menu/chaofan.jpg'
import xiaolongbao from '@/assets/images/menu/xiaolongbao.jpg'
import tantanmen from '@/assets/images/menu/tantanmen.jpg'

const menuItems = [
    {
        name: '麻婆豆腐',
        price: '¥1,280',
        image: mabo
    },
    {
        name: 'エビチリ',
        price: '¥1,580',
        image: ebichiri
    },
    {
        name: '青椒肉絲',
        price: '¥1,380',
        image: chinjao
    },
    {
        name: '五目炒飯',
        price: '¥1,100',
        image: chaofan
    },
    {
        name: '小籠包（6個）',
        price: '¥980',
        image: xiaolongbao
    },
    {
        name: '担々麺',
        price: '¥1,200',
        image: tantanmen
    }
]
</script>


<style scoped>
.menu-section {
    max-width: 1100px;
    margin: 0 auto;
    padding: 120px 20px;
    text-align: center;
}

.menu-title {
    font-size: 32px;
    letter-spacing: 0.2em;
    margin-bottom: 10px;
}

.menu-subtitle {
    font-size: 14px;
    letter-spacing: 0.3em;
    color: var(--color-light-text);
    margin-bottom: 60px;
}

.menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 40px;
}

.menu-item {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.menu-item:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
}

.menu-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
}

.menu-info {
    padding: 20px;
}

.menu-name {
    font-size: 18px;
    margin-bottom: 8px;
}

.menu-price {
    font-size: 15px;
    color: var(--color-light-text);
}
</style>
