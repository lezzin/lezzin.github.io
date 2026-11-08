<script setup lang="ts">
import { navItems } from '../../constants/nav-items'
</script>

<template>
  <nav class="flex items-center gap-1" aria-label="Navegação principal">
    <a
      v-for="item in navItems"
      :key="item.href"
      :href="item.href"
      class="text-sm font-medium px-3 py-1.5 rounded-lg transition-colors duration-150 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
    >
      {{ item.name }}
    </a>
  </nav>
</template>
