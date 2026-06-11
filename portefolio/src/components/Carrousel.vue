<template>
    <div class="tech-wrapper">
        <span class="titre-tech">
            <FontAwesomeIcon icon="code" />
            <h2>Compétences</h2>
        </span>
        <div class="tech-grid">
            <div v-for="tech in techs" :key="tech.icone" class="tech-item">
                <i :class="`devicon-${tech.icone}-plain colored`"></i>
                <span>{{ tech.nom }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
    const techs = [
        { icone: 'python', nom: 'Python' },
        { icone: 'vuejs', nom: 'Vue.js' },
        { icone: 'nodejs', nom: 'Node.js' },
        { icone: 'javascript', nom: 'JavaScript' },
        { icone: 'html5', nom: 'HTML5' },
        { icone: 'css3', nom: 'CSS3' },
        { icone: 'git', nom: 'Git' },
        { icone: 'mongodb', nom: 'MongoDB' },
        { icone: 'mysql', nom: 'MySQL' },
        { icone: 'github', nom: 'Github'},
        { icone: 'npm', nom: 'NPM'},
        { icone: 'postgresql', nom: 'PostgreSQL'},
        { icone: 'vscode', nom: 'VS Code' }
    ]
</script>

<style scoped>
.tech-grid {
    display: flex;
    width: 75%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
}
.tech-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    margin: 1%;
}
i {
    font-size: 48px;
}
.tech-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.titre-tech{
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 5%;
    margin: 5%;
}
</style>