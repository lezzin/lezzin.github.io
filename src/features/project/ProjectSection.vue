<script lang="ts" setup>
import { computed } from 'vue'
import { useLanguage } from '../../composables/useLanguage'
import { experiencesTranslations } from '../../i18n/experiences'
import { uiTranslations } from '../../i18n/ui';
import ProjectItem from './ProjectItem.vue';
import { FolderCode } from 'lucide-vue-next';

const { language } = useLanguage()
const projects = computed(() => experiencesTranslations[language.value].map(experience => experience.projects).flat());
const t = computed(() => uiTranslations[language.value])
</script>

<template>
  <section id="projects" class="scroll-mt-20">
    <div class="flex items-center gap-3 mb-6">
      <div class="flex items-center justify-center size-9 rounded-xl bg-emerald-100 dark:bg-emerald-900/40">
        <FolderCode :size="16" class="text-emerald-600 dark:text-emerald-400" />
      </div>

      <h2 class="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
        {{ t.projects.title }}
      </h2>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <ProjectItem v-for="(project, index) in projects" :key="index" :project="project" :index="index" />
    </div>
  </section>
</template>
