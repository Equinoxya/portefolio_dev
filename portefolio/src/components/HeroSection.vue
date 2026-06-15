<template>
    <section class="hero" id="about">
        <div class="hero-left">
            <img src="/images/PhotoProfil.webp"  alt="Photo de profil" loading="lazy">
            <h1>Ophélie Bellissens</h1>
            <h2>Conceptrice développeuse intégratrice IA</h2>
            <p class="bio">Je suis développeuse et illustratrice, 
                animée par une même conviction : les meilleurs projets naissent lorsque la technique rencontre 
                la créativité. Que ce soit à travers une application, une intelligence artificielle ou une 
                identité visuelle, j'aime transformer une idée en une réalisation concrète, élégante et utile. 
                Mon objectif est de concevoir des expériences qui ont du sens, tout en continuant à apprendre 
                et à repousser mes propres limites.</p>
            <ul>
                <li>💻 Développement web et logiciel</li>
                <li>🤖 Intelligence artificielle & Machine Learning</li>
                <li>🎮 Passionnée par l'univers du jeu vidéo</li> 
                <li>🚀 Toujours prête à relever de nouveaux défis</li>
            </ul>
            <button class="button-projets" @click="allerA('#projets')">
                Voir mes projets
            </button>
            <button class="button-contact" @click="allerA('#contact')">
                Me contacter
            </button> 
            </div>
        <div class="hero-right" id="parcours">
            <span class="entete">
                <FontAwesomeIcon icon="graduation-cap" />
                <h2>Formations & stages</h2>
            </span>
            <div v-for=" stage in stages" :key ="stage.titre" class="formation-card">
                <FontAwesomeIcon :icon="stage.icone" class="icone"/>
                <span class="desc-card">
                <h3>{{stage.titre}}</h3>
                <span class="ecole">{{stage.entreprise}}</span>
                <span class="annee">{{stage.annee}}</span>
                <p>{{stage.description}}</p>
                </span>
            </div>
            <div v-for=" formation in formations" :key ="formation.titre" class="formation-card">
                <FontAwesomeIcon :icon="formation.icone" class="icone"/>
                <span class="desc-card">
                    <h3>{{formation.titre}}</h3>
                    <span class="ecole">{{formation.ecole}}</span>
                    <span class="annee">{{formation.annee}}</span>
                    <p>{{formation.description}}</p>
                </span>
            </div>
        </div>
    </section>
</template>
<script setup>
    const stages = [{
    titre: 'Stage developpeur web',
    entreprise: 'Exocoms Group',
    annee: 'sept - oct 2026',
    description: "---",
    icone: 'briefcase'
},]
    const formations = [
        {
    titre: 'Titre RNCP Concepteur Développeur Intégrateur IA',
    ecole: 'Metz Numeric School',
    annee: '2026 - En cours',
    description: 'Développement d\'applications sécurisées en architecture multicouche, gestion de bases de données relationnelles SQL/NoSQL et déploiement dans une démarche Agile et DevOps.',
    icone : 'graduation-cap'
},
{
    titre: 'Titre RNCP Développeur Web',
    ecole: 'Openclassroom',
    annee: '2022 - 2023',
    description: 'Conception de systèmes interactifs et interfaces utilisateur, architecture applicative et optimisation des performances.',
    icone : 'graduation-cap'
}
]
function allerA(ancre) {
    window.location.href = ancre
}
</script>
<style scoped>
    .hero{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-around;
        margin: 2%;
        margin-top: 5%;
        align-items: center;
    }
    .hero-left{
        min-width: 300px;
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 25px;
        padding: 2%;
        gap: 10px;
    }
    img{
        width: 150px;
        height: 150px;
        border: 5px solid rgb(232, 232, 232);
        border-radius: 100%;
        object-fit: cover;
    }
    .bio{
        padding: 2%;
        margin: 2%;
        text-align: center;
    }
    .badges{
        display: flex;
        width: 90%;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
        flex-direction: row;
    }
    .badge{
        display: flex;
        border: 1px solid rgb(53, 53, 53);
        background-color: rgb(255, 255, 255);
        width: 20%;
        margin: 1%;
        border-radius: 20px;
        align-items: center;
        justify-content: center;
    }
    .button-projets {
    background-color: black;
    color: white;
    border: none;
    border-radius:20px;
    padding: 2%;
    width: 40%;
}

    .button-contact {
        background-color: white;
        color: black;
        border: 1px solid black;
        border-radius: 20px;
        padding: 2%;
        width: 40%;
    }
    button{
        cursor: pointer;
    }
    .hero-right{
        min-width: 300px;
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
    }
    .entete{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }
    .formation-card{
        box-shadow: -1px 1px 10px #c5c5c5;
        width: 95%;
        border-radius: 20px;
        padding: 2%;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5%;
    }
    .icone{
        padding: 2%;
        background-color: #e9e9e9;
        border-radius: 100%;
    }
    .desc-card{
            display: flex;
    flex-direction: column;
    align-items: flex-start;
}
</style>