<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue'
import LanguageToggle from './LanguageToggle.vue'
import NavItems from './NavItems.vue'

defineProps<{
  containerClass: string
}>()
</script>

<template>
  <header
    class="fixed left-0 right-0 z-40 bg-white dark:bg-slate-950 border-b border-slate-200/70 dark:border-slate-800/70 transition-all duration-200"
  >
    <div :class="[containerClass, 'w-full flex items-center justify-between py-3.5']">
      <a
        href="#"
        class="font-handwritten text-2xl tracking-tight text-slate-900 dark:text-slate-100"
      >
        L<span class="text-emerald-500 dark:text-emerald-400">.</span>Adrian
      </a>

      <NavItems class="hidden md:flex" />

      <div class="flex items-center gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>
