<script lang="ts" setup>
import { computed } from 'vue'
import { useLanguage } from '../../../composables/useLanguage'
import { uiTranslations } from '../../../i18n/ui'

import Title from '../../../components/common/Title.vue'
import Button from '../../../components/common/Button.vue'
import Linkedin from '../../../components/icon/Linkedin.vue'
import Github from '../../../components/icon/Github.vue'
import Whatsapp from '../../../components/icon/Whatsapp.vue'

const { language } = useLanguage()
const t = computed(() => uiTranslations[language.value])

const phone = '5535997242338'
</script>

<template>
  <section id="contact" class="scroll-mt-20">
    <div class="max-w-xl">
      <Title>{{ t.contact.title }}</Title>

      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
        {{ t.contact.subtitle }}
      </p>

      <div class="flex flex-wrap gap-3">
        <Button
          variant="default"
          as-child
          :href="`https://api.whatsapp.com/send?phone=${phone}&text=Oi,%20Leandro!%20Vim%20pelo%20seu%20portf%C3%B3lio%20pessoal`"
          target="_blank"
          :aria-label="`Enviar mensagem no WhatsApp para ${phone}`"
        >
          <div class="flex items-center gap-2">
            <Whatsapp class="size-4" />
            <span>{{ t.contact.cta }}</span>
          </div>
        </Button>

        <Button
          variant="outline"
          as-child
          href="https://www.linkedin.com/in/leandro-adrian"
          target="_blank"
          aria-label="Abrir perfil no LinkedIn"
        >
          <div class="flex items-center gap-2">
            <Linkedin class="size-4" />
            <span>LinkedIn</span>
          </div>
        </Button>

        <Button
          variant="outline"
          as-child
          href="https://github.com/lezzin"
          target="_blank"
          aria-label="Abrir perfil no GitHub"
        >
          <div class="flex items-center gap-2">
            <Github class="size-4" />
            <span>GitHub</span>
          </div>
        </Button>
      </div>
    </div>
  </section>
</template>
