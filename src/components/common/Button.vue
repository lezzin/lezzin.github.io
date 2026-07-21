<script lang="ts" setup>
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { computed } from 'vue'
import { motion } from 'motion-v'
import { useTheme } from '../../composables/useTheme'

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

const { theme } = useTheme()

const base = `
  relative
  inline-flex items-center justify-center
  text-base font-bold
  border-2 border-zinc-900 dark:border-zinc-100
  text-zinc-900 dark:text-zinc-100
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2
  disabled:opacity-50 disabled:pointer-events-none
  transition-colors
`

const variants: Record<Variant, string> = {
  default: `
    text-zinc-100 dark:text-zinc-950
    bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100
    dark:hover:bg-zinc-200
    rounded-rough
  `,
  secondary: `
    bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800
    dark:hover:bg-zinc-700
    rounded-rough
  `,
  outline: `
    hover:bg-white/50 dark:hover:bg-black/50 
    rounded-rough
  `,
  ghost: `
    border-none 
    hover:bg-white/50 dark:hover:bg-black/50 
    rounded-rough
  `,
  destructive: `
    bg-red-500
    border-red-900
    hover:bg-red-600 
    rounded-rough
  `,
  link: `
    group/link
    border-none
    underline-offset-8
    cursor-pointer
  `,
}

const noHoverVariants: Variant[] = ['ghost', 'link']

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3',
  default: 'h-10 px-4 py-2',
  lg: 'h-11 px-8',
  icon: 'h-10 w-10',
}

const classes = computed(() => twMerge(clsx(base, variants[props.variant], sizes[props.size])))

const buttonVariants = computed(() => {
  if (noHoverVariants.includes(props.variant)) return undefined

  return {
    hover: {
      scale: 1.02,
      rotate: -1,
      boxShadow:
        theme.value === 'dark' ? '3px 3px 0 rgba(255,255,255,.4)' : '3px 3px 0 rgba(0,0,0,.4)',
    },
  }
})

const whileHover = computed(() => (props.variant === 'ghost' ? undefined : 'hover'))
const isLink = computed(() => props.variant === 'link')
</script>

<template>
  <motion.a
    v-if="asChild"
    :is="'a'"
    :class="classes"
    v-bind="$attrs"
    :while-hover="whileHover"
    :variants="buttonVariants"
  >
    <svg
      v-if="isLink"
      class="absolute -bottom-1.5 left-0 w-full h-[8px] overflow-visible pointer-events-none opacity-0 group-hover/link:opacity-100 transition-opacity duration-150"
      viewBox="0 0 100 10"
      preserveAspectRatio="none"
    >
      <path
        d="M2,6 C18,2 30,8 45,3 C58,-0.5 68,7 82,2 C90,-0.5 94,5 98,3"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        class="sketch-draw"
        pathLength="1"
      />
    </svg>

    <slot />
  </motion.a>

  <motion.button
    v-else
    :type="type"
    :disabled="disabled"
    :class="classes"
    :while-hover="whileHover"
    :variants="buttonVariants"
  >
    <svg
      v-if="isLink"
      class="absolute -bottom-1.5 left-0 w-full h-[8px] overflow-visible pointer-events-none opacity-0 group-hover/link:opacity-100 transition-opacity duration-150"
      viewBox="0 0 100 10"
      preserveAspectRatio="none"
    >
      <path
        d="M2,6 C18,2 30,8 45,3 C58,-0.5 68,7 82,2 C90,-0.5 94,5 98,3"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        class="sketch-draw"
        pathLength="1"
      />
    </svg>

    <slot />
  </motion.button>
</template>

<style scoped>
.sketch-draw {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: draw-sketch 0.35s ease forwards;
}

@keyframes draw-sketch {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
