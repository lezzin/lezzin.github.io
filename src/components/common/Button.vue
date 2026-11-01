<script lang="ts" setup>
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { computed } from 'vue'

type Variant =
  | 'default'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'destructive'
  | 'link'
  | 'card'

const cardColors = {
  green: 'bg-emerald-500 hover:bg-emerald-600 text-white',
  blue: 'bg-sky-500 hover:bg-sky-600 text-white',
  yellow: 'bg-amber-400 hover:bg-amber-500 text-amber-950',
  red: 'bg-rose-500 hover:bg-rose-600 text-white',
  purple: 'bg-violet-500 hover:bg-violet-600 text-white',
  pink: 'bg-pink-500 hover:bg-pink-600 text-white',
  orange: 'bg-orange-500 hover:bg-orange-600 text-white',
  cyan: 'bg-cyan-500 hover:bg-cyan-600 text-white',
  indigo: 'bg-emerald-500 hover:bg-emerald-600 text-white',
  violet: 'bg-violet-500 hover:bg-violet-600 text-white',
  sky: 'bg-sky-500 hover:bg-sky-600 text-white',
  zinc: 'bg-slate-500 hover:bg-slate-600 text-white',
  black: 'bg-slate-900 hover:bg-slate-800 text-slate-50 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900',
} as const

type CardColor = keyof typeof cardColors
type Size = 'sm' | 'default' | 'lg' | 'icon' | 'card' | 'link'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    color?: CardColor
    size?: Size
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
    asChild?: boolean
  }>(),
  {
    variant: 'default',
    color: 'green',
    type: 'button',
    disabled: false,
    asChild: false,
  }
)

const base = `
  relative
  inline-flex items-center justify-center
  text-sm font-semibold
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
  disabled:opacity-50 disabled:pointer-events-none
  transition-all duration-150
`

const variants: Record<Exclude<Variant, 'card'>, string> = {
  default: `
    bg-slate-900 text-slate-100
    hover:bg-slate-700
    dark:bg-slate-100 dark:text-slate-900
    dark:hover:bg-slate-200
    rounded-lg
  `,
  secondary: `
    bg-slate-100 text-slate-900
    hover:bg-slate-200
    dark:bg-slate-800 dark:text-slate-100
    dark:hover:bg-slate-700
    rounded-lg
  `,
  outline: `
    border border-slate-200 dark:border-slate-700
    bg-transparent
    text-slate-700 dark:text-slate-300
    hover:bg-slate-50 dark:hover:bg-slate-800
    hover:text-slate-900 dark:hover:text-slate-100
    rounded-lg
  `,
  ghost: `
    bg-transparent
    text-slate-700 dark:text-slate-300
    hover:bg-slate-100 dark:hover:bg-slate-800
    rounded-lg
  `,
  destructive: `
    bg-rose-600 text-white
    hover:bg-rose-700
    rounded-lg
  `,
  link: `
    bg-transparent
    text-emerald-700 dark:text-emerald-400
    hover:underline underline-offset-4
  `,
}

const sizes: Record<Size, string> = {
  sm: 'h-8 px-3 text-xs',
  default: 'h-9 px-4 py-2',
  lg: 'h-10 px-5',
  icon: 'size-9',
  card: 'px-4 py-2 text-sm',
  link: 'h-auto p-0 text-sm',
}

const effectiveSize = computed<Size>(() =>
  props.size ?? (props.variant === 'card' ? 'card' : (props.variant === 'link' ? 'link' : 'default'))
)

const variantClasses = computed(() => {
  if (props.variant === 'card') {
    return `rounded-full font-semibold ${cardColors[props.color]}`
  }

  return variants[props.variant]
})

const classes = computed(() =>
  twMerge(clsx(base, variantClasses.value, sizes[effectiveSize.value]))
)
</script>

<template>
  <a v-if="asChild" :class="classes" v-bind="$attrs">
    <slot />
  </a>

  <button v-else :type="type" :disabled="disabled" :class="classes">
    <slot />
  </button>
</template>
