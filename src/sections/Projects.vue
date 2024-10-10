<script>
import Project from "../components/Project.vue";
export default {
    components: {
        Project
    },
    props: ["projects"]
}
</script>
<template>
    <section id="projects-section">
        <div class="container">
            <h3 class="section-title delay-small">Projetos</h3>
            <div class="projects">
                <Project v-for="(project, index) in projects" :key="index" :project="project" />
            </div>
            <a class="btn secondary delay-small" href="https://github.com/lezzin?tab=repositories" target="_blank"
                rel="noopener noreferrer" title="Acessar mais projetos no GitHub">
                <img src="/icons/github.svg" alt="Logo do GitHub" width="16" height="16">
                Visualizar mais projetos
            </a>
        </div>
    </section>
</template>

<style scoped>
section {
    padding: 5vh 0;
}

section .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    margin-bottom: 3rem;
    max-width: 100%;
}
</style>