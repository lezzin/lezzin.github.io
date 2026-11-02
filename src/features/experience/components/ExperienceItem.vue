<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { Calendar, ChevronDown, FolderOpen } from 'lucide-vue-next'
import type { Experience } from '../../../types/experience'
import { projectModalKey } from '../../../types/project-modal'
import { useLanguage } from '../../../composables/useLanguage'
import { uiTranslations } from '../../../i18n/ui'
import { formatText } from '../../../utils/markdown'
import ProjectItem from './ProjectItem.vue'

const VISIBLE_BULLETS_COUNT = 3

const props = defineProps<{
  experience: Experience
  index?: number
}>()

const { language } = useLanguage()
const t = computed(() => uiTranslations[language.value])

const showAllBullets = ref(false)
const projectModal = inject(projectModalKey)

const visibleBullets = computed(() => {
  return showAllBullets.value
    ? props.experience.bulletPoints
    : props.experience.bulletPoints.slice(0, VISIBLE_BULLETS_COUNT)
})

const remainingBulletsCount = computed(() =>
  Math.max(0, props.experience.bulletPoints.length - VISIBLE_BULLETS_COUNT)
)

const toggleBulletsText = computed(() => {
  if (showAllBullets.value) {
    return language.value === 'en' ? 'Show less' : 'Ver menos'
  }
  const count = remainingBulletsCount.value
  if (language.value === 'en') return `Show ${count} more`
  if (language.value === 'es') return `Ver más ${count} puntos`
  return `Ver mais ${count} pontos`
})
</script>

<template>
  <article
    class="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-700"
  >
    <div class="h-1.5 bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500" />

    <div class="p-6 md:p-8">
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
        <div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-1">
            {{ experience.title }}
          </h3>

          <p class="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
            {{ experience.company }}
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-2 sm:flex-col sm:items-end sm:text-right">
          <span
            class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-3 py-1 rounded-full whitespace-nowrap"
          >
            <Calendar :size="12" aria-hidden="true" class="text-emerald-500" />
            {{ experience.period }}
          </span>
        </div>
      </div>

      <p
        class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5"
        v-html="formatText(experience.description)"
      />

      <div class="mb-5">
        <ul class="space-y-2.5">
          <li
            v-for="(item, i) in visibleBullets"
            :key="i"
            class="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400"
          >
            <span
              class="mt-[7px] size-1.5 rounded-full bg-emerald-400 dark:bg-emerald-500 flex-shrink-0"
            />
            <span class="leading-relaxed" v-html="formatText(item)" />
          </li>
        </ul>

        <button
          v-if="remainingBulletsCount > 0"
          type="button"
          @click="showAllBullets = !showAllBullets"
          class="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
        >
          <ChevronDown
            :size="14"
            aria-hidden="true"
            class="transition-transform duration-200"
            :class="{ 'rotate-180': showAllBullets }"
          />
          {{ toggleBulletsText }}
        </button>
      </div>

      <div v-if="experience.projects.length">
        <div class="flex items-center gap-2 mb-3">
          <FolderOpen
            :size="13"
            aria-hidden="true"
            class="text-emerald-500 dark:text-emerald-400"
          />
          <p
            class="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400"
          >
            {{ t.experience.projectsTitle }}
          </p>
        </div>

        <div class="grid sm:grid-cols-2 gap-3">
          <ProjectItem
            v-for="(project, i) in experience.projects"
            :key="project.name"
            :project="project"
            :index="i"
            @open="projectModal?.openProject(project, i)"
          />
        </div>
      </div>
    </div>
  </article>
</template>
