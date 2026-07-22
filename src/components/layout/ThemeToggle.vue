<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'
import { useTheme } from '../../composables/useTheme'
import Button from '../common/Button.vue'

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <Button @click="toggleTheme" variant="outline" size="icon">
    <template v-if="theme === 'light'">
      <Sun :size="20" class="text-yellow-600" />
    </template>

    <template v-else>
      <Moon :size="20" class="text-blue-300" />
    </template>
  </Button>
</template>
