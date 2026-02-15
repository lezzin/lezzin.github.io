<script lang="ts" setup>
import skillCategories from '../../data/skills';
import Divider from '../ui/Divider.vue';
import SkillItem from '../ui/SkillItem.vue';
import Title from '../ui/Title.vue';
</script>

<template>
    <section id="skills" class="py-20">
        <Title>Habilidades & Ferramentas</Title>

        <div class="grid gap-x-12 gap-y-10 md:grid-cols-2">
            <div v-for="category in skillCategories" :key="category.category" class="group">
                <h3 class="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-widest mb-5">
                    {{ category.category }}
                </h3>

                <div class="flex flex-wrap gap-2">
                    <SkillItem v-for="skill in category.skills" :key="skill" :skill="skill" />
                </div>
            </div>
        </div>

        <Divider />
    </section>
</template>