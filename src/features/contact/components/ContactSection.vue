<script lang="ts" setup>
import { Github, Linkedin, Mail, Copy, Check } from 'lucide-vue-next'
import Title from '../../../components/common/Title.vue'
import Subtitle from '../../../components/common/Subtitle.vue'
import Button from '../../../components/common/Button.vue'
import { ref } from 'vue'

const email = 'leandrinsilva22@gmail.com'
const copied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}
</script>

<template>
  <section id="contact" class="py-20 mb-10">
    <div class="max-w-3xl">
      <Title class="!mb-4">Vamos conversar?</Title>

      <Subtitle class="mb-8">
        Estou sempre interessado em ouvir sobre novos projetos desafiadores, arquitetura de sistemas
        e oportunidades de colaboração no ecossistema Backend.
      </Subtitle>

      <div class="flex flex-col gap-6">
        <div class="flex flex-wrap gap-4">
          <Button
            variant="default"
            as-child
            :href="`mailto:${email}`"
            class="px-6 h-12"
          >
            <div class="flex items-center gap-3">
              <Mail :size="18" />
              <span class="font-semibold">{{ email }}</span>
            </div>
          </Button>

          <Button
            variant="outline"
            @click="copyEmail"
            class="h-12 px-4 transition-all duration-300"
            :class="copied ? 'border-green-500 text-green-600 dark:text-green-400' : ''"
          >
            <div class="flex items-center gap-2">
              <Check v-if="copied" :size="18" />
              <Copy v-else :size="18" />
              <span>{{ copied ? 'Copiado!' : 'Copiar Email' }}</span>
            </div>
          </Button>
        </div>

        <div class="flex flex-wrap gap-4">
          <Button
            variant="outline"
            as-child
            href="https://github.com/lezzin"
            target="_blank"
            class="h-12 px-6"
          >
            <div class="flex items-center gap-3">
              <Github :size="18" />
              <span>GitHub</span>
            </div>
          </Button>

          <Button
            variant="outline"
            as-child
            href="https://www.linkedin.com/in/leandro-adrian"
            target="_blank"
            class="h-12 px-6"
          >
            <div class="flex items-center gap-3">
              <Linkedin :size="18" />
              <span>LinkedIn</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
