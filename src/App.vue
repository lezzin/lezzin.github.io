<script setup lang="ts">
import ExperienceSection from './features/experience/components/ExperienceSection.vue'
import HeroSection from './features/hero/components/HeroSection.vue'
import SkillsSection from './features/skills/components/SkillsSection.vue'

import PrimaryLayout from './components/layout/PrimaryLayout.vue'
import Divider from './components/common/Divider.vue'
import ProjectSection from './features/project/ProjectSection.vue'
import { computed, provide, ref } from 'vue'
import { STICKY_PALETTE } from './constants/sticky-palette.ts'
import type { Project } from './types/project.ts'
import { projectModalKey } from './types/project-modal.ts'
import ProjectItemModal from './features/project/common/ProjectItemModal.vue'

const sections = [
  HeroSection,
  ExperienceSection,
  SkillsSection,
  ProjectSection,
]

const selectedProject = ref<Project | null>(null)
const selectedProjectIndex = ref(0)

const sticky = computed(
  () => STICKY_PALETTE[selectedProjectIndex.value % STICKY_PALETTE.length]!
)

const openProject = (project: Project, index: number) => {
  selectedProject.value = project
  selectedProjectIndex.value = index
}

const closeProject = () => {
  selectedProject.value = null
  selectedProjectIndex.value = 0
}

provide(projectModalKey, { openProject })
</script>

<template>
  <PrimaryLayout>
    <template v-for="(section, index) in sections" :key="index">
      <component :is="section" />

      <Divider v-if="index < sections.length - 1" />
    </template>
  </PrimaryLayout>

  <Teleport to="body">
    <ProjectItemModal :project="selectedProject" :sticky="sticky" :open="!!selectedProject" @close="closeProject" />
  </Teleport>
</template>