<script setup lang="ts">
import { computed } from 'vue'
import { STICKY_PALETTE } from '../../../constants/sticky-palette'
import type { SkillCategory } from '../../../types/skill'
import { useTheme } from '../../../composables/useTheme.ts'
import StripeBackground from '../../../components/common/StripeBackground.vue'

const props = defineProps<{
  category: SkillCategory
  index: number
}>()

const { isDark } = useTheme()

const stickyClass = STICKY_PALETTE[props.index % STICKY_PALETTE.length]!

const stripeColor = computed(() => (isDark() ? stickyClass.stripe.dark : stickyClass.stripe.light))
</script>

<template>
  <div
    :class="[
      'relative p-6 border-2 rounded-rough shadow-md hover:shadow-lg transition-shadow',
      stickyClass.bg,
      stickyClass.border,
    ]"
  >
    <StripeBackground :color="stripeColor" />

    <div class="relative z-10">
      <div class="flex items-center gap-3 mb-5">
        <div
          :class="[
            'flex items-center justify-center size-10 border rounded-rough-circle bg-white/40 dark:bg-black/10',
            stickyClass.border,
          ]"
        >
          <component :is="category.icon" :size="18" />
        </div>

        <h3 class="font-handwritten text-base uppercase tracking-[0.2em] font-bold">
          {{ category.category }}
        </h3>
      </div>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="skill in category.skills"
          :key="skill"
          :class="[
            'px-3 py-1 border rounded-rough-pill text-xs font-bold uppercase tracking-wider bg-white/40 dark:bg-black/10',
            stickyClass.border,
            stickyClass.bg,
          ]"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template>
