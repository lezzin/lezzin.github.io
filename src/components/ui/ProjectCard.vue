<script lang="ts" setup>
import { ChevronDown } from 'lucide-vue-next';
import { computed, ref } from 'vue';
import { type Project } from '../../data/projects';
import Button from './Button.vue';

defineProps<{
    project: Project;
}>();

const isExpanded = ref(false);

const toggleExpanded = () => {
    isExpanded.value = !isExpanded.value;
};

const buttonText = computed(() => {
    return isExpanded.value ? "Mostrar menos" : "Ler estudo de caso completo";
});

const expandedClass = computed(() => {
    return `grid transition-all duration-300 ${isExpanded.value ? 'grid-rows-[1fr] opacity-100 mt-5' : 'grid-rows-[0fr] opacity-0'}`;
});
</script>

<template>
    <article class="border border-border dark:border-gray-700 rounded-lg p-6 md:p-8">
        <div class="">
            <h3 class="text-xl font-semibold dark:text-gray-100">{{ project.name }}</h3>

            <div class="space-y-4 my-6">
                <div>
                    <h4 class="project-subtitle">
                        Contexto
                    </h4>
                    <p class="project-text">{{ project.context }}</p>
                </div>

                <div>
                    <h4 class="project-subtitle">
                        Por que foi importante
                    </h4>
                    <p class="project-text">{{ project.importance }}</p>
                </div>
            </div>

            <Button @click="toggleExpanded" variant="outline">
                <span class="flex gap-2 items-center">
                    <ChevronDown :class="['transition-transform', isExpanded && 'rotate-180']" />
                    {{ buttonText }}
                </span>
            </Button>

            <div class="grid transition-all duration-300" :class="expandedClass">
                <div class="overflow-hidden">
                    <div class="space-y-6">
                        <div>
                            <h4 class="project-subtitle">
                                Descrição do Problema
                            </h4>
                            <p class="project-text">{{ project.problem }}</p>
                        </div>

                        <div>
                            <h4 class="project-subtitle">
                                Decisões de Design & Arquitetura
                            </h4>
                            <ul class="space-y-2">
                                <li v-for="(decision, index) in project.decisions" :key="index"
                                    class="project-text flex gap-3">
                                    <span class="text-gray-500 select-none">-</span>
                                    <span>{{ decision }}</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 class="project-subtitle">
                                Trade-offs & Justificativas
                            </h4>
                            <p class="project-text">{{ project.tradeoffs }}</p>
                        </div>

                        <div class="bg-gray-100 dark:bg-gray-800 rounded-md p-4">
                            <h4 class="project-subtitle">
                                Resultado
                            </h4>

                            <p class="project-text font-medium">
                                {{ project.outcome }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<style scoped lang="postcss">
.project-subtitle {
    @apply text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wide mb-4;
}

.project-text {
    @apply text-gray-500 dark:text-gray-300 leading-relaxed;
}
</style>