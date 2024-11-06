<script setup>
import { imageUrl } from '../utils/imageUtils';

const props = defineProps({
    project: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <article class="project interval-medium">
        <img class="project-image" :src="imageUrl(props.project.image)" width="480" height="270"
            alt="Pré-visualização do projeto" loading="lazy">
        <div class="project-details">
            <div>
                <h3 class="project-name">{{ props.project.name }}</h3>
                <p class="project-description">{{ props.project.description }}</p>
                <p class="project-skills">
                    <span class="badge" v-for="(skill, index) in props.project.skills">{{ skill }}</span>
                </p>
            </div>

            <button type="button" class="btn success" @click="$emit('openDetails', props.project)">
                Visualizar detalhes
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

.project-skills {
    display: flex;
    gap: 0.5rem;
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
    margin-bottom: 1rem;
}

.project-description {
    margin-bottom: 1.2rem;
}

.project-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    width: 100%;
}

.project-buttons .btn {
    flex-grow: 1;
    border-radius: calc(var(--border-radius) / 2);
}

.project-buttons .btn.full {
    width: 100%;
}

.project-buttons .btn svg {
    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
}

.project-buttons .btn:hover svg,
.project-buttons .btn:focus svg {
    transform: rotate(20deg);
}

.project:hover,
.project:focus,
.project:focus-within {
    border-color: var(--primary-color);
}
</style>