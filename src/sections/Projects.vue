<script setup>
import { ref, computed, watch } from 'vue';
import Project from "../components/Project.vue";
import ProjectDetails from "../components/ProjectDetails.vue";
import SkillFilter from "../components/SkillFilter.vue";
import { orderByName } from '../utils/orderUtils';

const props = defineProps({
    projects: {
        type: Array,
        required: true
    }
});

const selectedProject = ref(null);
const filteredProjects = ref(props.projects.sort(orderByName));
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
    currentIndex.value = 0;
};

watch(isProjectDetailsActive, (value) => {
    document.body.classList.toggle("hide-scroll", !!value);
});
</script>

<template>
    <section id="projects-section">
        <div class="container">
            <h3 class="section-title delay-small">Projetos</h3>

            <SkillFilter :projects="props.projects" @filter="filterProjectsBySkill" />

            <div class="projects">
                <TransitionGroup>
                    <Project v-for="(project, index) in filteredProjects" :key="index" :project="project"
                        @openDetails="openProjectDetails" />
                </TransitionGroup>
            </div>

            <a class="btn secondary delay-small" href="https://github.com/lezzin?tab=repositories" target="_blank"
                rel="noopener noreferrer" title="Acessar mais projetos no GitHub">
                <img src="/icons/github.svg" alt="Logo do GitHub" width="16" height="16">
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
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
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
