<script lang="ts" setup>
import { ChevronDown, CheckCircle2 } from 'lucide-vue-next'
import { computed } from 'vue'
import { type Project } from '../../../types/project'
import Button from '../../../components/common/Button.vue'
import { formatText } from '../../../utils/markdown'
import { motion } from 'motion-v'
import { roughVariants } from '../../../constants/motion'

const props = defineProps<{
  project: Project
  isExpanded: boolean
}>()

const emit = defineEmits(['toggle'])

const contentId = computed(
  () => `project-content-${props.project.name.replace(/\s+/g, '-').toLowerCase()}`
)

const toggleExpanded = () => {
  emit('toggle')
}

const buttonText = computed(() => {
  return props.isExpanded ? 'Mostrar menos' : 'Ler estudo de caso completo'
})

const expandedClass = computed(() => {
  return `grid transition-all duration-500 ease-in-out ${props.isExpanded ? 'grid-rows-[1fr] opacity-100 mt-8' : 'grid-rows-[0fr] opacity-0'}`
})
</script>

<template>
  <motion.article :variants="roughVariants" initial="hidden" animate="visible" while-hover="hover"
    class="group rough-border p-6 md:p-8 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-300 origin-center">
    <div class="flex flex-col gap-4 mb-6">
      <h3 class="text-xl md:text-3xl font-handwritten text-gray-900 dark:text-gray-100 tracking-tight">
        {{ project.name }}
      </h3>

      <div class="flex flex-wrap gap-2">
        <span v-for="tech in project.technologies" :key="tech"
          class="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 rounded-rough-2 border-2 border-zinc-900 dark:border-zinc-100">
          {{ tech }}
        </span>
      </div>
    </div>

    <div class="space-y-6 mb-8">
      <section>
        <h4 class="project-subtitle">Contexto</h4>
        <p class="project-text" v-html="formatText(project.context)" />
      </section>

      <section>
        <h4 class="project-subtitle">Impacto no Negócio</h4>
        <p class="project-text" v-html="formatText(project.importance)" />
      </section>
    </div>

    <Button @click="toggleExpanded" variant="outline" :aria-expanded="isExpanded" :aria-controls="contentId"
      class="w-full md:w-auto font-medium group-hover:bg-green-50 dark:group-hover:bg-green-950/20">
      <span class="flex gap-2 items-center">
        <ChevronDown :size="18" :class="['transition-transform duration-300', isExpanded && 'rotate-180']" />
        {{ buttonText }}
      </span>
    </Button>

    <div :id="contentId" :class="expandedClass" :aria-hidden="!isExpanded">
      <div class="overflow-hidden">
        <div class="space-y-10 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <section>
            <h4 class="text-xs font-bold text-red-500 dark:text-red-400 uppercase tracking-[0.15em] mb-3">
              O Desafio Técnico
            </h4>
            <p class="project-text" v-html="formatText(project.problem)" />
          </section>

          <section>
            <h4 class="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-[0.15em] mb-4">
              Decisões de Engenharia
            </h4>
            <ul class="grid gap-4">
              <li v-for="(decision, index) in project.decisions" :key="index"
                class="project-text flex gap-3 items-start">
                <CheckCircle2 :size="18" class="text-green-500 mt-1 flex-shrink-0" />
                <span v-html="formatText(decision)" />
              </li>
            </ul>
          </section>

          <section>
            <h4 class="project-subtitle text-gray-400 dark:text-gray-500">Análise de Trade-offs</h4>
            <div class="relative pl-6">
              <div class="absolute inset-y-0 left-0 w-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              <p class="project-text italic" v-html="formatText(project.tradeoffs)" />
            </div>
          </section>

          <footer
            class="rounded-xl p-6 bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30">
            <h4 class="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-widest mb-3">
              Resultado Final
            </h4>
            <p class="text-green-900 dark:text-green-50 font-bold text-lg leading-relaxed"
              v-html="formatText(project.outcome)" />
          </footer>
        </div>
      </div>
    </div>
  </motion.article>
</template>

<style scoped lang="postcss">
.project-subtitle {
  @apply text-xs font-bold text-gray-800 dark:text-gray-200 uppercase mb-2 tracking-[0.15em];
}

.project-text {
  @apply text-gray-600 dark:text-gray-300 leading-relaxed;
}
</style>