<script setup lang="ts">
defineProps<{
  skill: string
}>()
</script>

<template>
  <span
    class="px-2.5 py-1 text-xs font-semibold bg-white dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 rounded-md shadow-sm transition-all duration-300 hover:border-green-500/50 dark:hover:border-green-400/50 hover:bg-green-50/50 dark:hover:bg-green-900/10 hover:translate-y-[-1px] cursor-default"
  >
    {{ skill }}
  </span>
</template>
