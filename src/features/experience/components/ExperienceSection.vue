<script lang="ts" setup>
import { experiences } from '../../../constants/experiences'
import Divider from '../../../components/common/Divider.vue'
import ExperienceItem from './ExperienceItem.vue'
import Title from '../../../components/common/Title.vue'
import { motion } from 'motion-v'
import { containerVariants } from '../../../constants/motion'
</script>

<template>
  <section id="experience" class="py-20 scroll-mt-12">
    <Title>Experiência Profissional</Title>

    <motion.div
      class="space-y-12"
      :variants="containerVariants"
      initial="hidden"
      while-in-view="visible"
      :viewport="{ once: true, margin: '-100px' }"
    >
      <ExperienceItem
        v-for="(experience, index) in experiences"
        :key="index"
        :experience="experience"
      />
    </motion.div>

    <Divider />
  </section>
</template>
