<script setup>
import { iconUrl } from '../../utils/urlUtils';
</script>

<template>
    <nav class="social-media">
        <a class="btn dark-secondary" href="https://www.linkedin.com/in/leandro-adrian/" target="_blank"
            rel="noopener noreferrer" title="Acessar Linkedin">
            <img :src="iconUrl('linkedin.svg', 'media')" alt="Logo do linkedin" width="16" height="16">
            <span class="desktop-only">LinkedIn</span>
        </a>
        <a class="btn dark-secondary" href="https://www.instagram.com/leandroadrian_/" target="_blank"
            rel="noopener noreferrer" title="Acessar Instagram">
            <img :src="iconUrl('instagram.svg', 'media')" alt="Logo do instagram" width="16" height="16">
            <span class="desktop-only">Instagram</span>
        </a>
        <a class="btn dark-secondary" href="https://github.com/lezzin/" target="_blank" rel="noopener noreferrer"
            title="Acessar GitHub">
            <img :src="iconUrl('github.svg', 'media')" alt="Logo do github" width="16" height="16">
            <span class="desktop-only">GitHub</span>
        </a>
    </nav>
</template>