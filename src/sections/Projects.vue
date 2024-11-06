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

const currentIndex = ref(0);
const projectsPerPage = 3;
const isLargeScreen = ref(window.innerWidth > 768);

const visibleProjects = computed(() => {
    if (isLargeScreen.value) {
        const start = currentIndex.value * projectsPerPage;
        const end = start + projectsPerPage;
        return filteredProjects.value.slice(start, end);
    } else {
        return filteredProjects.value;
    }
});

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

const nextSlide = () => {
    if (isLargeScreen.value && (currentIndex.value + 1) * projectsPerPage < filteredProjects.value.length) {
        currentIndex.value++;
    }
};

const prevSlide = () => {
    if (isLargeScreen.value && currentIndex.value > 0) {
        currentIndex.value--;
    }
};

window.addEventListener('resize', () => {
    isLargeScreen.value = window.innerWidth > 768;
});

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
                    <Project v-for="(project, index) in visibleProjects" :key="index" :project="project"
                        @openDetails="openProjectDetails" />
                </TransitionGroup>

                <div v-if="isLargeScreen" class="slider-controls delay-small">
                    <button @click="prevSlide" :disabled="currentIndex === 0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                            class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                        </svg>
                    </button>

                    <button @click="nextSlide"
                        :disabled="(currentIndex + 1) * projectsPerPage >= filteredProjects.length">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                            class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    </button>
                </div>
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

.slider-controls {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 110%;

    button {
        cursor: pointer;
        font-size: 1.6rem;
        transition: transform .3s ease;

        &:hover:not([disabled]) {
            transform: scale(1.1);
        }

        &[disabled] {
            opacity: 0.5;
            cursor: not-allowed;
        }
    }
}
</style>
