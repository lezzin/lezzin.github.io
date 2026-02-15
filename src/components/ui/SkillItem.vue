<script setup lang="ts">
defineProps<{
  skill: string
}>()
</script>

<template>
  <span
    class="px-3 py-1.5 text-sm font-medium bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-300 border border-zinc-300 dark:border-zinc-800 rounded-lg shadow-sm transition-all duration-300 hover:border-green-500 dark:hover:border-green-400 hover:translate-y-[-2px] cursor-default"
  >
    {{ skill }}
  </span>
</template>
