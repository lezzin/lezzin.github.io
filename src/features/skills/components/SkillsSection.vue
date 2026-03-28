<script lang="ts" setup>
import { skillCategories } from '../../../constants/skills'
import Divider from '../../../components/common/Divider.vue'
import SkillItem from './SkillItem.vue'
import Title from '../../../components/common/Title.vue'
import { motion } from 'motion-v'
import { containerVariants, itemVariants } from '../../../constants/motion'
</script>

<template>
  <section id="skills" class="py-20 scroll-mt-12">
    <motion.div
      :variants="containerVariants"
      initial="hidden"
      while-in-view="visible"
      :viewport="{ once: true, margin: '-100px' }"
    >
      <motion.div :variants="itemVariants">
        <Title>Habilidades & Ferramentas</Title>
      </motion.div>

      <div class="grid gap-8 md:grid-cols-2">
        <motion.div
          v-for="category in skillCategories"
          :key="category.category"
          :variants="itemVariants"
          class="p-6 rough-border hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-300"
        >
          <div class="flex items-center gap-3 mb-6">
            <component :is="category.icon" class="text-zinc-900 dark:text-zinc-100" :size="20" />
            <h3
              class="text-base font-handwritten text-gray-900 dark:text-gray-100 uppercase tracking-widest"
            >
              {{ category.category }}
            </h3>
          </div>

          <div class="flex flex-wrap gap-2">
            <SkillItem v-for="skill in category.skills" :key="skill" :skill="skill" />
          </div>
        </motion.div>
      </div>
    </motion.div>

    <Divider />
  </section>
</template>
