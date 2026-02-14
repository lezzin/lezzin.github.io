<script lang="ts" setup>
import { ChevronDown, CheckCircle2 } from 'lucide-vue-next';
import { computed, ref } from 'vue';
import { type Project } from '../../data/projects';
import Button from './Button.vue';

const props = defineProps<{
    project: Project;
}>();

const isExpanded = ref(false);

const contentId = computed(() => `project-content-${props.project.name.replace(/\s+/g, '-').toLowerCase()}`);

const toggleExpanded = () => {
    isExpanded.value = !isExpanded.value;
};

const buttonText = computed(() => {
    return isExpanded.value ? "Mostrar menos" : "Ler estudo de caso completo";
});

const expandedClass = computed(() => {
    return `grid transition-all duration-500 ease-in-out ${isExpanded.value ? 'grid-rows-[1fr] opacity-100 mt-8' : 'grid-rows-[0fr] opacity-0'}`;
});
</script>

<template>
    <article class="border border-gray-200 dark:border-gray-700 rounded-xl p-6 md:p-8">
        <div class="flex flex-col gap-4 mb-6">
            <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                {{ project.name }}
            </h3>

            <div class="flex flex-wrap gap-2">
                <span v-for="tech in project.technologies.slice(0, 5)" :key="tech"
                    class="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-100 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800/50 rounded-md">
                    {{ tech }}
                </span>
            </div>
        </div>

        <div class="space-y-6 mb-8">
            <section>
                <h4 class="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.15em] mb-2">
                    Contexto
                </h4>
                <p class="project-text">
                    {{ project.context }}
                </p>
            </section>

            <section>
                <h4 class="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.15em] mb-2">
                    Impacto no Negócio
                </h4>
                <p class="project-text">
                    {{ project.importance }}
                </p>
            </section>
        </div>

        <Button @click="toggleExpanded" variant="outline" :aria-expanded="isExpanded" :aria-controls="contentId"
            class="w-full md:w-auto font-medium">
            <span class="flex gap-2 items-center">
                <ChevronDown :size="18" :class="['transition-transform duration-300', isExpanded && 'rotate-180']" />
                {{ buttonText }}
            </span>
        </Button>

        <div :id="contentId" :class="expandedClass" :aria-hidden="!isExpanded">
            <div class="overflow-hidden">
                <div class="space-y-10 pt-8 border-t border-gray-100 dark:border-gray-800">
                    <section>
                        <h4 class="text-xs font-bold text-red-500 dark:text-red-400 uppercase tracking-[0.15em] mb-3">
                            O Desafio Técnico
                        </h4>
                        <p class="project-text">
                            {{ project.problem }}
                        </p>
                    </section>

                    <section>
                        <h4 class="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.15em] mb-4">
                            Decisões de Engenharia
                        </h4>
                        <ul class="grid gap-4">
                            <li v-for="(decision, index) in project.decisions" :key="index"
                                class="project-text flex gap-3 items-center">
                                <CheckCircle2 :size="18" class="text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>{{ decision }}</span>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h4 class="project-subtitle">
                            Análise de Trade-offs
                        </h4>
                        <div class="relative pl-6">
                            <div class="absolute inset-y-0 left-0 w-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                            <p class="project-text italic">
                                {{ project.tradeoffs }}
                            </p>
                        </div>
                    </section>

                    <footer
                        class="rounded-xl p-6 bg-green-50/50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30">
                        <h4 class="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-widest mb-3">
                            Resultado Final
                        </h4>
                        <p class="text-green-900 dark:text-green-50 font-semibold leading-relaxed">
                            {{ project.outcome }}
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    </article>
</template>

<style scoped lang="postcss">
.project-subtitle {
    @apply text-xs font-bold text-gray-600 uppercase mb-3;
}

.project-text {
    @apply text-gray-600 dark:text-gray-300 leading-relaxed
}
</style>