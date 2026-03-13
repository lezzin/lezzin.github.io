<script lang="ts" setup>
import { experiences } from '../../../constants/experiences'
import Divider from '../../../components/common/Divider.vue'
import ExperienceItem from './ExperienceItem.vue'
import Title from '../../../components/common/Title.vue'
</script>

<template>
  <section id="experience" class="py-20">
    <Title>Experiência Profissional</Title>

    <div class="space-y-12">
      <ExperienceItem v-for="(experience, index) in experiences" :key="index" :experience="experience" />
    </div>

    <Divider />
  </section>
</template>
