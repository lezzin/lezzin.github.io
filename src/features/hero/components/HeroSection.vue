<script lang="ts" setup>
import { computed } from 'vue'
import { ArrowDown, FileText, MessageSquare } from 'lucide-vue-next'
import Button from '../../../components/common/Button.vue'
import { useLanguage } from '../../../composables/useLanguage'
import { uiTranslations } from '../../../i18n/ui'
import { formatText } from '../../../utils/markdown'

const { language } = useLanguage()
const t = computed(() => uiTranslations[language.value])
</script>

<template>
  <section id="home" class="pt-16 pb-4">
    <div class="mb-3">
      <span
        class="inline-flex items-center gap-1.5 text-xs font-medium text-green-700 dark:text-green-400 uppercase tracking-widest"
      >
        <span class="size-1.5 rounded-full bg-green-500 dark:bg-green-400 flex-shrink-0" />
        Backend Developer · PHP/Laravel &amp; NestJS
      </span>
    </div>

    <h1
      class="mt-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-5xl lg:text-6xl leading-[1.1]"
    >
      Leandro Adrian<br />
      <span class="text-zinc-400 dark:text-zinc-600">da Silva</span>
    </h1>

    <p
      class="mt-6 text-base leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-2xl"
      v-html="formatText(t.hero.description)"
    />

    <div class="mt-8 flex flex-wrap gap-3">
      <Button variant="default" as-child href="#experience">
        <div class="flex items-center gap-2">
          <ArrowDown :size="15" />
          {{ t.hero.viewExperience }}
        </div>
      </Button>

      <Button variant="outline" as-child href="/cv.pdf" target="_blank">
        <div class="flex items-center gap-2">
          <FileText :size="15" />
          {{ t.hero.resume }}
        </div>
      </Button>

      <Button variant="outline" as-child href="#contact">
        <div class="flex items-center gap-2">
          <MessageSquare :size="15" />
          {{ t.hero.scheduleCall }}
        </div>
      </Button>
    </div>
  </section>
</template>
