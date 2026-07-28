<script lang="ts" setup>
import { computed } from 'vue'
import { ArrowDown, FileText, User } from 'lucide-vue-next'
import Button from '../../../components/common/Button.vue'
import { useLanguage } from '../../../composables/useLanguage'
import { uiTranslations } from '../../../i18n/ui'
import { formatText } from '../../../utils/markdown'

const { language } = useLanguage()
const t = computed(() => uiTranslations[language.value])
</script>

<template>
  <section id="home" class="relative overflow-hidden pt-24">
    <h1 class="mt-5 text-5xl leading-[1.05] font-bold tracking-tight md:text-6xl lg:text-7xl">
      Leandro Adrian <br />

      <span class="relative inline-block">
        da Silva

        <svg
          class="absolute -bottom-2 left-0 h-3 w-full text-green-500 dark:text-green-400"
          viewBox="0 0 200 12"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M2 8 C 40 2, 80 10, 120 5 S 180 3, 198 7"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </span>
    </h1>

    <p
      class="mt-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-3xl"
      v-html="formatText(t.hero.description)"
    />

    <div class="mt-10 flex flex-wrap gap-3">
      <Button variant="default" as-child href="#experience" size="lg">
        <div class="flex items-center">
          <ArrowDown :size="18" class="mr-2" />
          {{ t.hero.viewExperience }}
        </div>
      </Button>

      <Button variant="outline" as-child href="/cv.pdf" target="_blank" size="lg">
        <div class="flex items-center">
          <FileText class="mr-2 h-4 w-4" />
          {{ t.hero.resume }}
        </div>
      </Button>

      <Button variant="outline" as-child href="#contact" size="lg">
        <div class="flex items-center">
          <User class="mr-2 h-4 w-4" />
          {{ t.hero.scheduleCall }}
        </div>
      </Button>
    </div>
  </section>
</template>
