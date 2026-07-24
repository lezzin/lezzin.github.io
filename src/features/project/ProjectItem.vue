<script lang="ts" setup>
import { Plus } from 'lucide-vue-next'
import { computed } from 'vue'
import type { Project } from '../../types/project'
import { formatText } from '../../utils/markdown'
import Button from '../../components/common/Button.vue'
import { STICKY_PALETTE } from '../../constants/sticky-palette.ts'
import Tape from '../../components/common/Tape.vue'
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

const sticky = computed(() => STICKY_PALETTE[(props.index ?? 0) % STICKY_PALETTE.length]!)
</script>

<template>
  <article class="relative">
    <Tape :color="sticky.tape" />

    <div :class="['p-6 md:p-8 rounded-rough border-2', sticky.bg, sticky.border]">
      <h3
        class="text-xl md:text-3xl font-handwritten text-zinc-900 dark:text-zinc-100 tracking-tight mb-6"
      >
        {{ project.name }}
      </h3>

      <div class="space-y-6 mb-8 font-handwritten text-lg">
        <p class="project-text" v-html="formatText(project.context)" />
      </div>

      <Button @click="emit('open', project)" variant="link" class="ps-0">
        <div class="flex items-center">
          <Plus :size="18" class="mr-2" />
          {{ t.experience.readCaseStudy }}
        </div>
      </Button>
    </div>
  </article>
</template>
