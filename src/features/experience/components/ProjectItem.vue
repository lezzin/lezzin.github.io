<script setup lang="ts">
import type { Project } from '../../../types/project'
import Button from '../../../components/common/Button.vue'
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
    class="group border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-sm bg-white dark:bg-slate-800/50 transition-all duration-150 cursor-pointer"
    tabindex="0" role="button" :aria-label="props.project.name" @click="openProject" @keydown.enter="openProject"
    @keydown.space.prevent="openProject">
    <h3
      class="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
      {{ props.project.name }}
    </h3>

    <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3 line-clamp-2"
      v-html="formatText(props.project.summary)" />

    <Button variant="link" class="text-xs h-auto" tabindex="-1" @click.stop="openProject">
      Ler estudo de caso completo
    </Button>
  </article>
</template>
