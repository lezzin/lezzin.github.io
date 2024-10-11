<script>
import { ref, onMounted } from "vue";
import ScrollReveal from "scrollreveal";

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
    components: {
        MyHeader,
        MyFooter,
        Home,
        Presentation,
        Skills,
        Projects,
        Contact,
        Loader
    },
    setup() {
        const isLoading = ref(true);
        const myProjects = ref(projectsJson);
        const mySkills = ref(skillsJson);

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
            });
        }

        onMounted(() => {
            loadScrollReveal();
            hideLoader();
        });

        return {
            isLoading,
            myProjects,
            mySkills
        }
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
