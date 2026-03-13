<script setup lang="ts">
import type { Experience } from '../../data/experiences'
import { formatText } from '../../helper/markdown'

defineProps<{
  experience: Experience
}>()
</script>

<template>
  <article class="group relative py-8 border-b border-zinc-100 dark:border-zinc-900 last:border-0">
    <div class="grid md:grid-cols-[200px_1fr] gap-6 md:gap-10">

      <aside>
        <div class="md:sticky md:top-28">
          <time class="text-sm font-bold tracking-widest text-green-600 dark:text-green-500 uppercase">
            {{ experience.period }}
          </time>
          <p class="text-xs font-medium text-gray-400 dark:text-zinc-500 mt-1 uppercase tracking-tighter">
            {{ experience.company }}
          </p>
        </div>
      </aside>

      <div class="space-y-4">
        <header>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
            {{ experience.title }}
          </h3>
        </header>

        <p class="text-gray-600 dark:text-gray-400 leading-relaxed text-lg"
          v-html="formatText(experience.description)" />

        <ul class="space-y-4 pt-2">
          <li v-for="(item, index) in experience.bulletPoints" :key="index" class="flex items-start gap-4">
            <span
              class="mt-2.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />

            <p class="text-gray-700 dark:text-zinc-300 leading-relaxed" v-html="formatText(item)" />
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>