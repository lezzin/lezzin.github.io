<script setup lang="ts">
defineProps<{
  skill: string
}>()
</script>

<template>
  <span
    class="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 rounded-rough-2 border-2 border-zinc-900 dark:border-zinc-100 cursor-default inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
  >
    {{ skill }}
  </span>
</template>
