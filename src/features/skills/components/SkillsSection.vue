<script lang="ts" setup>
import { computed } from 'vue'
import { useLanguage } from '../../../composables/useLanguage'
import { skillCategoriesTranslations } from '../../../i18n/skills'
import { uiTranslations } from '../../../i18n/ui'
import Title from '../../../components/common/Title.vue'
import SkillItem from './SkillItem.vue'

const { language } = useLanguage()
const skillCategories = computed(() => skillCategoriesTranslations[language.value])
const t = computed(() => uiTranslations[language.value])
</script>

<template>
  <section id="skills" class="scroll-mt-20">
    <Title>{{ t.skills.title }}</Title>

    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <SkillItem
        v-for="(category, index) in skillCategories"
        :key="category.category"
        :index="index"
        :category="category"
      />
    </div>
  </section>
</template>
