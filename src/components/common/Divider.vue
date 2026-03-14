<script setup lang="ts">
import { motion } from 'motion-v';
import { drawVariants } from '../../constants/motion';
</script>

<template>
  <div class="mt-12 md:mt-20 py-8 flex items-center justify-center overflow-hidden">
    <svg width="100%" height="20" viewBox="0 0 1200 20" fill="none" xmlns="http://www.w3.org/2000/svg"
      class="w-full text-zinc-300 dark:text-zinc-800">
      <motion.path d="M0 10 C 150 5, 300 15, 450 10 S 750 5, 900 10 S 1200 5, 1200 10" stroke="currentColor"
        stroke-width="2" stroke-dasharray="10 5" stroke-linecap="round" :variants="drawVariants" initial="hidden"
        while-in-view="visible" :viewport="{ once: true, margin: '-50px' }" />
    </svg>
  </div>
</template>