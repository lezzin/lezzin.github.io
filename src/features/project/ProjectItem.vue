<script setup lang="ts">
import { inject } from 'vue'
import { ArrowUpRight, Code2 } from 'lucide-vue-next'
import type { Project } from '../../types/project'
import { projectModalKey } from '../../types/project-modal'
import { formatText } from '../../utils/markdown'

const props = defineProps<{
  project: Project
  index: number
}>()

const projectModal = inject(projectModalKey)

const openProject = () => {
  projectModal?.openProject(props.project, props.index)
}
</script>

<template>
  <button
    type="button"
    class="group flex w-full flex-col rounded-xl border border-slate-200 bg-white p-5 text-left transition-all duration-200 hover:border-emerald-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-emerald-700 dark:focus-visible:ring-offset-slate-900"
    :aria-labelledby="`project-card-heading-${index}`"
    @click="openProject"
  >
    <div class="mb-3 flex w-full items-start justify-between gap-3">
      <h3
        :id="`project-card-heading-${index}`"
        class="text-sm font-bold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-slate-100 dark:group-hover:text-emerald-400"
      >
        {{ project.name }}
      </h3>

      <ArrowUpRight
        :size="16"
        aria-hidden="true"
        class="shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-500"
      />
    </div>

    <p
      class="mb-4 w-full text-xs leading-relaxed text-slate-500 dark:text-slate-400"
      v-html="formatText(project.summary)"
    />

    <div class="mb-3 w-full">
      <span
        class="text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400"
      >
        Problema
      </span>

      <p
        class="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300"
        v-html="formatText(project.problem)"
      />
    </div>

    <div class="mb-4 w-full">
      <span
        class="text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400"
      >
        Resultado
      </span>

      <p
        class="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300"
        v-html="formatText(project.outcome)"
      />
    </div>

    <div class="mt-auto w-full border-t border-slate-100 pt-3 dark:border-slate-700/70">
      <div class="flex flex-wrap items-center gap-1.5">
        <Code2 :size="13" aria-hidden="true" class="shrink-0 text-emerald-500" />

        <span
          v-for="(technology, techIdx) in project.technologies"
          :key="technology"
          class="inline-flex rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-600 dark:bg-slate-700/60 dark:text-slate-300"
          :class="{
            'max-sm:hidden': techIdx >= 3,
            'hidden sm:inline-flex md:hidden': techIdx >= 5,
          }"
        >
          {{ technology }}
        </span>

        <span v-if="project.technologies.length > 3" class="text-[10px] text-slate-400 sm:hidden">
          +{{ project.technologies.length - 3 }}
        </span>
        <span
          v-if="project.technologies.length > 5"
          class="hidden text-[10px] text-slate-400 sm:inline-block"
        >
          +{{ project.technologies.length - 5 }}
        </span>
      </div>
    </div>
  </button>
</template>
