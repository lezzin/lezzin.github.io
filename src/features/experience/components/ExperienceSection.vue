<script setup lang="ts">
import { Briefcase } from 'lucide-vue-next'
import ExperienceItem from './ExperienceItem.vue'
import SectionTitle from '../../../components/common/SectionTitle.vue'
import { experiences } from '../../../constants/experiences.ts'
</script>

<template>
  <section id="experience" class="scroll-mt-20">
    <SectionTitle title="Experiência profissional" :icon="Briefcase" />

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
