<script setup lang="ts">
import ContactSection from './components/sections/ContactSection.vue';
import ExperienceSection from './components/sections/ExperienceSection.vue';
import HeroSection from './components/sections/HeroSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';
import SkillsSection from './components/sections/SkillsSection.vue';
import PrimaryLayout from './layout/PrimaryLayout.vue';
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
