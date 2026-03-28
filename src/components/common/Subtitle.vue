<script setup lang="ts">
import { motion } from 'motion-v'
import type { Transition } from 'motion-v'

const subtitleVariants = {
  hidden: { opacity: 0, y: 10, rotate: 1 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      delay: 0.1,
      stiffness: 100,
    } as Transition,
  },
}
</script>

<template>
  <motion.div
    :variants="subtitleVariants"
    initial="hidden"
    while-in-view="visible"
    :viewport="{ once: true }"
    class="text-lg text-gray-600 dark:text-zinc-400 mb-10 max-w-2xl leading-relaxed"
  >
    <slot></slot>
  </motion.div>
</template>
