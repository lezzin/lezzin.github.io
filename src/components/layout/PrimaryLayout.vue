<script setup lang="ts">
import { computed } from 'vue'
import Header from './Header.vue'
import { useLanguage } from '../../composables/useLanguage'
import { uiTranslations } from '../../i18n/ui'
import { FileText } from 'lucide-vue-next'
import Button from '../common/Button.vue'

const { language } = useLanguage()
const t = computed(() => uiTranslations[language.value])
const currentYear = new Date().getFullYear()

const containerClass = 'max-w-4xl mx-auto px-6 md:px-8'
</script>

<template>
  <div
    class="bg-white dark:bg-zinc-950 min-h-screen selection:bg-green-100 dark:selection:bg-green-900"
  >
    <Header :container-class="containerClass" />

    <main :class="[containerClass, 'pt-24 pb-20']">
      <slot />
    </main>

    <footer class="border-t border-zinc-100 dark:border-zinc-800">
      <div :class="[containerClass, 'py-6']">
        <div class="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p class="font-handwritten text-xl mb-0.5 text-zinc-900 dark:text-zinc-100">
              Leandro Adrian da Silva
            </p>
            <p class="text-xs text-zinc-400 dark:text-zinc-500 tracking-wide">
              {{ t.footer.madeWith.replace('{year}', currentYear.toString()) }}
            </p>
          </div>

          <Button variant="outline" as-child href="/cv.pdf" target="_blank" size="sm">
            <div class="flex items-center gap-2">
              <FileText class="h-3.5 w-3.5" />
              {{ t.hero.resume }}
            </div>
          </Button>
        </div>
      </div>
    </footer>
  </div>
</template>
