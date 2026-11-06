<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    image?: string
    imagePosition?: 'top' | 'bottom' | 'left' | 'right'
  }>(),
  {
    imagePosition: 'top',
  }
)
</script>

<template>
  <div
    class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
    :class="{
      'flex flex-col': imagePosition === 'top' || imagePosition === 'bottom',
      'flex flex-col md:flex-row': imagePosition === 'left' || imagePosition === 'right',
    }">
    <div v-if="$slots.image" :class="{
      'order-1': imagePosition === 'top' || imagePosition === 'left',
      'order-2': imagePosition === 'bottom' || imagePosition === 'right',
      'md:w-1/3 md:shrink-0': imagePosition === 'left' || imagePosition === 'right',
    }">
      <slot name="image" />
    </div>

    <div class="p-6 md:p-8 flex-1" :class="{
      'order-2': imagePosition === 'top' || imagePosition === 'left',
      'order-1': imagePosition === 'bottom' || imagePosition === 'right',
    }">
      <h3 v-if="title" class="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 leading-tight mb-5">
        {{ title }}
      </h3>

      <slot />
    </div>
  </div>
</template>