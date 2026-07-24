<script setup lang="ts">
import { ref, computed } from 'vue'
import { ChevronDown } from 'lucide-vue-next'
import { useLanguage, type Language } from '../../composables/useLanguage'
import { onClickOutside } from '@vueuse/core'

const { language, setLanguage } = useLanguage()

const open = ref(false)

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
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
      class="inline-flex items-center gap-2 h-9 px-3 rounded-rough-pill border-2 border-zinc-300 dark:border-zinc-800 font-bold"
    >
      <span>{{ current.flag }}</span>
      <span>{{ current.label }}</span>

      <ChevronDown :size="16" class="transition-transform" :class="{ 'rotate-180': open }" />
    </button>

    <Transition
      enter-active-class="transition duration-150"
      leave-active-class="transition duration-100"
      enter-from-class="opacity-0 -translate-y-1 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0 -translate-y-1 scale-95"
    >
      <div
        v-if="open"
        class="absolute right-0 mt-3 w-48 rounded-rough border-2 border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-lg overflow-hidden z-50"
      >
        <button
          v-for="lang in languages"
          :key="lang.code"
          @click="changeLanguage(lang.code)"
          class="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
          :class="{
            'font-bold text-green-700 dark:text-green-400': language === lang.code,
          }"
        >
          <span class="text-lg">{{ lang.flag }}</span>
          <span>{{ lang.label }}</span>

          <span v-if="language === lang.code" class="ml-auto text-green-600"> ✓ </span>
        </button>
      </div>
    </Transition>
  </div>
</template>
