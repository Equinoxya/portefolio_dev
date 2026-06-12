<script setup>
import HeroSection from "../components/HeroSection.vue"
import Carrousel from "../components/Carrousel.vue";
import ProjectsSection from "../components/ProjectsSection.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";
import ScrollTop from "@/components/ScrollTop.vue";

</script>

<template>
    <div>
        <HeroSection />
        <Carrousel />
        <ScrollTop/>
        <ProjectsSection />
        <Contact />
        <Footer />
    </div>
</template>