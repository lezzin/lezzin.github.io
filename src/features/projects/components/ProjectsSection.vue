<script lang="ts" setup>
import { ref } from 'vue'
import ProjectCard from './ProjectItem.vue'
import { projects } from '../../../constants/projects'
import Title from '../../../components/common/Title.vue'
import Subtitle from '../../../components/common/Subtitle.vue'
import Divider from '../../../components/common/Divider.vue'

const expandedProjectIndex = ref<number | null>(null)

const toggleProject = (index: number) => {
  if (expandedProjectIndex.value === index) {
    expandedProjectIndex.value = null
  } else {
    expandedProjectIndex.value = index
  }
}
</script>

<template>
  <section id="projects" class="py-20 scroll-mt-12">
    <Title> Projetos & Estudos de Caso</Title>

    <Subtitle>
      Projetos selecionados que demonstram minha abordagem para resolver desafios complexos de
      backend. Cada estudo de caso foca no raciocínio por trás das decisões técnicas, e não apenas
      nas ferramentas utilizadas.
    </Subtitle>

    <div class="space-y-6">
      <ProjectCard v-for="(project, index) in projects" :key="index" :project="project"
        :is-expanded="expandedProjectIndex === index" @toggle="toggleProject(index)" />
    </div>

    <Divider />
  </section>
</template>
