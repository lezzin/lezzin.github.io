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
  <div class="bg-point selection:bg-lime-100 dark:selection:bg-lime-900">
    <Header :container-class="containerClass" />

    <main :class="twMerge(containerClass, 'py-20')">
      <slot></slot>
    </main>

    <footer>
      <div :class="twMerge(containerClass, 'py-6')">
        <div class="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p class="font-handwritten text-xl mb-1">Leandro Adrian da Silva</p>
            <p class="text-[10px] uppercase tracking-widest">
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
  </div>
</template>
