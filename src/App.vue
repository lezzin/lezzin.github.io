<script setup>
import { ref, onMounted, computed } from "vue";
import ScrollReveal from "scrollreveal";

import MyHeader from './sections/MyHeader.vue';
import MyFooter from './sections/MyFooter.vue';
import Home from './sections/Home.vue';
import Presentation from './sections/Presentation.vue';
import Skills from './sections/Skills.vue';
import Projects from './sections/Projects.vue';

import Loader from './components/Loader.vue';

import projectsJson from "./data/projects.js";
import skillsJson from "./data/skills.js";

const isLoading = ref(true);
const myProjects = computed(() => projectsJson);
const mySkills = computed(() => skillsJson);

const loadScrollReveal = () => {
    const sr = ScrollReveal({
        origin: "top",
        distance: "50px",
        duration: 1500,
    });

    sr.reveal(".delay-small", { delay: 200 });
    sr.reveal(".delay-medium", { delay: 300 });
    sr.reveal(".delay-large", { delay: 400 });
    sr.reveal(".interval-small", { interval: 200 });
    sr.reveal(".interval-medium", { interval: 300 });
}

const hideLoader = () => {
    setTimeout(() => {
        isLoading.value = false;
    }, 500);
}

onMounted(() => {
    loadScrollReveal();
    hideLoader();
});
</script>

<template>
    <MyHeader />

    <main>
        <Home />
        <Presentation />
        <Skills :skills="mySkills" />
        <Projects :projects="myProjects" />
    </main>

    <MyFooter />

    <Loader :loading="isLoading" />
</template>
