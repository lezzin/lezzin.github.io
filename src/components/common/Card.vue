<script lang="ts" setup>
defineProps<{
  title?: string
  image?: string
}>()
</script>

<template>
  <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
    <img :src="image" alt="" v-if="image" class="object-cover w-full aspect-[16/7]" />

    <div class="p-6 md:p-8">
      <h3 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 leading-tight mb-5" v-if="title">
        {{ title }}
      </h3>

      <slot />
    </div>
  </div>
</template>
