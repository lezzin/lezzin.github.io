<script lang="ts" setup>
import { computed } from 'vue'
import type { Project } from '../../types/project'
import { formatText } from '../../utils/markdown'
import Button from '../../components/common/Button.vue'
import { useLanguage } from '../../composables/useLanguage'
import { uiTranslations } from '../../i18n/ui'

const props = defineProps<{
  project: Project
  index?: number
}>()

const emit = defineEmits<{
  (e: 'open', project: Project): void
}>()

const { language } = useLanguage()
const t = computed(() => uiTranslations[language.value])
</script>

<template>
  <article
    class="border border-zinc-100 dark:border-zinc-800 rounded-lg p-4 hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors cursor-pointer"
    @click="emit('open', props.project)"
    tabindex="0"
    role="button"
    :aria-label="props.project.name"
    @keydown.enter="emit('open', props.project)"
    @keydown.space.prevent="emit('open', props.project)"
  >
    <h3 class="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-1.5">
      {{ props.project.name }}
    </h3>

    <p
      class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3 line-clamp-2"
      v-html="formatText(props.project.context)"
    />

    <Button variant="link" class="text-xs h-auto" @click.stop="emit('open', props.project)">
      {{ t.experience.readCaseStudy }}
    </Button>
  </article>
</template>
