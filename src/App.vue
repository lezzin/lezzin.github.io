<script setup>
import { ref, onMounted } from "vue";
import MyHeader from './sections/MyHeader.vue';
import MyFooter from './sections/MyFooter.vue';
import Home from './sections/Home.vue';
import Presentation from './sections/Presentation.vue';
import Skills from './sections/Skills.vue';
import Projects from './sections/Projects.vue';
import Contact from './sections/Contact.vue';

async function requestData(file) {
    const url = `src/data/${file}.json`;
    return await fetch(url).then(data => data.json());
}

const isLoading = ref(false);
const skills = ref([]);
const projects = ref([]);

onMounted(async () => {
    skills.value = await requestData("skills");
    projects.value = await requestData("projects");

    isLoading.value = false;
});
</script>

<template>
    <MyHeader />

    <main>
        <Home />
        <Presentation />
        <Skills :skills="skills" />
        <Projects :projects="projects" />
        <Contact />
    </main>

    <MyFooter />

    <div class="loader" v-if="isLoading">
        <img src="/images/loader-icon.svg" alt="Imagem do loader">
    </div>
</template>
