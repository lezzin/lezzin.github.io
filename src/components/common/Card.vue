<script setup lang="ts">
defineProps<{
  title?: string
  image?: string
}>()
</script>

<template>
  <div
    class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
  >
    <slot name="image" />

    <div class="p-6 md:p-8">
      <h3
        v-if="title"
        class="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 leading-tight mb-5"
      >
        {{ title }}
      </h3>

      <slot />
    </div>
  </div>
</template>
