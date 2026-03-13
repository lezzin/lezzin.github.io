<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'
import { useTheme } from '../../composables/useTheme'
import Button from '../common/Button.vue'

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <Button @click="toggleTheme" variant="outline" size="icon">
    <span v-if="theme === 'light'">
      <Sun :size="20" />
    </span>
    <span v-else>
      <Moon :size="20" />
    </span>
  </Button>
</template>
