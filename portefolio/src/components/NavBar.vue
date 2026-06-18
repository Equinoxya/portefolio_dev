<template>
    <nav class="navbar">
        <span class="logotitle">
            <div class="logo">
                <p class="plogo">OB</p>
            </div>
            <h1 class="titre">Portfolio</h1>
        </span>
        <span class="span_nav">
            <button class="burger" @click="menuOuvert = !menuOuvert">☰</button>
            <ul class="links" :class="{ ouvert: menuOuvert }">
                <li><a href="/#parcours" aria-label="Parcours">Parcours</a></li>
                <li><a href="/#competences" aria-label="Compétences">Compétences</a></li>
                <li><a href="/#projets" aria-label="Projets">Projets</a></li>
                <li><a href="/#contact" aria-label="Contact">Contact</a></li>
            </ul>
            <button @click="toggleDark" class="toggle-dark">
                {{ darkMode ? '☀️' : '🌙' }}
            </button>
        </span>
    </nav>
</template>
<script setup>
import { ref } from 'vue'

const darkMode = ref(false)

function toggleDark() {
    darkMode.value = !darkMode.value
    document.documentElement.classList.toggle('dark')
}
const menuOuvert = ref(false)
</script>
<style scoped>
    .navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10vh;
    margin: 0;
    border-bottom: 1px solid var(--border);
    box-shadow: var(--shadow);
    }
    .logotitle{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: row;
        width: 20%;
    }
    .logo{
        display: flex;
        width: 50px;
        height: 50px;
        border-radius: 10px;
        background-color: rgb(47, 47, 47);
        align-items: center;
        justify-content: center;
    }
    .plogo{
            font-family: 'Mina';
            font-weight: 700;
            font-size: 30px;
            color: rgb(255, 255, 255);
    }
    .titre{
        font-size: 40px;
    }
    .span_nav{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    ul{
        display: flex;
        justify-content: flex-end;
        gap: 5%;
        width: 50%;
        align-items: center;
        margin-right: 2%;
        z-index: 1;
    }
    li{
        list-style: none;
        font-size: 20px;
    }
    a {
    text-decoration: none;
    color: var(--texte);  /* ← au lieu de color: black */
}
    /* Desktop — état par défaut */
    .burger {
        display: none;
        border-radius: 100%;
        border: 1px solid gray;
        background: none;
        width: 50px;
        height: 50px;

    }
    .toggle-dark {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 20px;
        padding: 8px;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        transition: background-color 0.3s ease;
    }

    .toggle-dark:hover {
        background-color: rgb(240, 240, 240);
    }

/* Mobile */
@media (max-width: 768px) {
    .plogo{
        display: none;
    }
    h1{
        font-size: 12px;
    }
    .burger {
        display: block;  /* burger visible */
    }
    .links {
        display: none;       /* menu caché par défaut */
        flex-direction: column;
        position: absolute;
        top: 10vh;
        left: 0;
        width: 100%;
        background-color: white;
        padding: 20px;
    }
    .logotitle{
        justify-content: space-around;
    }
        .links.ouvert {
            display: flex;  /* menu visible quand ouvert */
        }
    .navbar{
        justify-content: space-around;
    }}
</style>