<script lang="ts" setup>
import { Plus } from 'lucide-vue-next'
import { computed } from 'vue'
import type { Project } from '../../types/project'
import { formatText } from '../../utils/markdown'
import Button from '../../components/common/Button.vue'
import { STICKY_PALETTE } from '../../constants/sticky-palette.ts'
import { useLanguage } from '../../composables/useLanguage'
import { uiTranslations } from '../../i18n/ui'
import { useTheme } from '../../composables/useTheme.ts'
import StripeBackground from '../../components/common/StripeBackground.vue'

const props = defineProps<{
  project: Project
  index?: number
}>()

const emit = defineEmits<{
  (e: 'open', project: Project): void
}>()

const { isDark } = useTheme()

const { language } = useLanguage()
const t = computed(() => uiTranslations[language.value])

const sticky = computed(() => STICKY_PALETTE[(props.index ?? 0) % STICKY_PALETTE.length]!)

const stripeColor = computed(() =>
  isDark() ? sticky.value.stripe.dark : sticky.value.stripe.light
)
</script>

<template>
  <article class="relative h-full">
    <div
      :class="[
        'relative h-full overflow-hidden p-6 md:p-8 rounded-rough border-2 shadow-md hover:shadow-lg transition-shadow',
        sticky.bg,
        sticky.border,
      ]"
    >
      <StripeBackground :color="stripeColor" />

      <div class="relative z-10">
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
    </div>
  </article>
</template>
