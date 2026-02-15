<script setup lang="ts">
import type { Experience } from '../../data/experiences'
import { formatBold } from '../../helper/markdown'

defineProps<{
  experience: Experience
}>()
</script>

<template>
  <article class="group">
    <div class="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
      <div class="relative">
        <div class="sticky top-24">
          <div class="text-sm text-gray-500 dark:text-gray-300">
            {{ experience.period }}
          </div>
        </div>
      </div>

      <div class="space-y-2">
        <h3 class="text-lg font-medium dark:text-gray-100">{{ experience.title }}</h3>
        <p class="text-gray-500 dark:text-gray-300 font-medium">{{ experience.company }}</p>
        <ul class="space-y-3 pt-3">
          <li
            v-for="(item, itemIndex) in experience.description"
            :key="itemIndex"
            class="flex gap-4 text-gray-700 dark:text-gray-300"
          >
            <span class="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-green-500"></span>
            <p class="leading-relaxed" v-html="formatBold(item)"></p>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>
