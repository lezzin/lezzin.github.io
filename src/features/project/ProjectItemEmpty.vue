<script setup lang="ts">
import { Rocket } from 'lucide-vue-next'
</script>

<template>
  <div
    class="flex items-start gap-3 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-900/40 px-4 py-4"
  >
    <span
      class="flex items-center justify-center size-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex-shrink-0"
    >
      <Rocket :size="16" aria-hidden="true" />
    </span>

    <div>
      <p class="text-sm font-semibold text-slate-700 dark:text-slate-200">
        Nenhum projeto em destaque até o momento
      </p>
      <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
        Novos projetos serão adicionados aqui conforme forem entregues.
      </p>
    </div>
  </div>
</template>
