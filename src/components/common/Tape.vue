<script setup lang="ts">
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { computed } from 'vue'

type Size = 'sm' | 'md' | 'lg'

type Position = 'topLeft' | 'topRight' | 'topCenter' | 'bottomLeft' | 'bottomRight' | 'bottomCenter'

const props = withDefaults(
  defineProps<{
    color: string
    size?: Size
    position?: Position
  }>(),
  {
    size: 'md',
    position: 'topCenter',
  }
)

const positions: Record<Position, string> = {
  topLeft: 'top-1 -left-4 -rotate-45',
  topCenter: '-top-3 left-1/2 -translate-x-1/2',
  topRight: 'top-1 -right-4 rotate-45',

  bottomLeft: 'bottom-1 -left-6 rotate-45',
  bottomCenter: '-bottom-3 left-1/2 -translate-x-1/2',
  bottomRight: 'bottom-1 -right-6 -rotate-45',
}

const sizes: Record<Size, string> = {
  md: 'w-16 h-6',
  sm: 'w-12 h-5',
  lg: 'w-24 h-6',
}

const classes = computed(() =>
  twMerge(clsx('absolute z-10', sizes[props.size], positions[props.position], props.color))
)
</script>

<template>
  <span :class="classes" />
</template>
