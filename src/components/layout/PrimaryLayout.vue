<script setup lang="ts">
import { computed } from 'vue'
import Header from './Header.vue'
import { useLanguage } from '../../composables/useLanguage'
import { uiTranslations } from '../../i18n/ui'
import { twMerge } from 'tailwind-merge'
import { FileText } from 'lucide-vue-next'
import Button from '../common/Button.vue'

const { language } = useLanguage()
const t = computed(() => uiTranslations[language.value])
const currentYear = new Date().getFullYear()

const containerClass = 'max-w-5xl mx-auto px-6 md:px-8 transition-colors duration-500'
</script>

<template>
  <div
    class="bg-white dark:bg-zinc-950 selection:bg-lime-100 dark:selection:bg-lime-900 bg-[radial-gradient(circle,_#eee_1px,_transparent_1px)] dark:bg-[radial-gradient(circle,_#111_1px,_transparent_1px)] [background-size:16px_16px] bg-fixed"
  >
    <Header />

    <main :class="twMerge(containerClass, 'py-20')">
      <slot></slot>
    </main>
  </div>

  <footer class="bg-stone-200 dark:bg-neutral-900">
    <div :class="twMerge(containerClass, 'py-6')">
      <div class="flex items-center justify-between flex-wrap gap-4">
        <div>
          <p class="font-handwritten text-xl mb-2">Leandro Adrian da Silva</p>
          <p class="text-[10px] font-sans uppercase tracking-widest">
            {{ t.footer.madeWith.replace('{year}', currentYear.toString()) }}
          </p>
        </div>

        <Button variant="outline" as-child href="/cv.pdf" target="_blank" size="sm">
          <div class="flex items-center">
            <FileText class="mr-2 h-4 w-4" />
            {{ t.hero.resume }}
          </div>
        </Button>
      </div>
    </div>
  </footer>
</template>
