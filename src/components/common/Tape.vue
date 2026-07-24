<script setup lang="ts">
defineProps<{
  color: string
}>()
</script>

<template>
  <span
    :class="['absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 rotate-[-3deg] z-10', color]"
    style="clip-path: polygon(4% 0, 96% 0, 100% 100%, 0 100%)"
  />
</template>
