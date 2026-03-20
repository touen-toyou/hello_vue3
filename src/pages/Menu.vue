<template>
    <DefaultLayout>
        <section class="menu-section">
            <h1 class="menu-title">メニュー</h1>
            <p class="menu-subtitle">Our Menu</p>

            <div class="menu-grid">
                <div class="menu-item" v-for="item in menuItems" :key="item.name" @click="openModal(item)">
                    <div class="tag" v-if="item.tag">{{ item.tag }}</div>
                    <img :src="item.image" :alt="item.name" class="menu-image" />

                    <div class="menu-info">
                        <h3 class="menu-name">{{ item.name }}</h3>
                        <p class="menu-price">{{ item.price }}</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Modal -->
        <div class="modal" v-if="selectedItem" @click.self="closeModal">
            <div class="modal-content">
                <img :src="selectedItem.image" class="modal-image" />
                <h2 class="modal-title">{{ selectedItem.name }}</h2>
                <p class="modal-price">{{ selectedItem.price }}</p>

                <p class="modal-desc">
                    {{ selectedItem.description || '詳細情報は準備中です。' }}
                </p>

                <button class="close-btn" @click="closeModal">閉じる</button>
            </div>
        </div>
    </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { ref } from 'vue'

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
        image: mabo,
        tag: 'おすすめ',
        description: '麻婆豆腐麻婆豆腐麻婆豆腐'
    },
    {
        name: 'エビチリ',
        price: '¥1,580',
        image: ebichiri,
        tag: '新登場'
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

const selectedItem = ref(null)

function openModal(item) {
    selectedItem.value = item
}

function closeModal() {
    selectedItem.value = null
}

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
    position: relative;
    background: #fff;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);
    transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.menu-item::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom,
            rgba(0, 0, 0, 0) 40%,
            rgba(0, 0, 0, 0.25) 100%);
    pointer-events: none;
    transition: opacity 0.4s ease;
    opacity: 0.8;
}

.menu-item:hover::after {
    opacity: 1;
}

.menu-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
}

.menu-image {
    width: 100%;
    height: 220px;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.menu-item:hover .menu-image {
    transform: scale(1.08);
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
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.05em;
    margin-bottom: 6px;
}

.menu-price {
    font-size: 16px;
    color: #b88a44;
    /* 高级金色 */
    font-weight: 500;
}

.tag {
    position: absolute;
    top: 12px;
    left: 12px;
    background: #b88a44;
    /* 高级金色 */
    color: #fff;
    padding: 4px 12px;
    font-size: 12px;
    border-radius: 4px;
    letter-spacing: 0.1em;
    z-index: 3;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
.modal {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 50;
}

.modal-content {
    background: #fff;
    padding: 30px;
    border-radius: 12px;
    width: 90%;
    max-width: 480px;
    text-align: center;
    animation: fadeIn 0.3s ease;
}

.modal-image {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 20px;
}

.modal-title {
    font-size: 22px;
    margin-bottom: 8px;
}

.modal-price {
    font-size: 18px;
    color: #b88a44;
    margin-bottom: 16px;
}

.modal-desc {
    font-size: 15px;
    color: #666;
    line-height: 1.8;
}

.close-btn {
    margin-top: 20px;
    padding: 10px 20px;
    background: #b88a44;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}
</style>
