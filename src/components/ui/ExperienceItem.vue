<script setup lang="ts">
import type { Experience } from '../../data/experiences'
import { formatBold } from '../../helper/markdown'

defineProps<{
  experience: Experience
}>()
</script>

<template>
  <article class="group relative">
    <div class="grid md:grid-cols-[180px_1fr] gap-6 md:gap-10">

      <aside class="relative">
        <div class="md:sticky md:top-24">
          <time class="text-sm font-medium tracking-wide text-gray-500 dark:text-gray-400">
            {{ experience.period }}
          </time>
        </div>
      </aside>

      <div class="space-y-4">
        <header class="space-y-1">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {{ experience.title }}
          </h3>

          <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
            {{ experience.company }}
          </p>
        </header>

        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          {{ experience.description }}
        </p>

        <ul class="space-y-3">
          <li v-for="(item, index) in experience.bulletPoints" :key="index" class="flex items-start gap-3">
            <span class="mt-2 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />

            <p class="text-gray-700 dark:text-gray-300 leading-relaxed" v-html="formatBold(item)" />
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>