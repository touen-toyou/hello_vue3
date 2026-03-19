<template>
    <DefaultLayout>
        <PageTitle title="Menu" subtitle="季節の食材を活かしたコースと一品料理をご用意しております。" />

        <section class="menu-section">
            <MenuCard title="Lunch" description="季節のランチコースと定食をご用意しております。" img="/src/assets/images/lunch.jpg" />
            <MenuCard title="Dinner" description="ゆったりとした時間の中で楽しむディナーコース。" img="/src/assets/images/dinner.jpg" />
            <MenuCard title="Drinks" description="ワイン、日本酒、ソフトドリンクなど各種取り揃えております。" img="/src/assets/images/drink.jpg" />
        </section>
    </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import PageTitle from '../components/common/PageTitle.vue'
import MenuCard from '../components/menu/MenuCard.vue'
</script>

<style scoped>
.menu-section {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
    padding: 40px 20px 80px;
}
</style>
