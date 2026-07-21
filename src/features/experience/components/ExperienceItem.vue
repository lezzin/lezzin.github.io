<script setup lang="ts">
import type { Experience } from '../../../types/experience'
import { formatText } from '../../../utils/markdown'
import { motion } from 'motion-v'
import { containerVariants, itemVariants } from '../../../constants/motion'
import { computed, ref } from 'vue'
import ProjectItem from '../../project/ProjectItem.vue'
import type { Project } from '../../../types/project.ts'
import ProjectItemModal from '../../project/ProjectItemModal.vue'
import { STICKY_PALETTE } from '../../../constants/sticky-palette.ts'

defineProps<{
  experience: Experience
}>()

const selectedProjectIndex = ref(0)
const sticky = computed(
  () => STICKY_PALETTE[(selectedProjectIndex.value ?? 0) % STICKY_PALETTE.length]
)

const selectedProject = ref<Project | null>(null)

const openProject = (project: Project, index: number) => {
  selectedProjectIndex.value = index
  selectedProject.value = project
}

const closeProject = () => {
  selectedProjectIndex.value = 0
  selectedProject.value = null
}
</script>

<template>
  <motion.article
    :variants="containerVariants"
    class="group relative py-8"
    initial="hidden"
    while-in-view="visible"
  >
    <div class="space-y-4 max-w-3xl">
      <motion.header :variants="itemVariants">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
          {{ experience.title }}
        </h3>

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
      </motion.header>

      <motion.p
        class="text-gray-600 dark:text-gray-400 leading-relaxed text-lg"
        v-html="formatText(experience.description)"
        :variants="itemVariants"
      />

      <ul class="space-y-4 pt-2">
        <motion.li
          v-for="(item, index) in experience.bulletPoints"
          :key="index"
          class="flex items-start gap-4"
          :variants="itemVariants"
        >
          <span class="mt-2.5 size-2.5 rounded-rough bg-zinc-900 dark:bg-white flex-shrink-0" />

          <p class="text-gray-700 dark:text-zinc-300 leading-relaxed" v-html="formatText(item)" />
        </motion.li>
      </ul>
    </div>

    <div v-if="experience.projects.length" class="mt-8">
      <motion.h4
        class="text-xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-6"
        :variants="itemVariants"
      >
        Projetos desenvolvidos
      </motion.h4>

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <ProjectItem
          v-for="(project, index) in experience.projects"
          :key="project.name"
          :project="project"
          :index="index"
          @open="() => openProject(project, index)"
        />
      </div>
    </div>
  </motion.article>

  <Teleport to="body">
    <ProjectItemModal
      :project="selectedProject"
      :sticky="sticky"
      :open="!!selectedProject"
      @close="closeProject"
    />
  </Teleport>
</template>
