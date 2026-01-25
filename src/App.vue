<script setup lang="ts">
import ContactSection from './components/sections/ContactSection.vue';
import ExperienceSection from './components/sections/ExperienceSection.vue';
import HeroSection from './components/sections/HeroSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';
import SkillsSection from './components/sections/SkillsSection.vue';
import ThemeToggle from './components/ui/ThemeToggle.vue';

const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="fixed right-2.5 top-2.5">
    <ThemeToggle />
  </div>

  <main class="min-h-screen dark:bg-slate-900">
    <div class="max-w-3xl mx-auto px-6 md:px-8">
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>

    <footer class="py-12 text-center text-sm dark:text-slate-400">
      <p>© {{ currentYear }} Leandro Adrian da Silva. Todos os direitos reservados.</p>
    </footer>
  </main>
</template>
