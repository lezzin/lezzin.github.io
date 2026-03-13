<script lang="ts" setup>
import experiences from '../../data/experiences'
import Divider from '../ui/Divider.vue'
import ExperienceItem from '../ui/ExperienceItem.vue'
import Title from '../ui/Title.vue'
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
