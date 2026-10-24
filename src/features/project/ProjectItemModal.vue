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
      class="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4 md:p-8"
      @click.self="close"
    >
      <div
        role="dialog"
        aria-modal="true"
        :aria-label="project.name"
        class="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-xl"
      >
        <!-- Modal header -->
        <div
          class="sticky top-0 flex items-center justify-between px-6 py-4 bg-white dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800 z-10"
        >
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-zinc-100 pr-4">
            {{ project.name }}
          </h3>

          <button
            type="button"
            :aria-label="t.experience.modal.close"
            class="flex items-center justify-center size-8 rounded-md text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex-shrink-0"
            @click="close"
          >
            <X :size="16" />
          </button>
        </div>

        <!-- Modal body -->
        <div class="px-6 py-5 space-y-6">
          <!-- Technologies -->
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="px-2 py-0.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded"
            >
              {{ tech }}
            </span>
          </div>

          <section>
            <h4 class="modal-label">{{ t.experience.modal.context }}</h4>
            <p class="modal-text" v-html="formatText(project.context)" />
          </section>

          <section>
            <h4 class="modal-label">{{ t.experience.modal.importance }}</h4>
            <p class="modal-text" v-html="formatText(project.importance)" />
          </section>

          <section>
            <h4 class="modal-label">{{ t.experience.modal.problem }}</h4>
            <p class="modal-text" v-html="formatText(project.problem)" />
          </section>

          <section>
            <h4 class="modal-label text-green-700 dark:text-green-400">
              {{ t.experience.modal.decisions }}
            </h4>
            <ul class="space-y-2">
              <li
                v-for="(decision, index) in project.decisions"
                :key="index"
                class="flex gap-2.5 items-start"
              >
                <CheckCircle2 :size="14" class="text-green-500 mt-0.5 flex-shrink-0" />
                <span class="modal-text" v-html="formatText(decision)" />
              </li>
            </ul>
          </section>

          <section>
            <h4 class="modal-label">{{ t.experience.modal.tradeoffs }}</h4>
            <p class="modal-text italic" v-html="formatText(project.tradeoffs)" />
          </section>

          <section
            class="rounded-lg p-4 bg-green-50 dark:bg-green-950/30 border border-green-100 dark:border-green-900/40"
          >
            <h4 class="modal-label text-green-700 dark:text-green-400">
              {{ t.experience.modal.outcome }}
            </h4>
            <p
              class="text-sm font-medium text-green-800 dark:text-green-200 leading-relaxed"
              v-html="formatText(project.outcome)"
            />
          </section>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="postcss">
.modal-label {
  @apply text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2;
}

.modal-text {
  @apply text-sm leading-relaxed text-zinc-600 dark:text-zinc-400;
}
</style>
