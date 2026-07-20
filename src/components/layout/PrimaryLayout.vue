<script setup lang="ts">
import Divider from '../common/Divider.vue'
import Header from './Header.vue'

const currentYear = new Date().getFullYear()
</script>

<template>
  <div
    class="bg-white dark:bg-zinc-950 selection:bg-lime-100 dark:selection:bg-lime-900 bg-[radial-gradient(circle,_#eee_1px,_transparent_1px)] dark:bg-[radial-gradient(circle,_#111_1px,_transparent_1px)] [background-size:16px_16px] bg-fixed"
  >
    <Header />

    <div class="max-w-5xl mx-auto px-6 md:px-8">
      <main class="min-h-screen transition-colors duration-500 pt-20">
        <slot></slot>
      </main>

      <Divider />

      <footer class="pb-12 text-center">
        <div class="max-w-3xl mx-auto px-6 text-gray-800 dark:text-gray-300">
          <p class="font-handwritten text-xl mb-2">Leandro Adrian da Silva</p>
          <p class="text-[10px] font-sans opacity-60 uppercase tracking-widest">
            © {{ currentYear }} — Feito com Vue.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>
