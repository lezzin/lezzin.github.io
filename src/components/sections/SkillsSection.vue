<script lang="ts" setup>
import skillCategories from '../../data/skills';
import Divider from '../ui/Divider.vue';
import Title from '../ui/Title.vue';
</script>

<template>
    <section id="skills" class="py-20">
        <Title>Habilidades & Ferramentas</Title>

        <div class="grid gap-x-12 gap-y-10 md:grid-cols-2">
            <div v-for="category in skillCategories" :key="category.category" class="group">
                <h3 class="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-5">
                    {{ category.category }}
                </h3>

                <div class="flex flex-wrap gap-2">
                    <span v-for="skill in category.skills" :key="skill" class="px-3 py-1.5 text-sm font-medium 
                               bg-white dark:bg-gray-900 
                               text-gray-700 dark:text-gray-300 
                               border border-gray-200 dark:border-gray-800 
                               rounded-lg shadow-sm
                               transition-all duration-300
                               hover:border-blue-500 dark:hover:border-blue-400 
                               hover:translate-y-[-2px]">
                        {{ skill }}
                    </span>
                </div>
            </div>
        </div>

        <Divider />
    </section>
</template>