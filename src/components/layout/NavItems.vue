<script setup lang="ts">
import { computed } from 'vue'
import { useLanguage } from '../../composables/useLanguage'
import { navItemsTranslations } from '../../i18n/nav-items'

defineProps<{
  active?: string
}>()

const { language } = useLanguage()
const navItems = computed(() => navItemsTranslations[language.value])
</script>

<template>
  <nav class="flex items-center gap-6">
    <a
      v-for="item in navItems"
      :key="item.href"
      :href="item.href"
      :class="[
        'text-sm font-medium transition-colors duration-150',
        active === item.href.replace('#', '') || (item.href === '#' && active === 'home')
          ? 'text-green-600 dark:text-green-400'
          : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100',
      ]"
    >
      {{ item.name }}
    </a>
  </nav>
</template>
