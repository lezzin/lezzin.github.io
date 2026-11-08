<script setup lang="ts">
import { ToolCase } from 'lucide-vue-next'
import SkillItem from './SkillItem.vue'
import SectionTitle from '../../../components/common/SectionTitle.vue'
import { skillCategories } from '../../../constants/skills.ts'
</script>

<template>
  <section id="skills" class="scroll-mt-20">
    <SectionTitle title="Habilidades e ferramentas" :icon="ToolCase" />

    <div class="grid gap-6 sm:grid-cols-2">
      <SkillItem
        v-for="(category, index) in skillCategories"
        :key="category.category"
        :index="index"
        :category="category"
      />
    </div>
  </section>
</template>
