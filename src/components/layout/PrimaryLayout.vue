<script setup lang="ts">
import Header from './Header.vue'

const currentYear = new Date().getFullYear()
</script>

<template>
  <Header />

  <main
    class="min-h-screen transition-colors duration-500 bg-white dark:bg-zinc-950 selection:bg-lime-100 dark:selection:bg-lime-900 pt-20"
  >
    <div class="max-w-4xl mx-auto px-6 md:px-8">
      <slot></slot>
    </div>
...
    <footer class="py-16 mt-10 border-t border-zinc-300 dark:border-zinc-800 text-center">
      <div class="max-w-3xl mx-auto px-6 text-gray-800 dark:text-gray-300">
        <p class="font-medium mb-2">Leandro Adrian da Silva</p>
        <p class="text-[10px] opacity-60 uppercase tracking-widest">
          © {{ currentYear }} — Feito com Vue.js & Tailwind CSS
        </p>
      </div>
    </footer>
  </main>
</template>
