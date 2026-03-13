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

const base =
  'bg-white dark:bg-zinc-950 inline-flex items-center justify-center border-2 text-base font-bold transition-all ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 ' +
  'disabled:opacity-50 disabled:pointer-events-none active:scale-95'

const variants: Record<Variant, string> = {
  default:
    'bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 border-zinc-900 dark:border-zinc-100 rounded-rough-1',
  secondary:
    'bg-zinc-200 text-zinc-900 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 border-zinc-900 dark:border-zinc-100 rounded-rough-2',
  outline:
    'border-2 border-zinc-900 hover:bg-zinc-100 dark:border-zinc-100 dark:hover:bg-zinc-800 dark:text-zinc-100 rounded-rough-1',
  ghost: 'hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:text-zinc-100 border-transparent',
  destructive: 'bg-red-500 text-white hover:bg-red-600 border-red-900 rounded-rough-2',
  link: 'text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100 border-transparent',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3',
  default: 'h-10 px-4 py-2',
  lg: 'h-11 px-8',
  icon: 'h-10 w-10',
}

const classes = computed(() => twMerge(clsx(base, variants[props.variant], sizes[props.size])))
</script>

<template>
  <component v-if="asChild" :is="'a'" :class="classes" v-bind="$attrs">
    <slot />
  </component>

  <button v-else :type="type" :disabled="disabled" :class="classes">
    <slot />
  </button>
</template>
