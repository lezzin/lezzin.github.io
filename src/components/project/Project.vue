<script setup>
import { imageUrl } from '../../utils/urlUtils';

const props = defineProps({
    project: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <article class="project interval-medium">
        <img class="project-image" :src="imageUrl(project.image, 'projects')" width="480" height="270"
            alt="Pré-visualização do projeto" loading="lazy">

        <div class="project-details">
            <div>
                <h3 class="project-name">{{ project.name }}</h3>
                <p class="project-description">{{ project.description }}</p>
                <p class="project-skills">
                    <span class="badge" v-for="(skill, index) in project.skills" :key="index">{{ skill }}</span>
                </p>
            </div>

            <button type="button" class="btn success icon" @click="$emit('openDetails', project)">
                <fa icon="circle-info" />
                <span>Mais detalhes</span>
            </button>
        </div>
    </article>
</template>

<style scoped>
.project {
    border-radius: var(--border-radius);
    overflow: hidden;
    border: 1px solid var(--border-color);
    background-color: var(--tertiary-background);
    transition: .6s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;

    @media(min-width: 768px) {
        min-height: 53vh;
    }
}

.project-details {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: 2rem;
    padding: 1rem;
}

.project-details button {
    border-radius: calc(var(--border-radius) / 2);
    width: 100%;
}

.project-details button svg {
    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
}

.project-details button:hover svg,
.project-details button:focus svg {
    transform: rotate(20deg);
}

.project:hover,
.project:focus,
.project:focus-within {
    border-color: var(--primary-color);
}

.project-skills {
    display: flex;
    gap: 0.5rem;
    font-weight: 500;
    flex-wrap: wrap;
    font-size: 1.1rem;
}

.project-skills .badge {
    background-color: var(--secondary-background);
    padding: .25rem .5rem;
    border-radius: calc(var(--border-radius) / 3);
    transition: .6s ease;
}

.project-skills .badge:hover,
.project-skills .badge:focus {
    background-color: var(--primary-background);
}

.project-name {
    font-weight: 500;
    margin-bottom: 1rem;
}

.project-description {
    margin-bottom: 1.2rem;
}
</style>