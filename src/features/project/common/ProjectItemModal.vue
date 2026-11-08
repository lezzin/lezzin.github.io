<script setup lang="ts">
import { onBeforeUnmount, onMounted, watch } from 'vue'
import { CheckCircle2, X } from 'lucide-vue-next'
import { formatText } from '../../../utils/markdown'
import type { Project } from '../../../types/project';

const props = defineProps<{
  open: boolean
  project: Project | null
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const close = () => emit('close')

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.open) close()
}

watch(
  () => props.open,
  (open) => {
    document.body.style.overflow = open ? 'hidden' : ''
  }
)

onMounted(() => window.addEventListener('keydown', onKeydown))

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Transition>
    <div v-if="open && project" class="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 md:p-8"
      @click.self="close">
      <div role="dialog" aria-modal="true" :aria-label="project.name"
        class="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl">
        <header
          class="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 rounded-t-2xl">
          <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100 pr-4">
            {{ project.name }}
          </h3>

          <button type="button" aria-label="Fechar"
            class="flex items-center justify-center size-8 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex-shrink-0"
            @click="close">
            <X :size="16" aria-hidden="true" />
          </button>
        </header>

        <div class="px-6 py-5 space-y-6">
          <div class="flex flex-wrap gap-1.5">
            <span v-for="tech in project.technologies" :key="tech"
              class="px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
              {{ tech }}
            </span>
          </div>

          <section>
            <h4 class="modal-label">Contexto</h4>
            <p class="modal-text" v-html="formatText(project.summary)" />
          </section>

          <section>
            <h4 class="modal-label">Desafio</h4>
            <p class="modal-text" v-html="formatText(project.problem)" />
          </section>

          <section>
            <h4 class="modal-label text-emerald-600 dark:text-emerald-400">Solução</h4>
            <ul class="space-y-2">
              <li v-for="(item, index) in project.solution" :key="index" class="flex gap-2.5 items-start">
                <CheckCircle2 :size="14" aria-hidden="true" class="text-emerald-500 mt-0.5 flex-shrink-0" />
                <span class="modal-text" v-html="formatText(item)" />
              </li>
            </ul>
          </section>

          <section
            class="rounded-xl p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40">
            <h4 class="modal-label text-emerald-700 dark:text-emerald-400">Resultado</h4>

            <dl v-if="project.metrics?.length" class="grid grid-cols-2 gap-3 mb-3">
              <div v-for="metric in project.metrics" :key="metric.label"
                class="rounded-lg bg-white/70 dark:bg-slate-900/60 px-3 py-2">
                <dd class="text-xl font-bold text-emerald-700 dark:text-emerald-300 leading-tight">
                  {{ metric.value }}
                </dd>
                <dt class="text-xs text-emerald-800/80 dark:text-emerald-200/70">
                  {{ metric.label }}
                </dt>
              </div>
            </dl>

            <p class="text-sm font-medium text-emerald-800 dark:text-emerald-200 leading-relaxed"
              v-html="formatText(project.outcome)" />
          </section>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="postcss">
.modal-label {
  @apply text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2;
}

.modal-text {
  @apply text-sm leading-relaxed text-slate-600 dark:text-slate-400;
}
</style>