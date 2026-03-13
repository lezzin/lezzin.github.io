<template>
  <h2 class="text-3xl md:text-4xl font-bold tracking-tighter mb-12 text-zinc-900 dark:text-white flex items-center gap-2">
    <slot></slot>
    <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse-slow"></span>
  </h2>
</template>

<style scoped>
.animate-pulse-slow {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: .5;
    transform: scale(1.2);
  }
}
</style>
