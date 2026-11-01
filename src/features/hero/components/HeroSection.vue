<script lang="ts" setup>
import { computed } from 'vue'
import { ArrowDown, FileText } from 'lucide-vue-next'
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
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card :title="t.card.hero" image="https://projeto-unicesumar.vercel.app/assets/images/banner.gif">
        <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400" v-html="formatText(t.hero.description)" />
      </Card>

      <div class="flex flex-col gap-6">
        <Card :title="t.card.nav">
          <div class="flex flex-wrap gap-2">
            <Button variant="card" color="indigo" as-child href="#experience">
              <div class="flex items-center gap-2">
                <ArrowDown :size="14" />
                {{ t.hero.viewExperience }}
              </div>
            </Button>

            <Button variant="card" color="violet" as-child href="#skills">
              <div class="flex items-center gap-2">
                <ArrowDown :size="14" />
                {{ t.hero.viewSkills }}
              </div>
            </Button>

            <Button variant="card" color="sky" as-child href="/cv.pdf" target="_blank">
              <div class="flex items-center gap-2">
                <FileText :size="14" />
                {{ t.hero.resume }}
              </div>
            </Button>
          </div>
        </Card>

        <Card :title="t.card.social">
          <div class="flex flex-wrap gap-2">
            <Button variant="card" color="black" as-child href="https://github.com/lezzin" target="_blank"
              aria-label="Abrir perfil no GitHub">
              <div class="flex items-center gap-2">
                <Github class="size-4" />
                <span>GitHub</span>
              </div>
            </Button>

            <Button variant="card" color="blue" as-child href="https://www.linkedin.com/in/leandro-adrian"
              target="_blank" aria-label="Abrir perfil no LinkedIn">
              <div class="flex items-center gap-2">
                <Linkedin class="size-4" />
                <span>LinkedIn</span>
              </div>
            </Button>

            <Button variant="card" color="green" as-child
              :href="`https://api.whatsapp.com/send?phone=${phone}&text=Oi,%20Leandro!%20Vim%20pelo%20seu%20portf%C3%B3lio%20pessoal`"
              target="_blank" :aria-label="`Enviar mensagem no WhatsApp para ${phone}`">
              <div class="flex items-center gap-2">
                <Whatsapp class="size-4" />
                <span>{{ t.contact.whatsapp }}</span>
              </div>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>
