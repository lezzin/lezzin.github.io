<script setup lang="ts">
import { ref, computed, type Component } from 'vue'
import { ChevronDown } from 'lucide-vue-next'
import { useLanguage, type Language } from '../../composables/useLanguage'
import { onClickOutside } from '@vueuse/core'
import Br from '../icon/Br.vue'
import Us from '../icon/Us.vue'
import Es from '../icon/Es.vue'

const { language, setLanguage } = useLanguage()

const open = ref(false)

const languages: { code: Language; label: string; flag: Component }[] = [
  { code: 'pt', label: 'Português', flag: Br },
  { code: 'en', label: 'English', flag: Us },
  { code: 'es', label: 'Español', flag: Es },
]

const current = computed(() => languages.find((l) => l.code === language.value)!)

const root = ref()

onClickOutside(root, () => {
  open.value = false
})

function changeLanguage(lang: Language) {
  setLanguage(lang)
  open.value = false
}
</script>

<template>
  <div ref="root" class="relative inline-block">
    <button
      @click="open = !open"
      class="inline-flex items-center gap-1.5 h-9 px-3 rounded-md border border-zinc-200 dark:border-zinc-700 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
      :aria-expanded="open"
      aria-haspopup="listbox"
    >
      <component :is="current.flag" class="w-6 h-4 shrink-0" />
      <span class="hidden sm:inline">{{ current.label }}</span>
      <ChevronDown :size="14" class="transition-transform" :class="{ 'rotate-180': open }" />
    </button>

    <Transition
      enter-active-class="transition duration-100"
      leave-active-class="transition duration-75"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        role="listbox"
        class="absolute right-0 mt-1.5 w-40 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-md overflow-hidden z-50"
      >
        <button
          v-for="lang in languages"
          :key="lang.code"
          role="option"
          :aria-selected="language === lang.code"
          @click="changeLanguage(lang.code)"
          class="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-left transition-colors"
          :class="{
            'text-green-700 dark:text-green-400 font-medium bg-green-50 dark:bg-green-900/20':
              language === lang.code,
            'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800':
              language !== lang.code,
          }"
        >
          <component :is="lang.flag" class="w-6 h-4 shrink-0" />
          <span>{{ lang.label }}</span>
          <span
            v-if="language === lang.code"
            class="ml-auto text-green-600 dark:text-green-400 text-xs"
            >✓</span
          >
        </button>
      </div>
    </Transition>
  </div>
</template>
