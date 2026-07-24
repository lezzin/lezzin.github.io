<script setup lang="ts">
import { formatText } from '../../utils/markdown'
import type { Project } from '../../types/project'
import { computed, onBeforeUnmount, onMounted, watch } from 'vue'
import { CheckCircle2, X } from 'lucide-vue-next'
import type { StickyPaletteItem } from '../../types/sticky-palette'
import { useLanguage } from '../../composables/useLanguage'
import { uiTranslations } from '../../i18n/ui'

const props = defineProps<{
  open: boolean
  project: Project | null
  sticky: StickyPaletteItem
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const { language } = useLanguage()
const t = computed(() => uiTranslations[language.value])

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
  <Transition>
    <div
      v-if="open && project"
      class="fixed inset-0 z-50 bg-zinc-900/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      @click.self="close"
    >
      <div
        role="dialog"
        aria-modal="true"
        :aria-label="project.name"
        :class="[
          'relative w-full max-w-3xl max-h-[85vh] overflow-y-auto sticky-note p-6 md:p-10 rounded-rough border-2',
          sticky.bg,
          sticky.border,
        ]"
      >
        <button
          type="button"
          :aria-label="t.experience.modal.close"
          class="sticky top-0 float-right -mr-2 md:-mt-4 md:-mr-4 z-10 p-2 rounded-rough-circle bg-white/70 dark:bg-zinc-900/70 border-2 hover:bg-white dark:hover:bg-zinc-900 transition-colors"
          @click="close"
          :class="sticky.border"
        >
          <X :size="18" class="text-zinc-900 dark:text-zinc-100" />
        </button>

        <h3
          class="text-2xl md:text-3xl font-handwritten text-zinc-900 dark:text-zinc-100 tracking-tight mb-4"
        >
          {{ project.name }}
        </h3>

        <div class="flex flex-wrap gap-2 mb-8">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white/70 dark:bg-zinc-900/70 text-zinc-900 dark:text-zinc-100 rounded-rough border-2 border-zinc-900 dark:border-zinc-100"
          >
            {{ tech }}
          </span>
        </div>

        <div class="space-y-10 font-handwritten text-lg">
          <section>
            <h4 class="project-subtitle">{{ t.experience.modal.context }}</h4>
            <p class="project-text" v-html="formatText(project.context)" />
          </section>

          <section>
            <h4 class="project-subtitle">{{ t.experience.modal.importance }}</h4>
            <p class="project-text" v-html="formatText(project.importance)" />
          </section>

          <section>
            <h4 class="project-subtitle text-red-500 dark:text-red-400">{{ t.experience.modal.problem }}</h4>
            <p class="project-text" v-html="formatText(project.problem)" />
          </section>

          <section>
            <h4 class="project-subtitle text-green-600 dark:text-green-400">
              {{ t.experience.modal.decisions }}
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
            <h4 class="project-subtitle">{{ t.experience.modal.tradeoffs }}</h4>

            <div class="rough-line">
              <p class="project-text italic" v-html="formatText(project.tradeoffs)" />
            </div>
          </section>

          <footer
            class="rounded-rough p-6 bg-white/50 dark:bg-black/20 border-2 border-dashed border-green-700/40 dark:border-green-400/30"
          >
            <h4 class="project-subtitle text-green-700 dark:text-green-400">{{ t.experience.modal.outcome }}</h4>

            <p
              class="text-green-900 dark:text-green-50 font-bold text-lg leading-relaxed"
              v-html="formatText(project.outcome)"
            />
          </footer>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="postcss">
.project-subtitle {
  @apply text-sm font-semibold uppercase tracking-widest mb-2;
}
</style>
