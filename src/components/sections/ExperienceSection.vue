<script lang="ts" setup>
import experiences from '../../data/experiences';
import Divider from '../ui/Divider.vue';
import Title from '../ui/Title.vue';
</script>

<template>
    <section id="experience" class="py-20">
        <Title>Experiência Profissional</Title>

        <div class="space-y-12">
            <article v-for="(experience, index) in experiences" :key="index" class="group">
                <div class="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
                    <div class="text-sm text-gray-500 dark:text-gray-300">
                        {{ experience.period }}
                    </div>

                    <div class="space-y-2">
                        <h3 class="text-lg font-medium dark:text-gray-100">{{ experience.title }}</h3>
                        <p class="text-gray-500 dark:text-gray-300 font-medium">{{ experience.company }}</p>
                        <p class="text-gray-500 dark:text-gray-300 leading-relaxed pt-2">
                            {{ experience.description }}
                        </p>
                    </div>
                </div>
            </article>
        </div>

        <Divider />
    </section>
</template>
