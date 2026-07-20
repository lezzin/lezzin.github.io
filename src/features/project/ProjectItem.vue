<script lang="ts" setup>
import { Plus } from 'lucide-vue-next'
import { computed } from 'vue'
import { motion } from 'motion-v'
import type { Project } from '../../types/project'
import { roughVariants } from '../../constants/motion'
import { formatText } from '../../utils/markdown'
import Button from '../../components/common/Button.vue'
import { STICKY_PALETTE } from '../../constants/sticky-palette.ts'

const props = defineProps<{
  project: Project
  index?: number
}>()

const emit = defineEmits<{
  (e: 'open', project: Project): void
}>()

const sticky = computed(() => STICKY_PALETTE[(props.index ?? 0) % STICKY_PALETTE.length])

const tilt = computed(() => {
  const angles = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2']
  return angles[(props.index ?? 0) % angles.length]
})
</script>

<template>
  <motion.article
    :variants="roughVariants"
    initial="hidden"
    animate="visible"
    while-hover="hover"
    :class="[
      'group relative origin-center transition-all duration-300',
      tilt,
      'hover:rotate-0 hover:scale-[1.02]',
    ]"
  >
    <span
      :class="[
        'absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 rotate-[-3deg] z-10',
        sticky?.tape,
        'shadow-sm',
      ]"
      style="clip-path: polygon(4% 0, 96% 0, 100% 100%, 0 100%)"
    />

    <div :class="['sticky-note p-6 md:p-8 rounded-rough-1 border-2', sticky?.bg, sticky?.border]">
      <h3
        class="text-xl md:text-3xl font-handwritten text-zinc-900 dark:text-zinc-100 tracking-tight mb-6"
      >
        {{ project.name }}
      </h3>

      <div class="space-y-6 mb-8 font-handwritten text-lg">
        <p class="project-text" v-html="formatText(project.context)" />
      </div>

      <Button @click="emit('open', project)" variant="ghost" class="w-full">
        <span class="flex gap-2 items-center">
          <Plus :size="18" class="transition-transform duration-300" />
          Ler estudo de caso completo
        </span>
      </Button>
    </div>
  </motion.article>
</template>
