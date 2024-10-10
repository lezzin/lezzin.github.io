<script setup>
</script>

<template>
    <section id="home-section">
        <img src="/images/home-background.webp" alt="Banner com meus projetos de fundo" class="home-banner">

        <div class="container">
            <h1 class="interval-small">Leandro Adrian da Silva</h1>
            <h2 class="interval-small">Desenvolvedor Full Stack</h2>

            <div class="btn-group delay-medium">
                <a href="#skills-section" class="btn out-white interval-small"
                    title="Ir para as habilidades">Habilidades</a>
                <a href="#projects-section" class="btn white interval-small" title="Ir para os projetos">Projetos</a>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    position: relative;
    background: transparent;
}

section .home-banner {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: opacity(40%);
    z-index: -2;
}

section .container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
}

@media (width <=768px) {
    section .container {
        margin-top: 8vh;
        min-height: 92vh;
    }
}

section h1 {
    font-size: 6rem;
}

section h2 {
    color: var(--font-secondary-color);
    font-size: 3.6rem;
}

section .btn-group {
    margin-top: 5rem;
    font-size: 1.8rem;
}

section .btn-group>* {
    text-transform: uppercase;
    padding: 1rem 2rem;
    backdrop-filter: blur(3px);
}

section .btn-group>*:hover,
section .btn-group>*:focus {
    letter-spacing: 1px;
}

@media (width<=768px) {
    section h1 {
        font-size: 4.2rem;
    }

    section h2 {
        font-size: 2.4rem;
    }

    section .btn-group {
        font-size: 1.4rem;
    }
}
</style>
