<script setup lang="ts">
import type { Experience } from '../../../types/experience'
import { formatText } from '../../../utils/markdown'
import { motion } from 'motion-v'
import { itemVariants } from '../../../constants/motion'
import { ref } from 'vue'
import ProjectItem from './ProjectItem.vue'

defineProps<{
  experience: Experience
}>()

const expandedProjectIndex = ref<string | null>(null)

const toggleProject = (id: string) => {
  expandedProjectIndex.value = expandedProjectIndex.value === id ? null : id
}
</script>

<template>
  <motion.article :variants="itemVariants" class="group relative py-8">
    <div class="grid md:grid-cols-[200px_1fr] gap-6 md:gap-10">
      <aside>
        <div class="md:sticky md:top-28">
          <time
            class="text-sm font-handwritten tracking-widest text-zinc-900 dark:text-zinc-100 uppercase"
          >
            {{ experience.period }}
          </time>
          <p
            class="text-xs font-bold text-gray-400 dark:text-zinc-500 mt-1 uppercase tracking-tighter"
          >
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

        <p
          class="text-gray-600 dark:text-gray-400 leading-relaxed text-lg"
          v-html="formatText(experience.description)"
        />

        <ul class="space-y-4 pt-2">
          <li
            v-for="(item, index) in experience.bulletPoints"
            :key="index"
            class="flex items-start gap-4"
          >
            <span class="mt-2.5 w-3 h-3 rounded-rough-1 bg-zinc-900 dark:bg-white flex-shrink-0" />

            <p class="text-gray-700 dark:text-zinc-300 leading-relaxed" v-html="formatText(item)" />
          </li>
        </ul>

        <div
          v-if="experience.projects.length"
          class="pt-8 mt-8 border-t border-zinc-200 dark:border-zinc-800"
        >
          <h4 class="text-xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-3">
            Projetos desenvolvidos
          </h4>

          <div class="space-y-4">
            <ProjectItem
              v-for="project in experience.projects"
              :key="project.name"
              :project="project"
              :is-expanded="expandedProjectIndex === project.name"
              @toggle="toggleProject(project.name)"
            />
          </div>
        </div>
      </div>
    </div>
  </motion.article>
</template>
