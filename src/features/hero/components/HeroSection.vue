<script lang="ts" setup>
import { computed } from 'vue'
import { ArrowDown, FileText } from 'lucide-vue-next'
import Button from '../../../components/common/Button.vue'
import { useLanguage } from '../../../composables/useLanguage'
import { uiTranslations } from '../../../i18n/ui'
import { formatText } from '../../../utils/markdown'
import Whatsapp from '../../../components/icon/Whatsapp.vue'

const { language } = useLanguage()
const t = computed(() => uiTranslations[language.value])
</script>

<template>
  <section id="home" class="flex flex-col justify-center pt-24">
    <div class="space-y-8 max-w-3xl">
      <div class="space-y-3">
        <p class="text-green-600 dark:text-green-400 text-sm font-bold tracking-widest uppercase">
          {{ t.hero.role }}
        </p>

        <h1
          class="dark:text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]"
        >
          Leandro Adrian <br class="hidden md:block" />
          da Silva
        </h1>
      </div>

      <p
        class="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
        v-html="formatText(t.hero.description)"
      />

      <div class="flex flex-wrap gap-2 pt-4">
        <Button variant="default" as-child href="#experience" size="lg">
          <div class="flex items-center">
            <ArrowDown :size="18" class="mr-2" />
            {{ t.hero.viewExperience }}
          </div>
        </Button>

        <Button variant="outline" as-child href="#contact" size="lg">
          <div class="flex items-center">
            <Whatsapp class="mr-2 h-4 w-4" />
            {{ t.hero.scheduleCall }}
          </div>
        </Button>

        <Button variant="outline" as-child href="/cv.pdf" target="_blank" size="lg">
          <div class="flex items-center">
            <FileText class="mr-2 h-4 w-4" />
            {{ t.hero.resume }}
          </div>
        </Button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-bounce-subtle {
  animation: bounce-subtle 2s infinite;
}

@keyframes bounce-subtle {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-4px);
  }
}
</style>
