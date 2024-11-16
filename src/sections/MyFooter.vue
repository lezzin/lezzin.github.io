<script setup>
import SocialLinks from "../components/shared/SocialLinks.vue";
</script>

<template>
    <footer>
        <div class="container">
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
        </div>
    </footer>
</template>

<style scoped>
footer {
    color: var(--font-secondary-color);
    background: var(--primary-background);
    border-top: 1px solid var(--border-color);
}

.container {
    padding-block: 3rem;
    text-align: center;
}

footer .quote {
    margin: 3rem 0 1rem;
    font-size: 1.4rem;
    font-weight: 500;
}

footer .copyright {
    font-size: 1.2rem;
}
</style>