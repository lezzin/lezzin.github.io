<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useLanguage } from '../../../composables/useLanguage'
import { experiencesTranslations } from '../../../i18n/experiences'
import { uiTranslations } from '../../../i18n/ui'
import ExperienceItem from './ExperienceItem.vue'
import { Briefcase } from 'lucide-vue-next'
import { STICKY_PALETTE } from '../../../constants/sticky-palette.ts'
import type { Project } from '../../../types/project.ts'
import ProjectItemModal from '../../project/ProjectItemModal.vue'

const { language } = useLanguage()
const experiences = computed(() => experiencesTranslations[language.value])
const t = computed(() => uiTranslations[language.value])

const selectedProject = ref<Project | null>(null)
const selectedProjectIndex = ref(0)

const sticky = computed(
  () => STICKY_PALETTE[selectedProjectIndex.value % STICKY_PALETTE.length]!
)

const openProject = (project: Project) => {
  selectedProject.value = project
}

const closeProject = () => {
  selectedProject.value = null
  selectedProjectIndex.value = 0
}
</script>

<template>
  <section id="experience" class="scroll-mt-20">
    <div class="flex items-center gap-3 mb-6">
      <div class="flex items-center justify-center size-9 rounded-xl bg-emerald-600 dark:bg-emerald-400">
        <Briefcase :size="16" class="text-emerald-100 dark:text-emerald-900/40" />
      </div>

      <h2 class="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
        {{ t.experience.title }}
      </h2>
    </div>

    <div class="flex flex-col gap-6">
      <ExperienceItem v-for="(experience, index) in experiences" :key="index" :experience="experience" :index="index"
        @open-project="openProject" />
    </div>
  </section>

  <Teleport to="body">
    <ProjectItemModal :project="selectedProject" :sticky="sticky" :open="!!selectedProject" @close="closeProject" />
  </Teleport>
</template>
