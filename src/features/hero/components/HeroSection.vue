<script setup lang="ts">
import { ArrowDown } from 'lucide-vue-next'
import Button from '../../../components/common/Button.vue'
import Card from '../../../components/common/Card.vue'
</script>

<template>
  <section id="home" class="pt-2 pb-2">
    <Card title="Leandro Adrian da Silva" image-position="left">
      <template #image>
        <picture>
          <source
            type="image/webp"
            srcset="/profile-380.webp 380w, /profile-760.webp 760w"
            sizes="(max-width: 640px) 378px, 378px"
          />
          <img
            src="/profile-380.webp"
            alt="Foto de perfil de Leandro Adrian"
            width="378"
            height="378"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            class="object-cover aspect-square w-full h-auto"
          />
        </picture>
      </template>

      <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        Sou desenvolvedor backend com foco em Laravel e NestJS. Trabalho com filas e mensageria
        (RabbitMQ e Redis), otimização de consultas e relatórios, e microsserviços que processam
        dezenas de milhares de operações por dia, com código documentado e fácil de manter.
      </p>

      <div class="grid md:grid-cols-2 gap-4 mt-6">
        <Button variant="card" color="indigo" as-child href="#experience">
          <ArrowDown :size="14" aria-hidden="true" />
          Ver experiências
        </Button>

        <Button variant="card" color="violet" as-child href="#projects">
          <ArrowDown :size="14" aria-hidden="true" />
          Ver projetos
        </Button>
      </div>
    </Card>
  </section>
</template>
