<script setup>
import SocialLinks from "../components/shared/SocialLinks.vue";
</script>

<template>
    <footer>
        <SocialLinks :isDark="false" />

        <blockquote>
            <p class="quote">
                “Programadores e artistas são os únicos profissionais que tem como hobby a própria profissão”
            </p>
        </blockquote>

        <p class="copyright">
            &copy; <span id="copyright-year">{{ new Date().getFullYear().toString() }}</span> -
            Leandro Adrian da Silva
        </p>
    </footer>
</template>

<style scoped>
footer {
    display: grid;
    text-align: center;
    padding: 3rem;
    color: var(--font-secondary-color);
    background: var(--primary-background);
    border-top: 1px solid var(--border-color);
}

footer .social-media {
    font-size: 1.6rem;
}

footer .quote {
    margin: 3rem 0 1rem;
    font-size: 1.4rem;
}

footer .copyright {
    font-size: 1rem;
}

@media (width <=768px) {
    footer .desktop-only {
        display: none;
    }
}
</style>