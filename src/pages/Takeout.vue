<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import PageTitle from '../components/common/PageTitle.vue'

// 正确导入图片（Vite 会自动处理路径）
import takeout1 from '@/assets/images/takeout1.jpg'
import takeout2 from '@/assets/images/takeout2.jpg'
</script>


<template>
    <DefaultLayout>
        <PageTitle title="Takeout" subtitle="ご自宅でもお店の味をお楽しみいただけます。" />

        <section class="section">
            <div class="text-block">
                <p>
                    お弁当やオードブルのご予約を承っております。
                    内容や数量については、お電話にてお気軽にご相談ください。
                </p>
            </div>

          <div class="takeout-list">
                <div class="item">
                    <img :src="takeout1" alt="Takeout 1" />
                    <h3>季節の弁当</h3>
                </div>

                <div class="item">
                    <img :src="takeout2" alt="Takeout 2" />
                    <h3>オードブル</h3>
                </div>
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

.takeout-list {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
}

.item {
    text-align: center;
}

.item img {
    width: 260px;
    height: 160px;
    object-fit: cover;
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    margin-bottom: 12px;
}
</style>
