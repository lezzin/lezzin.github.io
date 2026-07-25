<script setup lang="ts">
import Tape from '../../../components/common/Tape.vue'
import { STICKY_PALETTE } from '../../../constants/sticky-palette'
import type { SkillCategory } from '../../../types/skill'

const props = defineProps<{
  category: SkillCategory
  index: number
}>()

const stickyClass = STICKY_PALETTE[props.index % STICKY_PALETTE.length]!
</script>

<template>
  <div
    :class="[
      'relative p-6 border-2 rounded-rough shadow-md hover:shadow-lg transition-shadow',
      stickyClass.bg,
      stickyClass.border,
    ]"
  >
    <Tape :color="stickyClass.tape" position="topLeft" size="sm" />
    <Tape :color="stickyClass.tape" position="bottomRight" size="sm" />

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
