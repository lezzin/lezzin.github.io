<script setup lang="ts">
defineProps<{
  color: string
}>()
</script>

<template>
  <div
    class="absolute inset-0 pointer-events-none opacity-60"
    :style="{
      backgroundImage: `
        repeating-linear-gradient(
            -45deg,
            transparent 0px,
            transparent 12px,
            ${color} 12px,
            ${color} 14px
        )
        `,
    }"
  />
</template>
