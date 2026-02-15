<script lang="ts" setup>
import ProjectCard from '../ui/ProjectItem.vue';
import projects from '../../data/projects';
import Title from '../ui/Title.vue';
import Subtitle from '../ui/Subtitle.vue';
import Divider from '../ui/Divider.vue';
</script>

<template>
    <section id="projects" class="py-20">
        <Title> Projetos & Estudos de Caso</Title>

        <Subtitle>
            Projetos selecionados que demonstram minha abordagem para resolver desafios
            complexos de backend. Cada estudo de caso foca no raciocínio por trás das decisões
            técnicas, e não apenas nas ferramentas utilizadas.
        </Subtitle>

        <div class="space-y-6">
            <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
        </div>

        <Divider />
    </section>
</template>
