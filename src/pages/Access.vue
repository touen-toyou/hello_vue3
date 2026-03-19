<template>
    <DefaultLayout>
        <PageTitle title="Access" subtitle="店舗情報・アクセス" />

        <section class="section">
            <div class="info">
                <p>〒000-0000 東京都〇〇区〇〇 0-0-0</p>
                <p>TEL: 00-0000-0000</p>
                <p>営業時間：11:30–14:30 / 17:30–22:00</p>
                <p>定休日：水曜日</p>
            </div>

            <div class="map">
                Google Map（後で埋め込み可能）
            </div>
        </section>
    </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import PageTitle from '../components/common/PageTitle.vue'
</script>

<style scoped>
.section {
    max-width: 800px;
    margin: 0 auto;
    padding: var(--space-section) 20px;
}

.info {
    margin-bottom: 40px;
    line-height: 2;
    color: var(--color-light-text);
}

.map {
    height: 300px;
    border-radius: 8px;
    border: 1px solid var(--color-border);
    background: #fafafa;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #777;
}
</style>
