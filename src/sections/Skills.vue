<script setup>
import { ref } from "vue";
import Skill from "../components/skill/Skill.vue";

const props = defineProps({
    skills: {
        type: Array,
        required: true
    }
});

const description = ref('');

function showDescription(skill) {
    description.value = `${skill.name}: ${skill.description}`;
}

function hideDescription() {
    description.value = '';
}
</script>

<template>
    <section id="skills-section">
        <div class="container">
            <h2 class="section-title delay-small">Habilidades</h2>

            <div class="skills">
                <Skill v-for="(skill, index) in skills" :key="index" :skill="skill" @mouseover="showDescription(skill)"
                    @mouseleave="hideDescription" />
            </div>

            <p class="skill-description">{{ description }}</p>
        </div>
    </section>
</template>

<style scoped>
section {
    padding: 5vh 0;
    background: var(--secondary-background);
}

.skills {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.skill-description {
    margin-top: 4rem;
    min-height: 2rem;
    text-align: center;
}
</style>