<script lang="ts" setup>
import skillCategories from '../../data/skills';
import Divider from '../ui/Divider.vue';
import Title from '../ui/Title.vue';
</script>

<template>
    <section id="skills" class="py-20">
        <Title>Habilidades & Ferramentas</Title>

        <div class="grid gap-10 md:gap-12">
            <div v-for="category in skillCategories" :key="category.category" class="space-y-4">
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wide mb-4">
                    {{ category.category }}
                </h3>

                <div class="flex flex-wrap gap-2">
                    <span v-for="skill in category.skills" :key="skill"
                        class="px-3 py-1.5 text-sm bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 rounded-md">
                        {{ skill }}
                    </span>
                </div>
            </div>
        </div>

        <Divider />
    </section>
</template>
