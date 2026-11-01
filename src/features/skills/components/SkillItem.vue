<script setup lang="ts">
import type { SkillCategory } from '../../../types/skill'

const accentColors = [
  'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
  'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300',
  'bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300',
  'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
  'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300',
  'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300',
]

const iconColors = [
  'text-emerald-500 dark:text-emerald-400',
  'text-violet-500 dark:text-violet-400',
  'text-sky-500 dark:text-sky-400',
  'text-amber-500 dark:text-amber-400',
  'text-teal-500 dark:text-teal-400',
  'text-rose-500 dark:text-rose-400',
]

const props = defineProps<{
  category: SkillCategory
  index: number
}>()

const badgeClass = accentColors[props.index % accentColors.length]
const iconClass = iconColors[props.index % iconColors.length]
</script>

<template>
  <div
    class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden space-y-3 p-6">
    <div class="flex items-center gap-2">
      <component :is="category.icon" :size="15" :class="iconClass" class="flex-shrink-0" />
      <h3 class="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
        {{ category.category }}
      </h3>
    </div>

    <div class="flex flex-wrap gap-1.5">
      <span v-for="skill in category.skills" :key="skill" :class="badgeClass"
        class="px-2.5 py-1 text-xs font-semibold rounded-full">
        {{ skill }}
      </span>
    </div>
  </div>
</template>
