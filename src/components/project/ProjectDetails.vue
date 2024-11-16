<script setup>
import { ref } from 'vue';
import { imageUrl } from '../../utils/urlUtils';
import ProjectImagePreview from './ProjectImagePreview.vue';

const emit = defineEmits(["close"]);

const props = defineProps({
    project: {
        type: Object
    }
})

const selectedImage = ref(null);

const viewImage = (image) => {
    selectedImage.value = image;
}

const closeImageView = () => {
    selectedImage.value = null;
}
</script>

<template>
    <aside class="modal" @click.self="emit('close')">
        <div class="modal__dialog">
            <header class="modal__header">
                <h3 class="modal__title">{{ project.name }}</h3>
                <button @click="emit('close')" class="btn" title="Fechar detalhes">X</button>
            </header>

            <div class="modal__body">
                <div class="btn-group">
                    <a class="btn success" role="button" :href="project.deployUrl" target="_blank"
                        rel="noopener noreferrer" title="Acessar deploy do projeto" v-if="project.deployUrl">
                        <fa icon="eye" />
                        Visualizar projeto
                    </a>
                    <a class="btn dark-quaternary" role="button" :href="project.codeUrl" target="_blank"
                        rel="noopener noreferrer" title="Acessar código do projeto no GitHub" v-if="project.codeUrl">
                        <fa icon="code" />
                        Código-fonte
                    </a>
                </div>

                <div class="details">
                    <div class="details__content" v-html="project.detailedDescription"></div>

                    <p class="details__skills">
                        <span>Habilidades utilizadas:</span>
                        <span class="skill-badge" v-for="skill in project.skills">{{ skill }}</span>
                    </p>
                </div>

                <p class="helper-text">* clique na imagem para poder visualizá-la</p>

                <div class="project__images" v-if="project.imageDetails">
                    <figure v-for="image in project.imageDetails" @click="viewImage(image)">
                        <img :src="imageUrl(image.src, 'details')" alt="Pré-visualização do projeto" loading="lazy">
                        <figcaption>{{ image.label }}</figcaption>
                    </figure>
                </div>
            </div>
        </div>

        <Teleport to="#preview">
            <Transition>
                <ProjectImagePreview :image="selectedImage" @close="closeImageView" />
            </Transition>
        </Teleport>
    </aside>
</template>

<style scoped>
.helper-text {
    font-size: 1.4rem;
    color: var(--font-secondary-color);
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #333;
}

::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 50px;
}

.modal {
    display: grid;
    place-items: center;
    position: fixed;
    background-color: #00000099;
    color: var(--font-secondary-color);
    z-index: var(--header-index);
    inset: 0;
    font-size: 1.6rem;
    -webkit-backdrop-filter: blur(1px);
    backdrop-filter: blur(1px);
}

.modal__dialog {
    --__modal-padding: 1.5rem;

    display: grid;
    grid-template-rows: 10vh 80vh;
    background: var(--secondary-background);
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    color: var(--font-primary-color);
    box-shadow: 0 .5rem 1rem #00000026;
    max-width: 1080px;
    width: 90%;
}

.modal__header {
    background: var(--tertiary-background);
    padding: var(--__modal-padding);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
    gap: 2rem;
}

.modal__title {
    font-size: 2.4rem;
}

.modal__body {
    display: flex;
    flex-direction: column;
    padding: var(--__modal-padding) var(--__modal-padding) calc(var(--__modal-padding) * 2);
    gap: var(--__modal-padding);
    overflow-y: auto;
}

.details__skills {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 1.4rem;
    gap: 0.5rem;
}

.skill-badge {
    background: var(--tertiary-background);
    padding: .25rem .5rem;
    border-radius: var(--border-radius);
}

.btn-group {
    justify-content: flex-start;
    gap: 0.5rem;

    .btn {
        border-radius: calc(var(--border-radius) / 2);

        svg {
            transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
        }

        &:hover svg,
        &:focus svg {
            transform: rotate(20deg);
        }

        .btn {
            width: 100%;
        }
    }
}

.details {
    display: grid;
    gap: 2rem;
    border-bottom: 1px solid var(--border-color);
    border-top: 1px solid var(--border-color);
    padding: var(--__modal-padding) 0;
}

.details__content {
    display: flex;
    flex-direction: column;
    line-height: 150%;
    gap: 1rem;
}

.project__images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(clamp(150px, 30vw, 100%), 1fr));
    gap: 2rem;

    img {
        width: 100%;
        aspect-ratio: 16/9;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        cursor: zoom-in;
    }

    figcaption {
        margin-top: 0.25rem;
        margin-left: 0.5rem;
        color: var(--font-secondary-color);
        font-size: 1.2rem;
    }
}
</style>
