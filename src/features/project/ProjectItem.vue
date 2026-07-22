<script lang="ts" setup>
import { Plus } from 'lucide-vue-next'
import { computed } from 'vue'
import type { Project } from '../../types/project'
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
</script>

<template>
  <article class="relative">
    <span
      :class="[
        'absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 rotate-[-3deg] z-10',
        sticky?.tape,
        'shadow-sm',
      ]"
      style="clip-path: polygon(4% 0, 96% 0, 100% 100%, 0 100%)"
    />

    <div :class="['p-6 md:p-8 rounded-rough border-2', sticky?.bg, sticky?.border]">
      <h3
        class="text-xl md:text-3xl font-handwritten text-zinc-900 dark:text-zinc-100 tracking-tight mb-6"
      >
        {{ project.name }}
      </h3>

      <div class="space-y-6 mb-8 font-handwritten text-lg">
        <p class="project-text" v-html="formatText(project.context)" />
      </div>

      <Button @click="emit('open', project)" variant="link" as-child>
        <div class="flex items-center">
          <Plus :size="18" class="mr-2" />
          Ler estudo de caso completo
        </div>
      </Button>
    </div>
  </article>
</template>
