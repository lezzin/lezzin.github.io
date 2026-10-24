<script setup lang="ts">
import type { SkillCategory } from '../../../types/skill'

defineProps<{
  category: SkillCategory
  index: number
}>()
</script>

<template>
  <div class="space-y-3">
    <div class="flex items-center gap-2">
      <component
        :is="category.icon"
        :size="14"
        class="text-green-600 dark:text-green-400 flex-shrink-0"
      />
      <h3 class="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
        {{ category.category }}
      </h3>
    </div>

    <div class="flex flex-wrap gap-1.5">
      <span
        v-for="skill in category.skills"
        :key="skill"
        class="px-2.5 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800/80 rounded"
      >
        {{ skill }}
      </span>
    </div>
  </div>
</template>
