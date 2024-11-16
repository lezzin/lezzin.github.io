<script setup>
import { ref, onMounted } from "vue";
import ScrollReveal from "scrollreveal";

import MyHeader from './sections/MyHeader.vue';
import MyFooter from './sections/MyFooter.vue';
import Home from './sections/Home.vue';
import Presentation from './sections/Presentation.vue';
import Skills from './sections/Skills.vue';
import Projects from './sections/Projects.vue';
import Contact from "./sections/Contact.vue";

import Loader from './components/shared/Loader.vue';

import projectsJson from "./mocks/projects.js";
import skillsJson from "./mocks/skills.js";

const isLoading = ref(true);

const loadScrollReveal = () => {
    const sr = ScrollReveal({
        distance: "20px",
        duration: 1000,
        origin: "top",
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
        <Skills :skills="skillsJson" />
        <Projects :projects="projectsJson" />
        <Contact />
    </main>

    <MyFooter />

    <Teleport to="#loader">
        <Transition>
            <Loader v-if="isLoading" />
        </Transition>
    </Teleport>
</template>