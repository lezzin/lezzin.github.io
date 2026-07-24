<script lang="ts" setup>
import { computed } from 'vue'
import { useLanguage } from '../../../composables/useLanguage'
import { experiencesTranslations } from '../../../i18n/experiences'
import { uiTranslations } from '../../../i18n/ui'
import ExperienceItem from './ExperienceItem.vue'
import Title from '../../../components/common/Title.vue'

const { language } = useLanguage()
const experiences = computed(() => experiencesTranslations[language.value])
const t = computed(() => uiTranslations[language.value])
</script>

<template>
  <section id="experience" class="scroll-mt-32">
    <Title>{{ t.experience.title }}</Title>

    <div class="space-y-8">
      <ExperienceItem
        v-for="(experience, index) in experiences"
        :key="index"
        :experience="experience"
      />
    </div>
  </section>
</template>
