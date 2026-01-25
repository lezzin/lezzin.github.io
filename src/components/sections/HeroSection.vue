<script lang="ts" setup>
import { ArrowDown, FileText, Mail } from 'lucide-vue-next';
import Button from '../ui/Button.vue';
import Divider from '../ui/Divider.vue';
</script>

<template>
    <section class="min-h-[85vh] flex flex-col justify-center py-20 md:py-32">
        <div class="space-y-8">
            <div class="space-y-2">
                <p class="text-gray-500 dark:text-gray-300 text-sm tracking-wide uppercase">
                    Desenvolvedor Backend
                </p>

                <h1 class="dark:text-white text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
                    Leandro Adrian da Silva
                </h1>
            </div>

            <p class="text-lg md:text-xl text-gray-500 dark:text-gray-300 max-w-2xl leading-relaxed">
                Desenvolvo sistemas backend escaláveis e resilientes, com foco em performance,
                manutenibilidade e impacto real no negócio. Tenho uma base sólida em engenharia
                de software e experiência na construção de soluções confiáveis que suportam
                crescimento e alta demanda.
            </p>

            <div class="flex flex-wrap gap-3 pt-4">
                <Button variant="default" as-child href="#projects" class="flex items-center">
                    <ArrowDown :size="16" class="mr-2" />
                    Ver Projetos
                </Button>

                <Button variant="outline" as-child href="#contact" class="flex items-center">
                    <Mail class="mr-2 h-4 w-4" />
                    Contato
                </Button>

                <Button variant="outline" as-child href="/cv.pdf" target="_blank" rel="noopener noreferrer"
                    class="flex items-center">
                    <FileText class="mr-2 h-4 w-4" />
                    Baixar CV
                </Button>
            </div>
        </div>

        <Divider />
    </section>
</template>
