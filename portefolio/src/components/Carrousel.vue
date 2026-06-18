<template>
    <div class="competences-wrapper" id="competences">
        <span class="titre-tech">
            <FontAwesomeIcon icon="code" />
            <h2>Compétences</h2>
        </span>

        <div class="scene">
            <div class="roue">
                <div v-for="(tech, index) in techs" :key="tech.icone" 
                     class="tech-cercle"
                     :style="{ transform: `rotateY(${index * (360 / techs.length)}deg) translateZ(500px)` }">
                    <i :class="`devicon-${tech.icone}-plain colored`"></i>
                    <span>{{ tech.nom }}</span>
                </div>
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
.scene {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.roue {
    width: 180px;
    height: 180px;
    position: relative;
    transform-style: preserve-3d;
    animation: tourner 30s linear infinite;
}
.titre-tech{
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 5%;
    margin: 5%;
}
.tech-cercle {
    backface-visibility: hidden;
    position: absolute;
    width: 180px;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

@keyframes tourner {
    from { transform: rotateY(0deg); }
    to   { transform: rotateY(360deg); }
}
</style>