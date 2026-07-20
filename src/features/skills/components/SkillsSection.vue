<script lang="ts" setup>
import { skillCategories } from '../../../constants/skills'
import Title from '../../../components/common/Title.vue'
import { motion } from 'motion-v'
import { containerVariants, itemVariants } from '../../../constants/motion'
import SkillItem from './SkillItem.vue'
</script>

<template>
  <section id="skills" class="scroll-mt-32">
    <motion.div
      :variants="containerVariants"
      initial="hidden"
      while-in-view="visible"
      :viewport="{ once: true, margin: '-100px' }"
    >
      <motion.div :variants="itemVariants">
        <Title>Habilidades & Ferramentas</Title>
      </motion.div>

      <div class="grid gap-4 md:grid-cols-2">
        <SkillItem
          v-for="(category, index) in skillCategories"
          :key="category.category"
          :index="index"
          :category="category"
        />
      </div>
    </motion.div>
  </section>
</template>
