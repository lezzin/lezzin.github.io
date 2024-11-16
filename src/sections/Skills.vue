<script setup>
import { ref } from "vue";
import Skill from "../components/skill/Skill.vue";

const props = defineProps({
    skills: {
        type: Array,
        required: true
    }
});

function showDescription(value) {
    description.value = value;
}

function hideDescription() {
    description.value = '';
}

const description = ref('');
</script>

<template>
    <section id="skills-section">
        <div class="container">
            <h3 class="section-title delay-small">Habilidades</h3>

            <div class="skills">
                <Skill v-for="(skill, index) in skills" :key="index" :skill="skill"
                    @mouseover="showDescription(skill.description)" @mouseleave="hideDescription" />
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
    margin-top: 3rem;
    min-height: 2rem;
    text-align: center;
}
</style>