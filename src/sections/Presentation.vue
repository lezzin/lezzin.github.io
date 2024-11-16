<script setup>
import SocialLinks from "../components/shared/SocialLinks.vue";
import { imageUrl } from "../utils/urlUtils";
</script>

<template>
    <section id="presentation-section">
        <div class="container">
            <div class="presentation-container delay-medium">
                <img class="presentation-image interval-small" :src="imageUrl('profile.webp')"
                    alt="Minha foto de perfil" width="360" height="360" loading="lazy">

                <div class="presentation-texts delay-large">
                    <h3 class="section-title interval-small">Apresentação</h3>

                    <p class="interval-small">
                        Sou Leandro Adrian da Silva, mais conhecido como Lezzin.
                        <strong>Formado em Técnico em Informática e atualmente cursando Engenharia de Software</strong>,
                        tenho experiência com diversas tecnologias como
                        <strong>HTML, CSS, JavaScript, PHP e MySQL</strong>,
                        além de frameworks modernos como
                        <strong>Vue.js e CodeIgniter.</strong>
                    </p>

                    <p class="interval-small">
                        Minha trajetória combina <strong>técnica e criatividade</strong>, sempre com foco na
                        <strong>resolução de problemas</strong> e na
                        <strong>construção de soluções completas e eficientes</strong>, desde a concepção até a
                        implementação final. Gosto de explorar novas tecnologias e enfrentar desafios que me permitam
                        aprimorar minhas habilidades.
                    </p>

                    <p class="interval-small">
                        Vamos conversar e transformar suas ideias em realidade? Seja para colaborar como freelancer ou
                        para integrar uma equipe, estou pronto para fazer parte de novos projetos e criar algo incrível.
                    </p>
                    <SocialLinks />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    padding: 5vh 0;
    background: var(--primary-background);
    background: linear-gradient(180deg, var(--primary-background) 0%, var(--secondary-background) 100%);
}

section .container {
    padding: 0;
}

.presentation-container {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    margin: 0 auto;
    padding: 2rem;
    width: 100%;
    background: var(--tertiary-background);
    overflow: hidden;
    border-radius: var(--border-radius);
}

.presentation-image {
    border-radius: calc(var(--border-radius) / 2);
    filter: saturate(70%);
}

.presentation-texts {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1.5rem;
    margin: calc(var(--border-radius) / 2) 0;
}

.presentation-texts .section-title {
    text-align: left;
    font-size: 2.8rem;
    margin-bottom: 1rem;
}


@media (width <=768px) {
    .presentation-container {
        justify-content: center;
        flex-direction: column;
        padding-bottom: 4rem;
        width: 100%;
    }

    .presentation-texts {
        margin-top: 0;
    }
}
</style>