<template>
    <section class="projects-section" id="projets">
        <span class="titre-projets">
            <FontAwesomeIcon :icon="faFolderOpen" />
            <h2>Projets</h2>
        </span>
        <span class="projets">
            <article class="project-card" v-for="projet in projets" :key="projet.nom">
                <img :src="projet.image" :alt="projet.nom">
                <div class="card-body">
                    <div class="card-titre">
                        <h3>{{ projet.nom }}</h3>
                        <a :href="projet.github" target="_blank">↗</a>
                    </div>
                    <p>{{ projet.description }}</p>
        <div class="tags">
            <span class="tag" v-for="tag in projet.tags" :key="tag">{{ tag }}</span>
        </div>
    </div>
</article>
        </span>
    </section>
</template>
<script setup>
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

const projets =[
    {
        nom: 'Game Recommander',
        description: 'Une application utilisant une ia pour vous recommander une catégorie de jeux vidéo',
        tags: ['Python', 'ML', 'Flash',],
        github: 'https://gamesrecommender.netlify.app/',
        image: './images/GameRecommander.webp',
    },
    {
        nom: 'Booki',
        description: 'Interface utilisateur pour un site de tourisme',
        tags: ['HTML', 'CSS'],
        github: 'https://equinoxya.github.io/Booki/',
        image: './images/Booki.webp',
    },
    {
        nom: 'Nina Carducci, portefolio photographe',
        description: 'Portefolio pour la photographe Nina Carducci',
        tags: ['Javascript', 'SEO', 'Optimisation'],
        github: 'https://equinoxya.github.io/OPP5-Nina/',
        image: './images/Nina.webp',
    },
]
</script>
<style scoped>
img{
    width: 100%;
    height: 200px;
    border-radius: 10px 10px 0 0;
    object-fit: cover;
}
.projects-section{
    width: 90%;
    display: flex;
    flex-direction: column;
    align-content: space-around;
    margin: 5%;
    gap: 30px;
    
}
.projets{
    display: flex;
    align-items: stretch;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.project-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-width: 280px;
    width: 30%;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 16px;
    overflow: hidden;  /* ← important pour que l'image respecte le border-radius */
    box-shadow: 0px 4px 15px rgb(209, 208, 208);
}
.card-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.card-titre {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
p{
    text-align: center;
    width: 93%;
}
.titre-projets{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2%;
    justify-content: center;
}
.tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
}
.tag {
    background-color: rgb(240, 240, 240);
    border-radius: 20px;
    padding: 4px 12px;
    font-size: 13px;
}
</style>