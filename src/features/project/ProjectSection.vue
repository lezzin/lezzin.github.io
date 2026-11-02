<script setup lang="ts">
import { computed } from 'vue'
import { FolderCode } from 'lucide-vue-next'
import { useLanguage } from '../../composables/useLanguage'
import { experiencesTranslations } from '../../i18n/experiences'
import { uiTranslations } from '../../i18n/ui'
import ProjectItem from './ProjectItem.vue'
import SectionTitle from '../../components/common/SectionTitle.vue'

const { language } = useLanguage()
const projects = computed(() =>
  experiencesTranslations[language.value].flatMap((experience) => experience.projects)
)
const t = computed(() => uiTranslations[language.value])
</script>

<template>
  <section id="projects" class="scroll-mt-20">
    <SectionTitle :title="t.projects.title" :icon="FolderCode" />

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
