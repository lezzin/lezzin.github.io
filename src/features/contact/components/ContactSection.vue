<script lang="ts" setup>
import { computed } from 'vue'
import { useLanguage } from '../../../composables/useLanguage'
import { uiTranslations } from '../../../i18n/ui'

import Title from '../../../components/common/Title.vue'
import Subtitle from '../../../components/common/Subtitle.vue'
import Button from '../../../components/common/Button.vue'
import Linkedin from '../../../components/icon/Linkedin.vue'
import Github from '../../../components/icon/Github.vue'
import Whatsapp from '../../../components/icon/Whatsapp.vue'

const { language } = useLanguage()
const t = computed(() => uiTranslations[language.value])

const phone = '5535997242338'
</script>

<template>
  <section id="contact" class="py-2 scroll-mt-32">
    <div class="max-w-3xl">
      <Title class="!mb-4">{{ t.contact.title }}</Title>

      <Subtitle class="mb-12 font-handwritten text-xl">
        {{ t.contact.subtitle }}
      </Subtitle>

      <Button
        variant="default"
        as-child
        :href="`https://api.whatsapp.com/send?phone=${phone}&text=Oi,%20Leandro!%20Vim%20pelo%20seu%20portf%C3%B3lio%20pessoal`"
        target="_blank"
        :aria-label="`Enviar mensagem no WhatsApp para ${phone}`"
      >
        <div class="flex items-center gap-3">
          <Whatsapp class="size-5" />
          <span>{{ t.contact.cta }}</span>
        </div>
      </Button>

      <div class="flex flex-wrap gap-2 mt-2">
        <Button
          variant="outline"
          as-child
          href="https://www.linkedin.com/in/leandro-adrian"
          target="_blank"
          aria-label="Abrir perfil no LinkedIn"
        >
          <div class="flex items-center gap-3">
            <Linkedin class="size-5" />
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
          <div class="flex items-center gap-3">
            <Github class="size-5" />
            <span>GitHub</span>
          </div>
        </Button>
      </div>
    </div>
  </section>
</template>
