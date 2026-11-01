<script lang="ts" setup>
import { computed } from 'vue'
import { useLanguage } from '../../../composables/useLanguage'
import { skillCategoriesTranslations } from '../../../i18n/skills'
import { uiTranslations } from '../../../i18n/ui'
import SkillItem from './SkillItem.vue'
import { ToolCase } from 'lucide-vue-next'

const { language } = useLanguage()
const skillCategories = computed(() => skillCategoriesTranslations[language.value])
const t = computed(() => uiTranslations[language.value])
</script>

<template>
  <section id="skills" class="scroll-mt-20">
    <div class="flex items-center gap-3 mb-6">
      <div class="flex items-center justify-center size-9 rounded-xl bg-emerald-100 dark:bg-emerald-900/40">
        <ToolCase :size="16" class="text-emerald-600 dark:text-emerald-400" />
      </div>
      <h2 class="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
        {{ t.skills.title }}
      </h2>
    </div>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <SkillItem v-for="(category, index) in skillCategories" :key="category.category" :index="index"
        :category="category" />
    </div>
  </section>
</template>
