<script lang="ts" setup>
import { Github, Linkedin, Mail } from 'lucide-vue-next'
import Title from '../ui/Title.vue'
import Subtitle from '../ui/Subtitle.vue'
import Button from '../ui/Button.vue'
</script>

<template>
  <section id="contact" class="py-20">
    <div class="max-w-3xl">
      <Title class="!mb-4">Vamos conversar?</Title>

      <Subtitle class="mb-8">
        Estou sempre interessado em ouvir sobre novos projetos desafiadores, arquitetura de sistemas
        e oportunidades de colaboração no ecossistema Backend.
      </Subtitle>

      <div class="grid grid-cols-1 sm:flex sm:flex-wrap gap-4">
        <Button
          variant="default"
          as-child
          href="mailto:leandrinsilva22@gmail.com"
          class="footer-link px-6"
        >
          <div class="flex items-center gap-3">
            <Mail :size="18" />
            <span>leandrinsilva22@gmail.com</span>
          </div>
        </Button>

        <Button
          variant="outline"
          as-child
          href="https://github.com/lezzin"
          target="_blank"
          class="footer-link"
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
          class="footer-link"
        >
          <div class="flex items-center gap-3">
            <Linkedin :size="18" />
            <span>LinkedIn</span>
          </div>
        </Button>
      </div>
    </div>
  </section>
</template>
