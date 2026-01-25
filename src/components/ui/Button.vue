<script lang="ts" setup>
import { computed } from 'vue'

type Variant =
    | 'default'
    | 'secondary'
    | 'outline'
    | 'ghost'
    | 'destructive'
    | 'link'

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
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ' +
    'disabled:opacity-50 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
    default: 'bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600',
    outline: 'border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800 dark:text-gray-100',
    ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-100',
    destructive: 'bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600',
    link: 'text-blue-600 underline-offset-4 hover:underline dark:text-blue-400',
}

const sizes: Record<Size, string> = {
    sm: 'h-9 px-3',
    default: 'h-10 px-4 py-2',
    lg: 'h-11 px-8',
    icon: 'h-10 w-10',
}

const classes = computed(() => [
    base,
    variants[props.variant],
    sizes[props.size],
])
</script>

<template>
    <component v-if="asChild" :is="'a'" :class="classes" v-bind="$attrs">
        <slot />
    </component>

    <button v-else :type="type" :disabled="disabled" :class="classes">
        <slot />
    </button>
</template>
