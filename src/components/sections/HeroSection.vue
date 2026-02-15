<script lang="ts" setup>
import { ArrowDown, FileText, Mail } from 'lucide-vue-next'
import Button from '../ui/Button.vue'
import Divider from '../ui/Divider.vue'
</script>

<template>
  <section class="min-h-[85vh] flex flex-col justify-center py-20 md:py-32">
    <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 max-w-2xl">
      <div class="space-y-3">
        <p class="text-green-600 dark:text-green-400 text-sm font-bold tracking-widest uppercase">
          Desenvolvedor Backend
        </p>

        <h1
          class="dark:text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]"
        >
          Leandro Adrian <br class="hidden md:block" />
          da Silva
        </h1>
      </div>

      <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
        Desenvolvo sistemas backend de alta performance e arquiteturas resilientes. Focado em
        transformar desafios de negócio em soluções escaláveis utilizando
        <span class="text-gray-900 dark:text-gray-100 font-medium">
          NestJS, Laravel e mensageria distribuída.
        </span>
      </p>

      <div class="flex flex-wrap gap-4 pt-4">
        <Button variant="default" as-child href="#projects" class="px-6">
          <div class="flex items-center">
            <ArrowDown :size="18" class="mr-2 animate-bounce-subtle" />
            Ver Projetos
          </div>
        </Button>

        <div class="flex gap-3">
          <Button variant="outline" as-child href="#contact">
            <div class="flex items-center">
              <Mail class="mr-2 h-4 w-4" />
              Contato
            </div>
          </Button>

          <Button variant="outline" as-child href="/cv.pdf" target="_blank">
            <div class="flex items-center">
              <FileText class="mr-2 h-4 w-4" />
              CV
            </div>
          </Button>
        </div>
      </div>
    </div>

    <Divider />
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
