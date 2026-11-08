<script setup lang="ts">
import type { Project } from '../../../types/project'
import { formatText } from '../../../utils/markdown'

const props = defineProps<{
  project: Project
  index?: number
}>()

const emit = defineEmits<{
  (e: 'open', project: Project): void
}>()

const openProject = () => {
  emit('open', props.project)
}
</script>

<template>
  <article
    class="group relative border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-sm bg-white dark:bg-slate-800/50 transition-all duration-150"
  >
    <h3
      class="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors"
    >
      {{ props.project.name }}
    </h3>

    <p
      class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3 line-clamp-2"
      v-html="formatText(props.project.summary)"
    />

    <button
      type="button"
      class="inline-flex items-center text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
      :aria-label="`Ler estudo de caso completo: ${props.project.name}`"
      @click="openProject"
    >
      <span class="absolute inset-0 rounded-xl cursor-pointer" aria-hidden="true"></span>
      Ler estudo de caso completo
    </button>
  </article>
</template>
