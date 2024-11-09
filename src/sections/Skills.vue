<script setup>
import Skill from "../components/skill/Skill.vue";

const props = defineProps({
    skills: {
        type: Array,
        required: true
    }
});
</script>

<template>
    <section id="skills-section">
        <div class="container">
            <h3 class="section-title delay-small">Habilidades</h3>

            <div class="skills">
                <Skill v-for="(skill, index) in props.skills" :key="index" :skill="skill" />
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    padding: 5vh 0;
    background: var(--primary-background);
    background: linear-gradient(180deg, var(--secondary-background) 0%, var(--primary-background)100%);
}

.skills {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>