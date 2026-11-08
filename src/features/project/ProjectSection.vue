<script setup lang="ts">
import { computed } from 'vue'
import { FolderCode } from 'lucide-vue-next'
import ProjectItem from './ProjectItem.vue'
import SectionTitle from '../../components/common/SectionTitle.vue'
import { experiences } from '../../constants/experiences.ts'

const projects = computed(() =>
  experiences.flatMap((experience) => experience.projects).filter((project) => project != undefined)
)
</script>

<template>
  <section id="projects" class="scroll-mt-20">
    <SectionTitle title="Projetos" :icon="FolderCode" />

    <div class="grid md:grid-cols-2 gap-6">
      <ProjectItem
        v-for="(project, index) in projects"
        :key="`${project.name}-${index}`"
        :project="project"
        :index="index"
      />
    </div>
  </section>
</template>
