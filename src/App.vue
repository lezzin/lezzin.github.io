<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import HeroSection from './features/hero/components/HeroSection.vue'
import ExperienceSection from './features/experience/components/ExperienceSection.vue'
import SkillsSection from './features/skills/components/SkillsSection.vue'
import ProjectSection from './features/project/ProjectSection.vue'
import PrimaryLayout from './components/layout/PrimaryLayout.vue'
import Divider from './components/common/Divider.vue'
import ProjectItemModal from './features/project/common/ProjectItemModal.vue'
import { STICKY_PALETTE } from './constants/sticky-palette'
import type { Project } from './types/project'
import { projectModalKey } from './types/project-modal'
import ContactSection from './features/contact/components/ContactSection.vue'

const sections = [
  HeroSection,
  ExperienceSection,
  SkillsSection,
  ProjectSection,
  ContactSection,
] as const

const selectedProject = ref<Project | null>(null)
const selectedProjectIndex = ref(0)

const sticky = computed(() => STICKY_PALETTE[selectedProjectIndex.value % STICKY_PALETTE.length]!)

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
    <ProjectItemModal
      :project="selectedProject"
      :sticky="sticky"
      :open="!!selectedProject"
      @close="closeProject"
    />
  </Teleport>
</template>
