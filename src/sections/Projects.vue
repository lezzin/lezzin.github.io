<script setup>
import { onMounted, ref, computed } from "vue";
import Project from "../components/Project.vue";

const props = defineProps({
    projects: {
        type: Array,
        required: true
    }
});

const skillList = ref([]);
const activeSkill = ref(null);

const filteredProjects = computed(() => {
    return activeSkill.value
        ? props.projects.filter(project => project.skills.includes(activeSkill.value))
        : props.projects;
});

const filterProjectsBySkill = (skillName) => {
    activeSkill.value = activeSkill.value === skillName ? null : skillName;
};

const calculateSkillsCount = (projects) => {
    const allSkills = projects.flatMap(project => project.skills);
    const skillCounts = allSkills.reduce((counts, skill) => {
        counts[skill] = (counts[skill] || 0) + 1;
        return counts;
    }, {});

    return Object.entries(skillCounts).map(([name, quantity]) => ({ name, quantity })).sort((a, b) => a.name.localeCompare(b.name));
};

onMounted(() => {
    skillList.value = calculateSkillsCount(props.projects);
});
</script>

<template>
    <section id="projects-section">
        <div class="container">
            <h3 class="section-title delay-small">Projetos</h3>

            <div class="btn-group">
                <button v-for="skill in skillList" :key="skill.name"
                    :class="['skill', 'btn', 'dark-quaternary', { 'active': activeSkill === skill.name }]"
                    @click="filterProjectsBySkill(skill.name)">
                    <span>{{ skill.name }}</span>
                    <span class="skill-quantity">({{ skill.quantity }})</span>
                </button>
            </div>

            <div class="projects">
                <Project v-for="(project, index) in filteredProjects" :key="index" :project="project" />
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

.projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    margin-bottom: 3rem;
    max-width: 100%;
}

.btn-group {
    margin-bottom: 3rem;
    font-size: 1.4rem;
}

.btn-group .btn.active {
    color: var(--font-primary-color);
    background-color: var(--primary-color);
}

.skill-quantity {
    font-size: 1.4rem;
}
</style>
