<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'
import { useTheme } from '../../composables/useTheme'

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <button
    @click="toggleTheme"
    class="relative rounded-rough-pill border-2 inline-flex items-center shrink-0 w-16 h-9 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    :class="theme === 'light' ? 'border-yellow-500 bg-yellow-100' : 'border-blue-700 bg-blue-300'"
    role="switch"
    :aria-checked="theme === 'light'"
  >
    <span
      class="relative z-10 flex items-center justify-center size-7 rounded-rough-circle border-2 transition-transform duration-200 ease-out"
      :class="[
        theme === 'light'
          ? 'translate-x-[30px] bg-yellow-50 border-yellow-700 text-yellow-700'
          : 'translate-x-[2px] bg-blue-50 border-blue-700 text-blue-700',
      ]"
    >
      <Sun v-if="theme === 'light'" key="sun" :size="16" />
      <Moon v-else key="moon" :size="16" />
    </span>
  </button>
</template>
