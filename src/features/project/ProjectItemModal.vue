<script setup lang="ts">
import { AnimatePresence, motion } from 'motion-v'
import { formatText } from '../../utils/markdown'
import type { Project } from '../../types/project'
import { onBeforeUnmount, onMounted, watch } from 'vue'
import { X } from 'lucide-vue-next'
import type { StickyPaletteItem } from '../../types/sticky-palette'

const props = defineProps<{
  open: boolean
  project: Project | null
  sticky?: StickyPaletteItem
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const close = () => emit('close')

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.open) {
    emit('close')
  }
}

watch(
  () => props.open,
  (open) => {
    document.body.style.overflow = open ? 'hidden' : ''
  }
)

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <AnimatePresence>
    <motion.div
      v-if="open && project"
      key="backdrop"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :exit="{ opacity: 0 }"
      :transition="{ duration: 0.2 }"
      class="fixed inset-0 z-50 bg-zinc-900/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      @click.self="close"
    >
      <motion.div
        key="panel"
        :initial="{ opacity: 0, scale: 0.95, y: 12 }"
        :animate="{ opacity: 1, scale: 1, y: 0 }"
        :exit="{ opacity: 0, scale: 0.95, y: 12 }"
        :transition="{ duration: 0.25, ease: 'easeOut' }"
        role="dialog"
        aria-modal="true"
        :aria-label="project.name"
        :class="[
          'relative w-full max-w-3xl max-h-[85vh] overflow-y-auto sticky-note p-6 md:p-10 rounded-rough-1',
          sticky?.bg,
        ]"
      >
        <button
          type="button"
          aria-label="Fechar"
          class="sticky top-0 float-right -mr-2 md:-mt-4 md:-mr-4 z-10 p-2 rounded-full bg-white/70 dark:bg-zinc-900/70 border-2 border-zinc-900 dark:border-zinc-100 hover:bg-white dark:hover:bg-zinc-900 transition-colors"
          @click="close"
        >
          <X :size="18" class="text-zinc-900 dark:text-zinc-100" />
        </button>

        <h3
          class="text-2xl md:text-3xl font-handwritten text-zinc-900 dark:text-zinc-100 tracking-tight mb-2"
        >
          {{ project.name }}
        </h3>

        <div class="flex flex-wrap gap-2 mb-8">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white/70 dark:bg-zinc-900/70 text-zinc-900 dark:text-zinc-100 rounded-rough-2 border-2 border-zinc-900 dark:border-zinc-100"
          >
            {{ tech }}
          </span>
        </div>

        <div class="space-y-10 font-handwritten text-lg">
          <section>
            <h4 class="project-subtitle">Contexto</h4>
            <p class="project-text" v-html="formatText(project.context)" />
          </section>

          <section>
            <h4 class="project-subtitle">Impacto no Negócio</h4>
            <p class="project-text" v-html="formatText(project.importance)" />
          </section>

          <section>
            <h4
              class="text-xs font-bold text-red-500 dark:text-red-400 uppercase tracking-[0.15em] mb-3"
            >
              O Desafio Técnico
            </h4>
            <p class="project-text" v-html="formatText(project.problem)" />
          </section>

          <section>
            <h4
              class="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-[0.15em] mb-4"
            >
              Decisões de Engenharia
            </h4>
            <ul class="grid gap-4">
              <li
                v-for="(decision, index) in project.decisions"
                :key="index"
                class="project-text flex gap-3 items-start"
              >
                <CheckCircle2 :size="18" class="text-green-500 mt-1 flex-shrink-0" />
                <span v-html="formatText(decision)" />
              </li>
            </ul>
          </section>

          <section>
            <h4 class="project-subtitle">Análise de Trade-offs</h4>
            <div class="relative pl-6">
              <div
                class="absolute inset-y-0 left-0 w-1 bg-zinc-900/20 dark:bg-zinc-100/20 rounded-full"
              />
              <p class="project-text italic" v-html="formatText(project.tradeoffs)" />
            </div>
          </section>

          <footer
            class="rounded-rough-2 p-6 bg-white/50 dark:bg-black/20 border-2 border-dashed border-green-700/40 dark:border-green-400/30"
          >
            <h4
              class="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-widest mb-3"
            >
              Resultado Final
            </h4>
            <p
              class="text-green-900 dark:text-green-50 font-bold text-lg leading-relaxed"
              v-html="formatText(project.outcome)"
            />
          </footer>
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
</template>
