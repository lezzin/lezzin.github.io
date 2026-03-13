<script setup lang="ts">
import ContactSection from './features/contact/components/ContactSection.vue'
import ExperienceSection from './features/experience/components/ExperienceSection.vue'
import HeroSection from './features/hero/components/HeroSection.vue'
import ProjectsSection from './features/projects/components/ProjectsSection.vue'
import SkillsSection from './features/skills/components/SkillsSection.vue'
import PrimaryLayout from './components/layout/PrimaryLayout.vue'
</script>

<template>
  <PrimaryLayout>
    <HeroSection />
    <ExperienceSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </PrimaryLayout>
</template>
