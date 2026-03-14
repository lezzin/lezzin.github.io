<script lang="ts" setup>
import { ref } from 'vue'
import ProjectCard from './ProjectItem.vue'
import { projects } from '../../../constants/projects'
import Title from '../../../components/common/Title.vue'
import Subtitle from '../../../components/common/Subtitle.vue'
import Divider from '../../../components/common/Divider.vue'
import { motion } from 'motion-v'
import { containerVariants, itemVariants } from '../../../constants/motion'

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
    <motion.div :variants="containerVariants" initial="hidden" while-in-view="visible"
      :viewport="{ once: true, margin: '-100px' }">
      <motion.div :variants="itemVariants">
        <Title> Projetos & Estudos de Caso</Title>
      </motion.div>

      <motion.div :variants="itemVariants">
        <Subtitle>
          Projetos selecionados que demonstram minha abordagem para resolver desafios complexos de
          backend. Cada estudo de caso foca no raciocínio por trás das decisões técnicas, e não apenas
          nas ferramentas utilizadas.
        </Subtitle>
      </motion.div>

      <div class="space-y-6">
        <ProjectCard v-for="(project, index) in projects" :key="index" :project="project"
          :is-expanded="expandedProjectIndex === index" @toggle="toggleProject(index)" />
      </div>
    </motion.div>

    <Divider />
  </section>
</template>
