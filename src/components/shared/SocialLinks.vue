<script setup>
import { iconUrl } from '../../utils/urlUtils';

const props = defineProps({
    isDark: {
        type: Boolean,
        default: true
    }
})
</script>

<template>
    <nav class="social-media">
        <a :class="`btn ${props.isDark ? 'dark-secondary' : 'dark-tertiary'}`"
            href="https://www.linkedin.com/in/leandro-adrian/" target="_blank" rel="noopener noreferrer"
            title="Acessar Linkedin">
            <img :src="iconUrl('linkedin.svg', 'media')" alt="Logo do linkedin" width="16" height="16">
            <span class="desktop-only">LinkedIn</span>
        </a>
        <a :class="`btn ${props.isDark ? 'dark-secondary' : 'dark-tertiary'}`"
            href="https://www.instagram.com/leandroadrian_/" target="_blank" rel="noopener noreferrer"
            title="Acessar Instagram">
            <img :src="iconUrl('instagram.svg', 'media')" alt="Logo do instagram" width="16" height="16">
            <span class="desktop-only">Instagram</span>
        </a>
        <a :class="`btn ${props.isDark ? 'dark-secondary' : 'dark-tertiary'}`" href="https://github.com/lezzin/"
            target="_blank" rel="noopener noreferrer" title="Acessar GitHub">
            <img :src="iconUrl('github.svg', 'media')" alt="Logo do github" width="16" height="16">
            <span class="desktop-only">GitHub</span>
        </a>
    </nav>
</template>

<style scoped>
.social-media {
    margin-top: auto;
}

.social-media .btn {
    padding: .6rem .7rem;
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
</style>