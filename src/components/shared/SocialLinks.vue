<script setup>
import { computed } from 'vue';
import { iconUrl } from '../../utils/urlUtils';

const props = defineProps({
    isDark: {
        type: Boolean,
        default: true
    }
});

const bgColor = computed(() => (props.isDark ? 'dark-secondary' : 'dark-tertiary'));
</script>

<template>
    <nav class="social-media">
        <a :class="`btn ${bgColor}`" href="https://www.linkedin.com/in/leandro-adrian/" target="_blank"
            rel="noopener noreferrer" title="Acessar Linkedin">
            <img :src="iconUrl('linkedin.svg', 'media')" alt="Logo do linkedin" width="16" height="16">
            <span class="desktop-only">LinkedIn</span>
        </a>
        <a :class="`btn ${bgColor}`" href="https://www.instagram.com/leandroadrian_/" target="_blank"
            rel="noopener noreferrer" title="Acessar Instagram">
            <img :src="iconUrl('instagram.svg', 'media')" alt="Logo do instagram" width="16" height="16">
            <span class="desktop-only">Instagram</span>
        </a>
        <a :class="`btn ${bgColor}`" href="https://github.com/lezzin/" target="_blank" rel="noopener noreferrer"
            title="Acessar GitHub">
            <img :src="iconUrl('github.svg', 'media')" alt="Logo do github" width="16" height="16">
            <span class="desktop-only">GitHub</span>
        </a>
    </nav>
</template>

<style scoped>
.social-media {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: var(--font-primary-color);
    font-size: 1.4rem;
    gap: .45rem;
}

.social-media .btn {
    padding: .5rem 1rem;
}

.social-media .btn img {
    transition: all .3s ease;
}

.social-media .btn:hover,
.social-media .btn:focus {
    letter-spacing: 1px;

    img {
        transform: scale(1.06);
    }
}

@media (width <=768px) {
    .desktop-only {
        display: none;
    }
}
</style>