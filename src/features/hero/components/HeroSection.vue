<script lang="ts" setup>
import { computed } from 'vue'
import { ArrowDown } from 'lucide-vue-next'
import Button from '../../../components/common/Button.vue'
import { useLanguage } from '../../../composables/useLanguage'
import { uiTranslations } from '../../../i18n/ui'
import { formatText } from '../../../utils/markdown'
import Card from '../../../components/common/Card.vue'
import Linkedin from '../../../components/icon/Linkedin.vue'
import Github from '../../../components/icon/Github.vue'
import Whatsapp from '../../../components/icon/Whatsapp.vue'

const { language } = useLanguage()
const t = computed(() => uiTranslations[language.value])

const phone = '5535997242338'
</script>

<template>
  <section id="home" class="pt-2 pb-2">
    <Card :title="t.card.hero">
      <template #image>
        <img src="/hero.jpg" alt="Ilustração de um setup com várias telas"
          class="object-cover w-full aspect-[16/5] object-bottom" />
      </template>

      <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400" v-html="formatText(t.hero.description)" />

      <div class="grid md:grid-cols-2 gap-4 mt-6">
        <Button variant="card" color="indigo" as-child href="#experience">
          <ArrowDown :size="14" />
          {{ t.hero.experiences }}
        </Button>

        <Button variant="card" color="violet" as-child href="#projects">
          <ArrowDown :size="14" />
          {{ t.hero.projects }}
        </Button>
      </div>
    </Card>

    <Card :title="t.contact.title" class="mt-6">
      <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
        {{ t.contact.subtitle }}
      </p>

      <div class="flex flex-wrap gap-2">
        <Button variant="card" color="green" as-child
          :href="`https://api.whatsapp.com/send?phone=${phone}&text=Oi,%20Leandro!%20Vim%20pelo%20seu%20portf%C3%B3lio%20pessoal`"
          target="_blank" :aria-label="`Enviar mensagem no WhatsApp para ${phone}`">
          <div class="flex items-center gap-2">
            <Whatsapp class="size-4" />
            <span>{{ t.contact.whatsapp }}</span>
          </div>
        </Button>

        <Button variant="card" color="blue" as-child href="https://www.linkedin.com/in/leandro-adrian" target="_blank"
          aria-label="Abrir perfil no LinkedIn">
          <div class="flex items-center gap-2">
            <Linkedin class="size-4" />
            <span>LinkedIn</span>
          </div>
        </Button>

        <Button variant="card" color="black" as-child href="https://github.com/lezzin" target="_blank"
          aria-label="Abrir perfil no GitHub">
          <div class="flex items-center gap-2">
            <Github class="size-4" />
            <span>GitHub</span>
          </div>
        </Button>
      </div>
    </Card>
  </section>
</template>
