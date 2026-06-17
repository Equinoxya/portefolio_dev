<template>
    <footer class="footer">
        <div class="reseaux">
            <a href="https://github.com/equinoxya" target="_blank" aria-label="GitHub">
                <i class="devicon-github-original"></i>
            </a>
            <a href="https://www.linkedin.com/in/ophelie-bellissens-dev/" target="_blank" aria-label="LinkedIn">
                <i class="devicon-linkedin-plain colored"></i>
            </a>
        </div>
        <p class="credit">© 2026 Ophélie Bellissens — Tous droits réservés</p>
        <RouterLink to="/mentions-legales">Mentions légales</RouterLink>
<p class="legal">Les données du formulaire de contact sont utilisées uniquement pour répondre à vos messages.</p>
    </footer>
</template>

<style scoped>
.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 40px;
    border-top: 1px solid rgb(150, 150, 150);
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

.credit{
    font-size: 13px;
    color: rgb(75, 75, 75);
}
.legal{
    font-size: 13px;
    color: rgb(75, 75, 75);
}
</style>