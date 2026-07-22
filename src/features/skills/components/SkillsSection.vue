<script lang="ts" setup>
import { skillCategories } from '../../../constants/skills'
import Title from '../../../components/common/Title.vue'
import SkillItem from './SkillItem.vue'
</script>

<template>
  <section id="skills" class="scroll-mt-32">
    <Title>Habilidades & Ferramentas</Title>

    <div class="grid gap-4 md:grid-cols-2">
      <SkillItem
        v-for="(category, index) in skillCategories"
        :key="category.category"
        :index="index"
        :category="category"
      />
    </div>
  </section>
</template>
