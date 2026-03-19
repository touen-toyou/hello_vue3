<template>
    <section class="section reveal">
        <div class="inner">
            <div class="text-block">
                <h2 class="title">店内の雰囲気</h2>
                <p class="subtitle">Restaurant Atmosphere</p>

                <p class="text">
                    落ち着いた空間で、ゆったりとお食事をお楽しみいただけます。
                    ご家族でのご利用から、特別な日の会食まで幅広く対応しております。
                </p>
            </div>

            <div class="image-block">
                <img src="/src/assets/images/room1.jpg" alt="Restaurant Interior" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.section {
    padding: 120px 20px;
}

.inner {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    gap: 60px;
    align-items: center;
}

.text-block {
    flex: 1;
}

.image-block {
    flex: 1;
}

.image-block img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.title {
    font-size: 28px;
    letter-spacing: 0.2em;
    margin-bottom: 10px;
}

.subtitle {
    font-size: 14px;
    letter-spacing: 0.3em;
    color: var(--color-light-text);
    margin-bottom: 30px;
}

.text {
    font-size: 15px;
    line-height: 2.2;
    color: var(--color-light-text);
}

/* 手机端适配 */
@media (max-width: 768px) {
    .inner {
        flex-direction: column;
    }
}
</style>
