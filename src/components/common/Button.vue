<script lang="ts" setup>
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { computed } from 'vue'

type Variant = 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link'
type Size = 'sm' | 'default' | 'lg' | 'icon'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    size?: Size
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
    asChild?: boolean
  }>(),
  {
    variant: 'default',
    size: 'default',
    type: 'button',
    disabled: false,
    asChild: false,
  }
)

const base = `
  relative
  inline-flex items-center justify-center
  text-sm font-medium
  rounded-md
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2
  disabled:opacity-50 disabled:pointer-events-none
  transition-colors duration-150
`

const variants: Record<Variant, string> = {
  default: `
    bg-zinc-900 text-zinc-100
    hover:bg-zinc-700
    dark:bg-zinc-100 dark:text-zinc-900
    dark:hover:bg-zinc-200
  `,
  secondary: `
    bg-zinc-100 text-zinc-900
    hover:bg-zinc-200
    dark:bg-zinc-800 dark:text-zinc-100
    dark:hover:bg-zinc-700
  `,
  outline: `
    border border-zinc-200 dark:border-zinc-700
    bg-transparent
    text-zinc-700 dark:text-zinc-300
    hover:bg-zinc-50 dark:hover:bg-zinc-800
    hover:text-zinc-900 dark:hover:text-zinc-100
  `,
  ghost: `
    bg-transparent
    text-zinc-700 dark:text-zinc-300
    hover:bg-zinc-100 dark:hover:bg-zinc-800
  `,
  destructive: `
    bg-red-600 text-white
    hover:bg-red-700
  `,
  link: `
    bg-transparent
    text-green-700 dark:text-green-400
    hover:underline underline-offset-4
    px-0
  `,
}

const sizes: Record<Size, string> = {
  sm: 'h-8 px-3 text-xs',
  default: 'h-9 px-4 py-2',
  lg: 'h-10 px-5',
  icon: 'size-9',
}

const classes = computed(() => twMerge(clsx(base, variants[props.variant], sizes[props.size])))
</script>

<template>
  <a v-if="asChild" :class="classes" v-bind="$attrs">
    <slot />
  </a>

  <button v-else :type="type" :disabled="disabled" :class="classes">
    <slot />
  </button>
</template>
