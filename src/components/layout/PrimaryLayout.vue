<script setup lang="ts">
import Header from './Header.vue'

const footerText = `© ${new Date().getFullYear().toString()} — Feito com Vue.js e Tailwind CSS`
const containerClass = 'max-w-5xl mx-auto px-4 sm:px-6 md:px-8'
</script>

<template>
  <div
    class="relative min-h-screen bg-slate-50 dark:bg-slate-950 selection:bg-emerald-100 dark:selection:bg-emerald-900/60"
  >
    <Header :container-class="containerClass" />

    <main :class="[containerClass, 'pt-28 pb-24 space-y-6']">
      <slot />
    </main>

    <footer class="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div :class="[containerClass, 'py-6']">
        <div>
          <p class="font-handwritten text-xl mb-0.5 text-slate-900 dark:text-slate-100">
            Leandro Adrian da Silva
          </p>
          <p class="text-xs text-slate-600 dark:text-slate-400 tracking-wide">
            {{ footerText }}
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
