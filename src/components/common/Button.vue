<script setup lang="ts">
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
  | 'icon'

type CardColor =
  | 'green'
  | 'blue'
  | 'yellow'
  | 'red'
  | 'purple'
  | 'pink'
  | 'orange'
  | 'cyan'
  | 'indigo'
  | 'violet'
  | 'sky'
  | 'zinc'
  | 'black'

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
    size: undefined,
    type: 'button',
    disabled: false,
    asChild: false,
  }
)

const cardColors: Record<CardColor, string> = {
  green: 'bg-emerald-500 text-white hover:bg-emerald-600',
  blue: 'bg-sky-500 text-white hover:bg-sky-600',
  yellow: 'bg-amber-400 text-amber-950 hover:bg-amber-500',
  red: 'bg-rose-500 text-white hover:bg-rose-600',
  purple: 'bg-violet-500 text-white hover:bg-violet-600',
  pink: 'bg-pink-500 text-white hover:bg-pink-600',
  orange: 'bg-orange-500 text-white hover:bg-orange-600',
  cyan: 'bg-cyan-500 text-white hover:bg-cyan-600',
  indigo: 'bg-indigo-500 text-white hover:bg-indigo-600',
  violet: 'bg-violet-500 text-white hover:bg-violet-600',
  sky: 'bg-sky-500 text-white hover:bg-sky-600',
  zinc: 'bg-zinc-500 text-white hover:bg-zinc-600',
  black:
    'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200',
}

const base =
  'relative inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap select-none font-semibold text-sm rounded-lg transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50 active:enabled:scale-[0.97] [&_svg]:pointer-events-none [&_svg]:shrink-0'

const variants: Record<Exclude<Variant, 'card'>, string> = {
  default:
    'bg-slate-900 text-white hover:bg-slate-700 shadow-sm hover:shadow dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200',
  secondary:
    'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700',
  outline:
    'border border-slate-200 bg-transparent text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800',
  ghost:
    'bg-transparent text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
  destructive: 'bg-rose-600 text-white hover:bg-rose-700 shadow-sm',
  link: 'h-auto rounded-none p-0 bg-transparent text-emerald-700 hover:text-emerald-800 hover:underline underline-offset-4 dark:text-emerald-400 dark:hover:text-emerald-300',
  icon: 'flex-col gap-1 rounded-lg bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white',
}

const sizes: Record<Size, string> = {
  sm: 'h-8 px-3 text-xs',
  default: 'h-10 px-4',
  lg: 'h-11 px-6 text-base',
  icon: 'min-w-16 min-h-16 px-2 py-2',
  card: 'min-h-9 px-4 py-2',
  link: 'text-sm',
}

const effectiveSize = computed<Size>(
  () =>
    props.size ??
    (props.variant === 'card'
      ? 'card'
      : props.variant === 'link'
        ? 'link'
        : props.variant === 'icon'
          ? 'icon'
          : 'default')
)

const variantClasses = computed(() => {
  if (props.variant === 'card') {
    return clsx('rounded-xl font-semibold shadow-sm hover:shadow-md', cardColors[props.color])
  }

  return variants[props.variant]
})

const classes = computed(() =>
  twMerge(clsx(base, variantClasses.value, sizes[effectiveSize.value]))
)
</script>

<template>
  <a
    v-if="asChild"
    :class="classes"
    :aria-disabled="disabled || undefined"
    :tabindex="disabled ? -1 : undefined"
    v-bind="$attrs"
  >
    <slot />
  </a>

  <button v-else :type="type" :disabled="disabled" :class="classes" v-bind="$attrs">
    <slot />
  </button>
</template>
