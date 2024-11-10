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
                        Olá, meu nome é Leandro Adrian da Silva, mais conhecido como Lezzin.
                    </p>

                    <p class="interval-small">
                        Formado em Técnico em Informática e cursando Engenharia de Software, sou desenvolvedor Full
                        Stack com experiência em HTML, CSS, JavaScript, PHP e MySQL. Trabalho em todas as etapas do
                        desenvolvimento de software, desde a ideia até a implementação.
                    </p>

                    <p class="interval-small">
                        Sempre buscando novos desafios, estou pronto para criar soluções inovadoras como freelancer
                        ou integrar uma equipe.
                    </p>

                    <p class="interval-small">
                        Vamos conversar e transformar suas ideias em realidade!
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
    align-items: stretch;
    gap: 2rem;
    margin: 0 auto;
    padding: 2rem;
    width: 90%;
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
    margin-bottom: 1.5rem;
}

.presentation-texts .social-media {
    margin-top: auto;
}

.presentation-texts .social-media .btn {
    padding: .6rem .7rem;
}

.presentation-texts .social-media .btn:hover,
.presentation-texts .social-media .btn:focus {
    transform: scale(1.08);
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