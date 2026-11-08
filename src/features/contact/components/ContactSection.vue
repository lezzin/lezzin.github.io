<script setup lang="ts">
import Github from '../../../components/icon/Github.vue'
import Linkedin from '../../../components/icon/Linkedin.vue'
import Whatsapp from '../../../components/icon/Whatsapp.vue'
import Card from '../../../components/common/Card.vue'
import Button from '../../../components/common/Button.vue'

const PHONE_NUMBER = '5535997242338'
const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${encodeURIComponent('Olá, Leandro! Vi seu portfólio e gostaria de conversar.')}`
</script>

<template>
  <section id="contact" class="scroll-mt-20">
    <Card title="Vamos conversar?" class="mt-6 scroll-mt-20">
      <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
        Estou disponível para novos desafios em backend. Se você precisa criar sistemas rápidos e
        confiáveis, fale comigo
      </p>

      <div class="flex flex-wrap gap-2">
        <Button
          variant="card"
          color="green"
          as-child
          :href="WHATSAPP_URL"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`Enviar mensagem no WhatsApp para ${PHONE_NUMBER}`"
        >
          <div class="flex items-center gap-2">
            <Whatsapp aria-hidden="true" class="size-4" />
            <span>WhatsApp</span>
          </div>
        </Button>

        <Button
          variant="card"
          color="blue"
          as-child
          href="https://www.linkedin.com/in/leandro-adrian"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir perfil no LinkedIn"
        >
          <div class="flex items-center gap-2">
            <Linkedin aria-hidden="true" class="size-4" />
            <span>LinkedIn</span>
          </div>
        </Button>

        <Button
          variant="card"
          color="black"
          as-child
          href="https://github.com/lezzin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir perfil no GitHub"
        >
          <div class="flex items-center gap-2">
            <Github aria-hidden="true" class="size-4" />
            <span>GitHub</span>
          </div>
        </Button>
      </div>
    </Card>
  </section>
</template>
