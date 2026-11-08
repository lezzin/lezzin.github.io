<script setup lang="ts">
import { ArrowDown } from 'lucide-vue-next'
import Button from '../../../components/common/Button.vue'
import Card from '../../../components/common/Card.vue'
</script>

<template>
  <section id="home" class="pt-2 pb-2">
    <Card title="Leandro Adrian da Silva" image-position="left">
      <template #image>
        <img src="/profile.png" alt="Foto de perfil de Leandro Adrian" class="object-cover aspect-square" />
      </template>

      <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        Sou desenvolvedor backend com foco em Laravel e NestJS. Trabalho com filas e mensageria (RabbitMQ e Redis),
        otimização de consultas e relatórios, e microsserviços que processam dezenas de milhares de operações por dia,
        com código documentado e fácil de manter.
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
