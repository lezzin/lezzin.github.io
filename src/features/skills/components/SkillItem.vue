<script setup lang="ts">
import { computed } from 'vue'
import { motion } from 'motion-v'
import { itemVariants } from '../../../constants/motion'
import { STICKY_PALETTE } from '../../../constants/sticky-palette'
import type { SkillCategory } from '../../../types/skill'

const props = defineProps<{
  category: SkillCategory
  index: number
}>()

const stickyClass = STICKY_PALETTE[props.index % STICKY_PALETTE.length]

const rotation = computed(() => {
  return props.index % 2 === 0 ? '-rotate-1' : 'rotate-1'
})
</script>

<template>
  <motion.div
    :variants="itemVariants"
    :class="[
      'relative overflow-hidden p-6 border-2 rounded-rough',
      rotation,
      stickyClass?.bg,
      stickyClass?.border,
    ]"
  >
    <div class="relative z-10">
      <div class="flex items-center gap-3 mb-5">
        <div
          :class="[
            'flex items-center justify-center size-10 border rounded-rough-circle',
            stickyClass?.border,
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
            'px-3 py-1 border rounded-rough-pill text-xs font-bold uppercase tracking-wider bg-white/40 dark:bg-black/10 transition-transform hover:-rotate-2 cursor-default',
            stickyClass?.border,
          ]"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </motion.div>
</template>
