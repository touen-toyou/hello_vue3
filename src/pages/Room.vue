<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import PageTitle from '../components/common/PageTitle.vue'

// 正确导入图片（Vite 会自动处理路径）
import room1 from '@/assets/images/room1.jpg'
import room2 from '@/assets/images/room2.jpg'
import room3 from '@/assets/images/room3.jpg'
</script>
<template>
    <DefaultLayout>
        <PageTitle title="Room" subtitle="落ち着いた空間で、ゆっくりとお過ごしください。" />

        <section class="section">
            <div class="text-block">
                <p>
                    テーブル席、カウンター席、少人数向けの個室をご用意しております。
                    ご利用シーンに合わせてお選びいただけます。
                </p>
            </div>

            <div class="room-gallery">
                <img :src="room1" alt="Room 1" />
                <img :src="room2" alt="Room 2" />
                <img :src="room3" alt="Room 3" />
            </div>
        </section>
    </DefaultLayout>
</template>

<style scoped>
.section {
    max-width: 900px;
    margin: 0 auto;
    padding: var(--space-section) 20px;
}

.text-block {
    text-align: center;
    margin-bottom: 50px;
    color: var(--color-light-text);
}

.room-gallery {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
}

.room-gallery img {
    width: 280px;
    height: 180px;
    object-fit: cover;
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
