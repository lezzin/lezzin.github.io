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
      'relative overflow-hidden p-6 rounded-rough-1 border-2 transition-all duration-300',
      'hover:-translate-y-1 hover:rotate-0',
      rotation,
      stickyClass?.bg,
      stickyClass?.border,
    ]"
  >
    <div class="relative z-10">
      <div class="flex items-center gap-3 mb-5">
        <div
          :class="[
            'flex items-center justify-center size-10 border rounded-full',
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
            'px-3 py-1 border rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/40 dark:bg-black/10  backdrop-blur-sm transition-transform hover:-rotate-2',
            stickyClass?.border,
          ]"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </motion.div>
</template>
