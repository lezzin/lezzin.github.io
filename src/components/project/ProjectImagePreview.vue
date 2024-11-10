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
    <div class="preview" v-if="props.image" @click.self="emit('close')">
        <button @click="emit('close')" class="btn preview__close">X</button>
        <img :src="imageUrl(props.image.src, 'details')" :alt="props.image.label">
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

.preview img {
    max-width: 90%;
    max-height: 90%;
    border-radius: var(--border-radius);
}

.preview__close {
    position: absolute;
    top: 2.5rem;
    right: 2.5rem;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1.6rem;
    cursor: pointer;
}
</style>