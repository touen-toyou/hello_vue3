<template>
    <footer class="footer">
        <div class="footer-inner">

            <div class="footer-title">涛远中华料理</div>

            <div class="footer-info">
                <p>〒123-4567 東京都北区〇〇1-2-3</p>
                <p>TEL: 03-1234-5678</p>
                <p>営業時間：11:00〜22:00（L.O. 21:30）</p>
            </div>

            <div class="footer-links">
                <RouterLink to="/">ホーム</RouterLink>
                <RouterLink to="/menu">メニュー</RouterLink>
                <RouterLink to="/room">個室</RouterLink>
                <RouterLink to="/takeout">テイクアウト</RouterLink>
                <RouterLink to="/about">店舗紹介</RouterLink>
                <RouterLink to="/access">アクセス</RouterLink>
            </div>

            <div class="footer-copy">
                © 2026 涛远中华料理 All Rights Reserved.
            </div>

        </div>
    </footer>
</template>

<style scoped>
.footer {
    background: #111;
    color: #eee;
    padding: 80px 20px 40px;
    text-align: center;
    font-family: "Noto Sans JP", sans-serif;
}

.footer-inner {
    max-width: 900px;
    margin: 0 auto;
}

.footer-title {
    font-size: 24px;
    letter-spacing: 0.2em;
    margin-bottom: 20px;
}

.footer-info p {
    margin: 4px 0;
    font-size: 14px;
    opacity: 0.9;
}

.footer-links {
    margin: 40px 0 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.footer-links a {
    color: #eee;
    text-decoration: none;
    font-size: 14px;
    transition: opacity 0.3s;
}

.footer-links a:hover {
    opacity: 0.6;
}

.footer-copy {
    font-size: 12px;
    opacity: 0.6;
}
</style>
