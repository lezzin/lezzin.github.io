<script setup>
import { ref, toRef, watch } from 'vue';

import { iconUrl } from '../utils/urlUtils';

import Project from "../components/project/Project.vue";
import ProjectDetails from "../components/project/ProjectDetails.vue";
import SkillFilter from "../components/skill/SkillFilter.vue";

const props = defineProps({
    projects: {
        type: Array,
        required: true
    }
});

const selectedProject = ref(null);
const filteredProjects = toRef(props.projects);
const isProjectDetailsActive = ref(false);

const openProjectDetails = (project) => {
    isProjectDetailsActive.value = true;
    selectedProject.value = project;
};

const closeProjectDetails = () => {
    isProjectDetailsActive.value = false;
    selectedProject.value = null;
};

const filterProjectsBySkill = (filtered) => {
    filteredProjects.value = filtered;
};

watch(isProjectDetailsActive, (value) => {
    document.body.classList.toggle("hide-scroll", !!value);
});
</script>

<template>
    <section id="projects-section" class="delay-small">
        <div class="container">
            <h3 class="section-title delay-small">Projetos</h3>

            <SkillFilter :projects="props.projects" @filter="filterProjectsBySkill" />

            <div class="projects">
                <Project v-for="(project, index) in filteredProjects" :key="index" :project="project"
                    @openDetails="openProjectDetails" />
            </div>

            <a class="btn secondary delay-small" href="https://github.com/lezzin?tab=repositories" target="_blank"
                rel="noopener noreferrer" title="Acessar mais projetos no GitHub">
                <img :src="iconUrl('github.svg', 'media')" alt="Logo do GitHub" width="16" height="16">
                Visualizar mais projetos
            </a>
        </div>
    </section>

    <Teleport to="#modal">
        <Transition>
            <ProjectDetails @close="closeProjectDetails" :project="selectedProject" v-if="isProjectDetailsActive" />
        </Transition>
    </Teleport>
</template>

<style scoped>
section {
    background: var(--secondary-background);
    background: linear-gradient(to bottom, var(--secondary-background) 0%, var(--primary-background) 100%);
}

@media(max-width: 768px) {
    section {
        padding: 5vh 0;
    }
}

.projects {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    margin-bottom: 3rem;
    max-width: 100%;
    position: relative;
}
</style>
