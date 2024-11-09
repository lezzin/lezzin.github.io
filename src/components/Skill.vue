<script setup>
const props = defineProps({
    skill: {
        type: String,
        required: true
    }
});

const imageUrl = (skill) => {
    const lowerName = String(skill).toLowerCase();
    return `/icons/${lowerName}.svg`;
}
</script>

<template>
    <div class="skill interval-medium" tabindex="0" :aria-label="props.skill">
        <img :src="imageUrl(props.skill)" class="skill-image" :alt="`Logo da tecnologia ${props.skill}`" width="88"
            height="88" loading="lazy">
        <p class="skill-name">{{ props.skill }}</p>
    </div>
</template>

<style scoped>
.skill {
    display: grid;
    place-items: center;
    padding: 1rem;
    border: 1px solid var(--border-color);
    background-color: rgb(0 0 0 / 40%);
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