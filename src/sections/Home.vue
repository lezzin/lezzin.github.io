<script setup>
import { iconUrl } from '../utils/urlUtils';
</script>

<template>
    <section id="home-section" class="delay-small overlay overlay--1">
        <div class="container">
            <div class="home-informations interval-small">
                <p class="interval-small">Olá! sou o Leandro,</p>
                <h1 class="interval-small">Desenvolvedor Full Stack</h1>
                <h3 class="interval-small">com paixão por tecnologia e inovação</h3>

                <div class="btn-group delay-medium">
                    <a href="#skills-section" class="btn out-white interval-small"
                        title="Ir para as habilidades">Habilidades</a>
                    <a href="#projects-section" class="btn white interval-small"
                        title="Ir para os projetos">Projetos</a>
                </div>
            </div>

            <img class="interval-medium" :src="iconUrl('loader.svg')" alt="Logo" width="480" height="480">
        </div>
    </section>
</template>

<style scoped>
section {
    padding-top: 5vh;

    &.overlay::before {
        background-size: 60%;
        background-position: left top;

        @media(max-width: 768px) {
            background-size: 100%;
        }
    }
}

.container {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
    gap: 10rem;

    @media(max-width: 768px) {
        flex-wrap: wrap;
        gap: 2rem;

        img {
            max-width: 60%;
            z-index: 1;
        }

        .home-informations {
            text-align: center;
            order: 2;

            .btn-group {
                justify-content: center;
            }
        }
    }
}

img {
    border-radius: 50%;
    border: 6px solid #fff;
    background: var(--secondary-background);
}

.home-informations {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    text-align: left;

    p {
        font-size: 3.2rem;
    }

    h1 {
        font-size: 8rem;
        font-weight: 500;
        line-height: 1;
    }

    h3 {
        font-size: 2.4rem;
    }

    .btn-group {
        justify-content: flex-start;
        margin-top: 3rem;
        font-size: 1.8rem;
    }

    .btn-group>* {
        text-transform: uppercase;
        padding: 1rem 2rem;
        -webkit-backdrop-filter: blur(3px);
        backdrop-filter: blur(3px);
    }

    .btn-group>*:hover,
    .btn-group>*:focus {
        letter-spacing: 1px;
    }

    @media (width<=768px) {
        .container {
            margin-top: 8vh;
            min-height: 92vh;
        }

        h1 {
            font-size: 4.2rem;
        }

        h2 {
            font-size: 2.4rem;
        }

        .btn-group {
            font-size: 1.4rem;
        }
    }
}
</style>