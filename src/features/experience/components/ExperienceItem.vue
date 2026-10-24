<script setup lang="ts">
import type { Experience } from '../../../types/experience'
import { formatText } from '../../../utils/markdown'
import { computed, ref } from 'vue'
import ProjectItem from '../../project/ProjectItem.vue'
import type { Project } from '../../../types/project.ts'
import ProjectItemModal from '../../project/ProjectItemModal.vue'
import { STICKY_PALETTE } from '../../../constants/sticky-palette.ts'
import { useLanguage } from '../../../composables/useLanguage'
import { uiTranslations } from '../../../i18n/ui'

defineProps<{
  experience: Experience
}>()

const { language } = useLanguage()
const t = computed(() => uiTranslations[language.value])

const selectedProjectIndex = ref(0)
const sticky = computed(
  () => STICKY_PALETTE[(selectedProjectIndex.value ?? 0) % STICKY_PALETTE.length]!
)

const selectedProject = ref<Project | null>(null)

const openProject = (project: Project, index: number) => {
  selectedProjectIndex.value = index
  selectedProject.value = project
}

const closeProject = () => {
  selectedProjectIndex.value = 0
  selectedProject.value = null
}
</script>

<template>
  <article class="relative pl-5 border-l-2 border-zinc-100 dark:border-zinc-800">
    <div class="absolute -left-px top-0 h-5 w-0.5 bg-green-500 dark:bg-green-400" />

    <header class="mb-4">
      <div class="flex justify-between items-start gap-4 flex-wrap">
        <h3 class="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {{ experience.title }}
        </h3>

        <time class="text-xs text-zinc-400 dark:text-zinc-500 tracking-wide flex-shrink-0 mt-0.5">
          {{ experience.period }}
        </time>
      </div>

      <p class="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
        {{ experience.company }}
      </p>
    </header>

    <p
      class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4"
      v-html="formatText(experience.description)"
    />

    <ul class="space-y-2 mb-4">
      <li
        v-for="(item, index) in experience.bulletPoints"
        :key="index"
        class="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400"
      >
        <span class="mt-2 size-1 rounded-full bg-zinc-300 dark:bg-zinc-600 flex-shrink-0" />
        <span class="leading-relaxed" v-html="formatText(item)" />
      </li>
    </ul>

    <div v-if="experience.projects.length" class="mt-6">
      <p
        class="text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-3"
      >
        {{ t.experience.projectsTitle }}
      </p>

      <div class="grid sm:grid-cols-2 gap-3">
        <ProjectItem
          v-for="(project, index) in experience.projects"
          :key="project.name"
          :project="project"
          :index="index"
          @open="() => openProject(project, index)"
        />
      </div>
    </div>
  </article>

  <Teleport to="body">
    <ProjectItemModal
      :project="selectedProject"
      :sticky="sticky"
      :open="!!selectedProject"
      @close="closeProject"
    />
  </Teleport>
</template>
