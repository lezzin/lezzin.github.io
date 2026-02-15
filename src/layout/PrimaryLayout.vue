<script setup lang="ts">
import ThemeToggle from '../components/ui/ThemeToggle.vue'

const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="fixed right-4 top-4 z-50">
    <ThemeToggle />
  </div>

  <main
    class="min-h-screen transition-colors duration-500 bg-white dark:bg-slate-900 selection:bg-green-100 dark:selection:bg-green-900"
  >
    <div class="max-w-4xl mx-auto px-6 md:px-8">
      <slot></slot>
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
