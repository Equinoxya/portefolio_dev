<template>
    <section class="hero">
        <div class="hero-left">
            <img src="/images/PhotoProfil.webp"  alt="Photo de profil">
            <h1>Ophélie Bellissens</h1>
            <h2>Conceptrice développeuse intégratrice IA</h2>
            <p class="bio">Développeuse intégratrice IA en formation à Metz Numeric School, 
                je conçois des applications avec une approche orientée logique métier et systèmes. 
                À l'aise avec Python, JavaScript et les APIs REST, je m'investis sur des projets à forte 
                valeur technique.</p>
            <div class="badges">
                <span v-for="badge in badges" :key="badge" class="badge">{{badge}}</span>
            </div>
            <button class="button-projets">
                Voir mes projets
            </button>
            <button class="button-contact">
                Me contacter
            </button>
            </div>
        <div class="hero-right">
            <FontAwesomeIcon :icon="byPrefixAndName.fas['graduation-cap']" />
            <h2>Formations & stages</h2>
            <div v-for=" formation in formations" :key ="formation.titre" class="formation-card">
                <h3>{{formation.titre}}</h3>
                <span class="ecole">{{formation.ecole}}</span>
                <span class="annee">{{formation.annee}}</span>
                <p>{{formation.description}}</p>
            </div>
        </div>
    </section>
</template>
<script setup>
    const badges = ['React/Vue', 'Python', 'Node.js', 'HTML/CSS', 'SEO']
    const formations = [
  {
    titre: 'Titre RNCP Concepteur Développeur Intégrateur IA',
    ecole: 'Metz Numeric School',
    annee: '2026 - En cours',
    description: 'Développement d\'applications sécurisées en architecture multicouche, gestion de bases de données relationnelles SQL/NoSQL et déploiement dans une démarche Agile et DevOps.'
  },
  {
    titre: 'Titre RNCP Développeur Web',
    ecole: 'Openclassroom',
    annee: '2022 - 2023',
    description: 'Conception de systèmes interactifs et interfaces utilisateur, architecture applicative et optimisation des performances.'
  }
]
</script>
<style scoped>
    .hero{
        width: 90%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 2%;
        margin-top: 5%;
    }
    .hero-left{
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
        border: 5px solid rgb(255, 234, 196);
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
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
    }
    .formation-card{
        box-shadow: -1px 1px 10px #c5c5c5;
        width: 95%;
        border-radius: 20px;
        padding: 2%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
</style>