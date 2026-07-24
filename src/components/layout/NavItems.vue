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
  <nav class="flex items-center flex-wrap gap-8">
    <div v-for="item in navItems" :key="item.href" class="relative group">
      <a
        :href="item.href"
        :class="[
          'relative inline-block text-base font-bold transition-colors duration-200',
          active === item.href.replace('#', '') || (item.href === '#' && active === 'home')
            ? 'text-green-600 dark:text-green-400'
            : '',
        ]"
      >
        {{ item.name }}
      </a>

      <svg
        v-if="active === item.href.replace('#', '') || (item.href === '#' && active === 'home')"
        class="absolute -bottom-1.5 left-0 w-full h-[8px] overflow-visible pointer-events-none"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        <path
          d="M2,5 C15,2 25,8 38,4 C50,1 60,7 72,3 C82,0.5 90,6 98,4"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          class="text-green-600 dark:text-green-400"
        />
      </svg>

      <svg
        v-else
        class="absolute -bottom-1.5 left-0 w-full h-[8px] overflow-visible pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        <path
          d="M2,6 C18,2 30,8 45,3 C58,-0.5 68,7 82,2 C90,-0.5 94,5 98,3"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          class="sketch-draw"
          pathLength="1"
        />
      </svg>
    </div>
  </nav>
</template>
