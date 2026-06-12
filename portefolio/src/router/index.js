import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import MentionsLegales from "@/components/MentionsLegales.vue";

const routes =[
    {path: '/', component: Home},
    {path: '/mentions-legales', component: MentionsLegales}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router