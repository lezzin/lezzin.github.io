<script setup lang="ts">
import { computed } from 'vue'
import { Briefcase } from 'lucide-vue-next'
import { useLanguage } from '../../../composables/useLanguage'
import { experiencesTranslations } from '../../../i18n/experiences'
import { uiTranslations } from '../../../i18n/ui'
import ExperienceItem from './ExperienceItem.vue'
import SectionTitle from '../../../components/common/SectionTitle.vue'

const { language } = useLanguage()
const experiences = computed(() => experiencesTranslations[language.value])
const t = computed(() => uiTranslations[language.value])
</script>

<template>
  <section id="experience" class="scroll-mt-20">
    <SectionTitle :title="t.experience.title" :icon="Briefcase" />

    <div class="flex flex-col gap-6">
      <ExperienceItem
        v-for="(experience, index) in experiences"
        :key="`${experience.company}-${index}`"
        :experience="experience"
        :index="index"
      />
    </div>
  </section>
</template>
