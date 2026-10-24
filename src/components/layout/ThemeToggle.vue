<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'
import { useTheme } from '../../composables/useTheme'

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <button
    @click="toggleTheme"
    class="flex items-center justify-center size-9 rounded-md border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
    :aria-label="theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'"
    :aria-pressed="theme === 'dark'"
  >
    <Sun v-if="theme === 'light'" :size="16" />
    <Moon v-else :size="16" />
  </button>
</template>
