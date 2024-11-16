<script setup>
import { ref, onMounted } from 'vue';
import { orderByName } from '../../utils/orderUtils';

const emit = defineEmits(["filter"]);

const props = defineProps({
    projects: {
        type: Array,
        required: true
    }
});

const activeSkill = ref(null);
const skillList = ref([]);

const filterProjectsBySkill = (skillName) => {
    activeSkill.value = activeSkill.value === skillName ? null : skillName;

    const filteredProjects = activeSkill.value
        ? props.projects.filter(project => project.skills.includes(activeSkill.value))
        : props.projects;

    emit("filter", filteredProjects);
};

const calculateSkillsCount = (projects) => {
    const allSkills = projects.flatMap(project => project.skills);
    const skillCounts = allSkills.reduce((counts, skill) => {
        counts[skill] = (counts[skill] || 0) + 1; // Quantidade de vezes que a skill aparece
        return counts;
    }, {});

    return Object.entries(skillCounts)
        .map(([name, quantity]) => ({ name, quantity }))// Transforma o array em objeto
        .sort(orderByName); // Ordena em ordem alfabética
};

onMounted(() => {
    skillList.value = calculateSkillsCount(props.projects);
});
</script>

<template>
    <p class="delay-small">Filtrar projetos por habilidades:</p>
    <div class="btn-group delay-medium">
        <button v-for="skill in skillList" :key="skill.name"
            :class="['skill', 'btn', 'dark-quaternary', { 'active': activeSkill === skill.name }]"
            @click="filterProjectsBySkill(skill.name)">
            {{ skill.name }} <span class="skill-count-badge">{{ skill.quantity }}</span>
        </button>
    </div>
</template>

<style scoped>
p {
    margin-bottom: 1rem;
    text-align: center;
}

.btn-group {
    font-size: 1.5rem;
    gap: 0.8rem;
}

.btn-group .btn {
    font-weight: 500;
    padding-inline: 1.5rem 1rem;
    box-shadow: 0 .25rem 1rem rgb(0 0 0 / 17.5%);
    z-index: 1;

    &.active {
        color: var(--font-primary-color);
        background-color: var(--primary-color);
    }
}

.skill-count-badge {
    background: var(--tertiary-background);
    border-radius: 50%;
    aspect-ratio: 1;
    width: 2rem;
    display: grid;
    place-items: center;
    margin-left: .5rem;
    font-size: 1.2rem;
}
</style>