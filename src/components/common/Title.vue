<template>
  <h2
    class="text-3xl md:text-5xl font-handwritten tracking-tight mb-12 text-zinc-900 dark:text-white flex items-center gap-4">
    <slot></slot>
    <span class="w-3 h-3 rounded-rough-1 bg-zinc-900 dark:bg-white animate-wobble"></span>
  </h2>
</template>

<style scoped>
.animate-wobble {
  animation: wobble 4s ease-in-out infinite;
}

@keyframes wobble {

  0%,
  100% {
    transform: rotate(-5deg) scale(1);
  }

  50% {
    transform: rotate(5deg) scale(1.1);
  }
}
</style>
