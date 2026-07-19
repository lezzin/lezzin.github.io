<script setup lang="ts">
import ContactSection from './features/contact/components/ContactSection.vue'
import ExperienceSection from './features/experience/components/ExperienceSection.vue'
import HeroSection from './features/hero/components/HeroSection.vue'
import SkillsSection from './features/skills/components/SkillsSection.vue'
import PrimaryLayout from './components/layout/PrimaryLayout.vue'
import Divider from './components/common/Divider.vue'
</script>

<template>
  <PrimaryLayout>
    <HeroSection />

    <Divider />

    <ExperienceSection />

    <Divider />

    <SkillsSection />

    <Divider />

    <ContactSection />
  </PrimaryLayout>
</template>
