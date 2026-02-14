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
  <div class="fixed right-4 top-4 z-50">
    <ThemeToggle />
  </div>

  <main
    class="min-h-screen transition-colors duration-500 bg-white dark:bg-slate-900 selection:bg-blue-100 dark:selection:bg-blue-900">
    <div class="max-w-3xl mx-auto px-6 md:px-8">

      <HeroSection />

      <div class="space-y-4">
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>

    </div>

    <footer class="py-16 mt-10 border-t border-gray-100 dark:border-slate-800 text-center">
      <div class="max-w-3xl mx-auto px-6 text-gray-500 dark:text-slate-400">
        <p class="font-medium mb-2">Leandro Adrian da Silva</p>
        <p class="text-[10px] opacity-60 uppercase tracking-widest">
          © {{ currentYear }} — Feito com Vue.js & Tailwind CSS
        </p>
      </div>
    </footer>
  </main>
</template>

<style>
html {
  scroll-behavior: smooth;
}

.dark ::-webkit-scrollbar {
  width: 10px;
}

.dark ::-webkit-scrollbar-track {
  background: #0f172a;
}

.dark ::-webkit-scrollbar-thumb {
  background: #1e293b;
  border-radius: 5px;
  border: 2px solid #0f172a;
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: #334155;
}
</style>