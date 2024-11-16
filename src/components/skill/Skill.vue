<script setup>
import { iconUrl } from '../../utils/urlUtils';

const props = defineProps({
    skill: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div class="skill interval-medium" tabindex="0" :aria-label="skill.name">
        <img :src="iconUrl(`${skill.name}.svg`, 'skills')" class="skill-image" :alt="`Logo da tecnologia ${skill.name}`"
            width="88" height="88" loading="lazy">
        <p class="skill-name">{{ skill.name }}</p>
    </div>
</template>

<style scoped>
.skill {
    display: grid;
    place-items: center;
    padding: 1rem;
    border: 1px solid var(--border-color);
    background-color: var(--primary-background);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    border-radius: var(--border-radius);
    min-width: 148px;
    aspect-ratio: 1/1;
    cursor: default;
    transition: .6s ease;
}

.skill-image {
    transition: .6s ease;
}

.skill-image.rounded {
    border-radius: calc(var(--border-radius) / 2);
}

.skill-name {
    margin-top: 1rem;
    text-align: center;
    font-weight: 500;
}

.skill:hover,
.skill:focus,
.skill:focus-within {
    border-color: var(--primary-color);
    letter-spacing: 1px;
}

.skill:hover .skill-image,
.skill:focus .skill-image,
.skill:focus-within .skill-image {
    transform: rotate(3deg) scale(1.05);
}
</style>