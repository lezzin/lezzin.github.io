<script>
import { ref, onMounted } from "vue";

import MyHeader from './sections/MyHeader.vue';
import MyFooter from './sections/MyFooter.vue';
import Home from './sections/Home.vue';
import Presentation from './sections/Presentation.vue';
import Skills from './sections/Skills.vue';
import Projects from './sections/Projects.vue';
import Contact from './sections/Contact.vue';

import Loader from './components/Loader.vue';

import projectsJson from "./data/projects.js";
import skillsJson from "./data/skills.js";

export default {
    setup() {
        const isLoading = ref(true);
        const myProjects = ref(projectsJson);
        const mySkills = ref(skillsJson);

        onMounted(() => {
            isLoading.value = false;
        });

        return {
            isLoading, myProjects, mySkills
        }
    },
    components: {
        MyHeader,
        MyFooter,
        Home,
        Presentation,
        Skills,
        Projects,
        Contact,
        Loader
    }
}
</script>

<template>
    <MyHeader />

    <main>
        <Home />
        <Presentation />
        <Skills :skills="mySkills" />
        <Projects :projects="myProjects" />
        <Contact />
    </main>

    <MyFooter />

    <Loader :loading="isLoading" />
</template>
