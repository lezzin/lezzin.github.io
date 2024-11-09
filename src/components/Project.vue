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

            <button type="button" class="btn success icon" @click="$emit('openDetails', props.project)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye"
                    viewBox="0 0 16 16">
                    <path
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                </svg>

                <span>Visualizar detalhes</span>
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
</style>