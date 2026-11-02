<script setup lang="ts">
import { computed } from 'vue'
import { ToolCase } from 'lucide-vue-next'
import { useLanguage } from '../../../composables/useLanguage'
import { skillCategoriesTranslations } from '../../../i18n/skills'
import { uiTranslations } from '../../../i18n/ui'
import SkillItem from './SkillItem.vue'
import SectionTitle from '../../../components/common/SectionTitle.vue'

const { language } = useLanguage()
const skillCategories = computed(() => skillCategoriesTranslations[language.value])
const t = computed(() => uiTranslations[language.value])
</script>

<template>
  <section id="skills" class="scroll-mt-20">
    <SectionTitle :title="t.skills.title" :icon="ToolCase" />

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
