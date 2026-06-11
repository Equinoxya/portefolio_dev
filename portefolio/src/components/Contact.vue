<template>
    <section class="contact" id="Contact">
        <span class="titre-contact">
            <h2>Contact</h2>
        </span>
        <p>Un projet, une idée, une opportunité ? Écrivez-moi, je serai ravie d'échanger.</p>
        <form action="" class="formulaire-contact">
            <input v-model="nom" type="text" placeholder="Entrez votre nom">
            <input v-model="email" type="email" placeholder="Entrez votre email">
            <textarea v-model="message" placeholder="Votre message..."></textarea>
            <button @click="envoyer" class="envoyer">Envoyer</button>
        </form>
    </section>
</template>
<script setup>
import emailjs from '@emailjs/browser'
import { ref } from 'vue'

const nom = ref('')
const email = ref('')
const message = ref('')

function envoyer(){
    emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
        from_name: nom.value,
        from_email: email.value,
        message: message.value,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
).then(() => {
        alert('Message envoyé !')
        nom.value = ''
        email.value = ''
        message.value = ''
    }).catch(() => {
        alert('Erreur lors de l\'envoi.')
    })
}
</script>
<style scoped>
.contact {
    width: 90%;
    margin: 5%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
}

.formulaire-contact {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 50%;
}

input, textarea {
    padding: 12px;
    border: 1px solid rgb(200, 200, 200);
    border-radius: 8px;
    font-size: 16px;
    outline: none;
}

textarea {
    height: 150px;
    resize: vertical;
}

.envoyer {
    background-color: black;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 12px;
    font-size: 16px;
    cursor: pointer;
    width: 40%;
}
</style>