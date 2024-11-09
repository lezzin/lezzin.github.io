<script setup>
import { ref } from 'vue';
import { imageUrl } from '../../utils/imageUtils';

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
    <aside class="modal">
        <div class="modal__dialog">
            <header class="modal__header">
                <h3 class="modal__title">{{ project.name }}</h3>
                <button @click="emit('close')" class="btn" title="Fechar detalhes">X</button>
            </header>

            <div class="modal__body">
                <div class="btn-group">
                    <a class="btn success" role="button" :href="props.project.deployUrl" target="_blank"
                        rel="noopener noreferrer" title="Acessar deploy do projeto" v-if="props.project.deployUrl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-link-45deg" viewBox="0 0 16 16">
                            <path
                                d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                            <path
                                d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                        </svg>
                        Visualizar projeto
                    </a>
                    <a class="btn dark-quaternary" role="button" :href="props.project.codeUrl" target="_blank"
                        rel="noopener noreferrer" title="Acessar código do projeto no GitHub"
                        v-if="props.project.codeUrl">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="16" height="16"
                            fill="currentColor">
                            <path
                                d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                        </svg>
                        Código-fonte
                    </a>
                    <a class="btn dark-quaternary" role="button" :href="props.project.docsUrl" target="_blank"
                        rel="noopener noreferrer" title="Acessar documentação do projeto no Drive"
                        v-if="props.project.docsUrl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-file-code" viewBox="0 0 16 16">
                            <path
                                d="M6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708zm2.708 0a.5.5 0 1 0-.708.708L10.293 8 8.646 9.646a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708z" />
                            <path
                                d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
                        </svg>
                        Documentação
                    </a>
                </div>

                <div class="details">
                    <div class="details__content" v-html="project.detailedDescription"></div>

                    <p class="details__skills">
                        <span>Habilidades utilizadas:</span>
                        <span class="skills__badge" v-for="skill in props.project.skills">{{ skill }}</span>
                    </p>
                </div>

                <p class="helper-text">* clique na imagem para poder visualizá-la</p>

                <div class="project__images" v-if="props.project.imageDetails">
                    <figure v-for="image in props.project.imageDetails" @click="viewImage(image)">
                        <img :src="imageUrl(image.src, 'details')" width="720" alt="Pré-visualização do projeto"
                            loading="lazy">
                        <figcaption>Legenda: {{ image.label }}</figcaption>
                    </figure>
                </div>
            </div>
        </div>

        <Teleport to="#preview">
            <div class="preview" v-if="selectedImage" @click.self="closeImageView">
                <button @click="closeImageView" class="btn preview__close">X</button>
                <img :src="imageUrl(selectedImage.src, 'details')" :alt="selectedImage.label">
            </div>
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
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
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

.skills {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 1.4rem;
    gap: 0.5rem;
}

.skills__badge {
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
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;

    img {
        border-radius: var(--border-radius);
    }

    figcaption {
        margin-left: 0.5rem;
        color: var(--font-secondary-color);
        font-size: 1.2rem;
    }
}

.preview {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
}

.preview img {
    max-width: 90%;
    max-height: 90%;
    border-radius: var(--border-radius);
}

.preview__close {
    position: absolute;
    top: 2.5rem;
    right: 2.5rem;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1.6rem;
    cursor: pointer;
}
</style>
