<template>
    <footer class="footer">
        <div class="reseaux">
            <a href="https://github.com/equinoxya" target="_blank">
                <i class="devicon-github-original"></i>
            </a>
            <a href="https://www.linkedin.com/in/ophelie-bellissens-dev/" target="_blank">
                <i class="devicon-linkedin-plain colored"></i>
            </a>
        </div>
        <p class="credit">© 2026 Ophélie Bellissens — Fait avec Vue.js</p>
    </footer>
</template>

<style scoped>
.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 40px;
    border-top: 1px solid rgb(230, 230, 230);
    margin-top: 60px;
}

.nom {
    font-weight: bold;
    font-size: 18px;
}

.reseaux {
    display: flex;
    gap: 20px;
}

.reseaux a {
    font-size: 28px;
    color: black;
    text-decoration: none;
}

.credit {
    font-size: 13px;
    color: gray;
}
</style>