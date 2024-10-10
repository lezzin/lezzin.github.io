<script>
export default {
    props: ["project"],
    methods: {
        imageUrl(image) {
            return `/images/projects/${image}`;
        }
    }
}
</script>

<template>
    <article class="project interval-medium">
        <img class="project-image" :src="imageUrl(project.image)" width="480" height="270"
            alt="Pré-visualização do projeto" loading="lazy">
        <div class="project-details">
            <div>
                <h3 class="project-name">{{ project.name }}</h3>
                <p class="project-description">{{ project.description }}</p>
                <p class="project-skills">
                    <span class="badge" v-for="(skill, index) in project.skills">{{ skill }}</span>
                </p>
            </div>
            <div class="project-buttons">
                <a class="btn success full" role="button" :href="project.deployUrl" target="_blank"
                    rel="noopener noreferrer" title="Acessar deploy do projeto" v-if="project.deployUrl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-link-45deg" viewBox="0 0 16 16">
                        <path
                            d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                        <path
                            d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                    </svg>
                    Visualizar projeto
                </a>
                <a class="btn dark-quaternary" role="button" :href="project.codeUrl" target="_blank"
                    rel="noopener noreferrer" title="Acessar código do projeto no GitHub" v-if="project.codeUrl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="16" height="16"
                        fill="currentColor">
                        <path
                            d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                    </svg>
                    Código-fonte
                </a>
                <a class="btn dark-quaternary" role="button" :href="project.docsUrl" target="_blank"
                    rel="noopener noreferrer" title="Acessar documentação do projeto no Drive" v-if="project.docsUrl">
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
        </div>
    </article>
</template>

<style scoped>
.project {
    border-radius: var(--border-radius);
    overflow: hidden;
    border: 1px solid var(--border-color);
    background-color: var(--tertiary-background);
    transition: .6s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.project-details {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: 2rem;
    padding: 1rem;
}

.project-skills {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    font-size: 1.1rem;
}

.project-skills .badge {
    background-color: var(--secondary-background);
    padding: .25rem .5rem;
    border-radius: calc(var(--border-radius) / 3);
    transition: .6s ease;
}

.project-skills .badge:hover,
.project-skills .badge:focus {
    background-color: var(--primary-background);
}

.project-name {
    margin-bottom: 1rem;
}

.project-description {
    margin-bottom: 1.2rem;
}

.project-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    width: 100%;
}

.project-buttons .btn {
    flex-grow: 1;
    border-radius: calc(var(--border-radius) / 2);
}

.project-buttons .btn.full {
    width: 100%;
}

.project-buttons .btn svg {
    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
}

.project-buttons .btn:hover svg,
.project-buttons .btn:focus svg {
    transform: rotate(20deg);
}

.project:hover,
.project:focus,
.project:focus-within {
    border-color: var(--primary-color);
}
</style>