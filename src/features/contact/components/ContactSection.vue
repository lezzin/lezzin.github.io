<script lang="ts" setup>
import { Github, Linkedin, Mail, Copy, Check } from 'lucide-vue-next'
import Title from '../../../components/common/Title.vue'
import Subtitle from '../../../components/common/Subtitle.vue'
import Button from '../../../components/common/Button.vue'
import { ref } from 'vue'
import { motion } from 'motion-v'
import { containerVariants, itemVariants } from '../../../constants/motion'

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
  <section id="contact" class="py-20 scroll-mt-12">
    <motion.div class="max-w-3xl" :variants="containerVariants" initial="hidden" while-in-view="visible"
      :viewport="{ once: true, margin: '-100px' }">
      <motion.div :variants="itemVariants">
        <Title class="!mb-4">Vamos conversar?</Title>
      </motion.div>

      <motion.div :variants="itemVariants">
        <Subtitle class="mb-12 font-handwritten text-xl">
          Estou sempre interessado em ouvir sobre novos projetos desafiadores, arquitetura de sistemas
          e oportunidades de colaboração no ecossistema Backend.
        </Subtitle>
      </motion.div>

      <div class="flex flex-col gap-6">
        <motion.div :variants="itemVariants" class="flex flex-wrap gap-4">
          <Button variant="default" as-child :href="`mailto:${email}`" size="sm">
            <div class="flex items-center gap-2">
              <Mail :size="18" />
              <span class="font-semibold">{{ email }}</span>
            </div>
          </Button>

          <Button variant="outline" @click="copyEmail" size="sm">
            <div class="flex items-center gap-2">
              <Check v-if="copied" :size="18" />
              <Copy v-else :size="18" />
              <span>{{ copied ? 'Copiado!' : 'Copiar' }}</span>
            </div>
          </Button>
        </motion.div>

        <motion.div :variants="itemVariants" class="flex flex-wrap gap-4">
          <Button variant="outline" as-child href="https://github.com/lezzin" target="_blank" class="h-12 px-6"
            size="sm">
            <div class="flex items-center gap-3">
              <Github :size="18" />
              <span>GitHub</span>
            </div>
          </Button>

          <Button variant="outline" as-child href="https://www.linkedin.com/in/leandro-adrian" target="_blank"
            class="h-12 px-6" size="sm">
            <div class="flex items-center gap-3">
              <Linkedin :size="18" />
              <span>LinkedIn</span>
            </div>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  </section>
</template>
