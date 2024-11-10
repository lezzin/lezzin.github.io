<script setup>
import { iconUrl } from '../../utils/urlUtils';
</script>

<template>
    <div class="loader">
        <img :src="iconUrl('loader.svg')" alt="Imagem do loader">
    </div>
</template>

<style scoped>
@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.3;
    }
}

.loader {
    position: fixed;
    inset: 0;
    z-index: 999;
    display: grid;
    place-items: center;
    background-color: var(--primary-background);
    transition: .6s ease;
    pointer-events: none;
}

.loader img {
    background-color: var(--tertiary-background);
    border-radius: 50%;
    width: 64px;
    animation: blink 1.2s infinite linear;
    aspect-ratio: 1;
}
</style>