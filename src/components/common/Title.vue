<script setup lang="ts">
import { motion, type Transition } from 'motion-v'

const titleVariants = {
  hidden: { opacity: 0, x: -20, rotate: -2 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    } as Transition,
  },
}
</script>

<template>
  <motion.h2
    :variants="titleVariants"
    initial="hidden"
    while-in-view="visible"
    :viewport="{ once: true }"
    class="text-3xl md:text-5xl font-handwritten tracking-tight mb-12 text-zinc-900 dark:text-white flex items-center gap-4"
  >
    <slot></slot>

    <motion.span
      :animate="{ rotate: [-5, 5, -5], scale: [1, 1.1, 1] }"
      :transition="{ repeat: Infinity, duration: 4, ease: 'easeInOut' }"
      class="w-3 h-3 rounded-rough-1 bg-zinc-900 dark:bg-white"
    >
    </motion.span>
  </motion.h2>
</template>
