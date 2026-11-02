<script setup lang="ts">
import { computed } from 'vue'
import { ArrowDown } from 'lucide-vue-next'
import Button from '../../../components/common/Button.vue'
import Card from '../../../components/common/Card.vue'

import { useLanguage } from '../../../composables/useLanguage'
import { uiTranslations } from '../../../i18n/ui'
import { formatText } from '../../../utils/markdown'

const { language } = useLanguage()
const t = computed(() => uiTranslations[language.value])
</script>

<template>
  <section id="home" class="pt-2 pb-2">
    <Card :title="t.card.hero">
      <template #image>
        <img
          src="/hero.jpg"
          alt="Ilustração de um setup com várias telas"
          class="object-cover w-full aspect-[16/5] object-bottom"
        />
      </template>

      <p
        class="text-sm leading-relaxed text-slate-500 dark:text-slate-400"
        v-html="formatText(t.hero.description)"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-6">
        <Button variant="card" color="indigo" as-child href="#experience">
          <ArrowDown :size="14" aria-hidden="true" />
          {{ t.hero.experiences }}
        </Button>

        <Button variant="card" color="violet" as-child href="#projects">
          <ArrowDown :size="14" aria-hidden="true" />
          {{ t.hero.projects }}
        </Button>
      </div>
    </Card>
  </section>
</template>
