<script lang="ts" setup>
import skillCategories from '../../data/skills'
import Divider from '../ui/Divider.vue'
import SkillItem from '../ui/SkillItem.vue'
import Title from '../ui/Title.vue'
import { 
  Database, 
  Layers, 
  Server, 
  Zap, 
  Cloud, 
  Monitor 
} from 'lucide-vue-next'

const categoryIcons: Record<string, any> = {
  'Arquitetura & Engenharia': Layers,
  'Backend & Frameworks': Server,
  'Mensageria & Performance': Zap,
  'Bancos de Dados': Database,
  'Infraestrutura & DevOps': Cloud,
  'Frontend & Ferramentas': Monitor
}
</script>

<template>
  <section id="skills" class="py-20">
    <Title>Habilidades & Ferramentas</Title>

    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="category in skillCategories" :key="category.category" 
        class="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 hover:border-green-500/30 transition-all duration-300">
        <div class="flex items-center gap-3 mb-6">
          <component :is="categoryIcons[category.category] || Server" 
            class="text-green-600 dark:text-green-400" :size="20" />
          <h3 class="text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-widest">
            {{ category.category }}
          </h3>
        </div>

        <div class="flex flex-wrap gap-2">
          <SkillItem v-for="skill in category.skills" :key="skill" :skill="skill" />
        </div>
      </div>
    </div>

    <Divider />
  </section>
</template>
