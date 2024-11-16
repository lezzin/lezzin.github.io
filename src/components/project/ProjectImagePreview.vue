<script setup>
import { imageUrl } from '../../utils/urlUtils';

const props = defineProps({
    image: {
        type: Object,
        default: null
    }
})

const emit = defineEmits(["close"]);

</script>

<template>
    <div class="preview" v-if="image" @click.self="emit('close')">
        <figure class="preview__content">
            <button type="button" @click="emit('close')" class="btn preview__close" title="Fechar modal">X</button>

            <img :src="imageUrl(image.src, 'details')" :alt="image.label">
            <figcaption>Legenda: {{ image.label }}</figcaption>
        </figure>
    </div>
</template>

<style scoped>
.preview {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
}

.preview__content {
    position: relative;
    display: flex;
    flex-direction: column;
    background: var(--primary-background);
    max-width: 1080px;
    width: 90%;
    border-radius: var(--border-radius);
    padding: 2rem;
}

.preview__content img {
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
}

.preview__content figcaption {
    margin-top: 0.5rem;
    font-size: 1.6rem;
}

.preview__close {
    position: absolute;
    top: 3rem;
    right: 3rem;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1.6rem;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }
}
</style>