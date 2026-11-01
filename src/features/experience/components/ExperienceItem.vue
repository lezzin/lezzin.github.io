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
import { Calendar, FolderOpen, ChevronDown } from 'lucide-vue-next'

const props = defineProps<{
  experience: Experience
  index?: number
}>()

const { language } = useLanguage()
const t = computed(() => uiTranslations[language.value])

const isCurrent = computed(() => {
  const period = props.experience.period.toLowerCase()
  return period.includes('atual') || period.includes('present') || period.includes('actualidad')
})

const selectedProjectIndex = ref(0)
const sticky = computed(
  () => STICKY_PALETTE[(selectedProjectIndex.value ?? 0) % STICKY_PALETTE.length]!
)

const selectedProject = ref<Project | null>(null)
const showAllBullets = ref(false)

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
  <article
    class="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-700">
    <div class="h-1.5 bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500" />

    <div class="p-6 md:p-8">
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
        <div>
          <div class="flex items-center gap-2 flex-wrap mb-1">
            <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
              {{ experience.title }}
            </h3>
            <span
              v-if="isCurrent"
              class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
            >
              <span class="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {{ language === 'pt' ? 'Atual' : language === 'es' ? 'Actual' : 'Current' }}
            </span>
          </div>

          <p class="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
            {{ experience.company }}
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-2 sm:flex-col sm:items-end sm:text-right">
          <span
            class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-3 py-1 rounded-full whitespace-nowrap">
            <Calendar :size="12" class="text-emerald-500" />
            {{ experience.period }}
          </span>
        </div>
      </div>

      <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5"
        v-html="formatText(experience.description)" />

      <div class="mb-5">
        <ul class="space-y-2.5">
          <li v-for="(item, i) in (showAllBullets ? experience.bulletPoints : experience.bulletPoints.slice(0, 3))"
            :key="i" class="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
            <span class="mt-[7px] size-1.5 rounded-full bg-emerald-400 dark:bg-emerald-500 flex-shrink-0" />
            <span class="leading-relaxed" v-html="formatText(item)" />
          </li>
        </ul>

        <button v-if="experience.bulletPoints.length > 3" @click="showAllBullets = !showAllBullets"
          class="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">
          <ChevronDown :size="14" class="transition-transform duration-200" :class="{ 'rotate-180': showAllBullets }" />
          {{ showAllBullets ? (language === 'pt' ? 'Ver menos' : language === 'es' ? 'Ver menos' : 'Show less') : (language === 'pt' ? `Ver mais ${experience.bulletPoints.length - 3} pontos` : language === 'es' ? `Ver más ${experience.bulletPoints.length - 3} puntos` : `Show ${experience.bulletPoints.length - 3} more`) }}
        </button>
      </div>

      <div v-if="experience.projects.length">
        <div class="flex items-center gap-2 mb-3">
          <FolderOpen :size="13" class="text-emerald-500 dark:text-emerald-400" />
          <p class="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            {{ t.experience.projectsTitle }}
          </p>
        </div>

        <div class="grid sm:grid-cols-2 gap-3">
          <ProjectItem v-for="(project, i) in experience.projects" :key="project.name" :project="project" :index="i"
            @open="() => openProject(project, i)" />
        </div>
      </div>
    </div>
  </article>

  <Teleport to="body">
    <ProjectItemModal :project="selectedProject" :sticky="sticky" :open="!!selectedProject" @close="closeProject" />
  </Teleport>
</template>
