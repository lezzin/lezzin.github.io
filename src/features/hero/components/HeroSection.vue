<script lang="ts" setup>
import { ArrowDown, FileText, Mail } from 'lucide-vue-next'
import Button from '../../../components/common/Button.vue'
import Divider from '../../../components/common/Divider.vue'
import { motion } from 'motion-v';
import { containerVariants, itemVariants, roughVariants } from '../../../constants/motion';
</script>

<template>
  <section id="home" class="min-h-[85vh] flex flex-col justify-center py-16">
    <motion.div :variants="containerVariants" initial="hidden" animate="visible" class="space-y-8 max-w-3xl">
      <div class="space-y-3">
        <motion.p :variants="itemVariants"
          class="text-green-600 dark:text-green-400 text-sm font-bold tracking-widest uppercase">
          Desenvolvedor Backend
        </motion.p>

        <motion.h1 :variants="roughVariants"
          class="dark:text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
          Leandro Adrian <br class="hidden md:block" />
          da Silva
        </motion.h1>
      </div>

      <motion.p :variants="itemVariants" class="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
        Desenvolvedor Backend focado na construção de sistemas robustos, escaláveis e de alta performance. Especializado
        em arquiteturas modernas com
        <motion.mark :initial="{ rotate: -1, scale: 0.95 }" :animate="{ rotate: 1, scale: 1 }" :transition="{
          repeat:
            Infinity, repeatType: 'reverse', duration: 2
        }" class=" mark font-medium inline-block px-1">NestJS e Laravel
        </motion.mark>,
        busco transformar desafios técnicos em soluções eficientes, bem documentadas e de alto impacto para o negócio.
      </motion.p>

      <motion.div :variants="itemVariants" class="flex flex-wrap gap-4 pt-4">
        <Button variant="default" as-child href="#projects">
          <div class="flex items-center">
            <motion.div :animate="{ y: [0, -4, 0] }" :transition="{
              repeat: Infinity, duration: 1.5, ease: 'easeInOut'
            }">
              <ArrowDown :size="18" class="mr-2" />
            </motion.div>
            Ver Projetos
          </div>
        </Button>

        <div class="flex gap-4">
          <Button variant="outline" as-child href="#contact">
            <div class="flex items-center">
              <Mail class="mr-2 h-4 w-4" />
              Agendar Conversa
            </div>
          </Button>

          <Button variant="outline" as-child href="/cv.pdf" target="_blank">
            <div class="flex items-center">
              <FileText class="mr-2 h-4 w-4" />
              CV
            </div>
          </Button>
        </div>
      </motion.div>
    </motion.div>

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
