<template>
    <DefaultLayout>
        <PageTitle title="About" subtitle="料理と空間に込めた想い。" />

        <section class="section">
            <div class="about-box">
                <p>
                    四季折々の食材を大切にし、素材の持ち味を活かした料理を心がけております。
                    特別な日も、何気ない一日も、少しだけ特別な時間になりますように。
                </p>
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

.about-box {
    background: #fff;
    padding: 40px;
    border-radius: 8px;
    border: 1px solid var(--color-border);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    line-height: 2;
    color: var(--color-light-text);
}
</style>
