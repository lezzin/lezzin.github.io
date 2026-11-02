<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  icon: Component
  title: string
}>()
</script>

<template>
  <div class="flex items-center gap-3 mb-6">
    <div
      class="flex items-center justify-center size-9 rounded-xl bg-emerald-100 dark:bg-emerald-900/40"
    >
      <component
        :is="icon"
        :size="16"
        aria-hidden="true"
        class="text-emerald-600 dark:text-emerald-400"
      />
    </div>

    <h2 class="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
      {{ title }}
    </h2>
  </div>
</template>
