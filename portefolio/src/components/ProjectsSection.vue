<template>
    <section class="projects-section" id="projets">
        <span class="titre-projets">
            <FontAwesomeIcon :icon="faFolderOpen" />
            <h2>Projets</h2>
        </span>
        <span class="projets">
            <article class="project-card" v-for="projet in projets" :key="projet.nom">
                <h3>{{ projet.nom }}</h3>
                <a :href="projet.github" target="_blank"><img :src="projet.image" alt=""></a>
                <p>{{ projet.description }}</p>
                <div class="tags">
                    <span class="tag" v-for="tag in projet.tags" :key="tag">{{ tag }}</span>
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
        tags: ['HTML', 'CSS', 'Javascript', 'SEO', 'Optimisation'],
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
.project-card{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-width: 280px;
    width: 30%;
    align-items: center;
    box-shadow: 0px 4px 15px rgb(209, 208, 208);
    border-radius: 10px;
    padding: 1%,
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
.tags{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1%;
}
.tag{
    display: flex;
    border: 1px solid rgb(53, 53, 53);
    background-color: rgb(255, 255, 255);
    width: 40%;
    margin: 1%;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
}
</style>