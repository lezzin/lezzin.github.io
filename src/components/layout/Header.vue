<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ThemeToggle from './ThemeToggle.vue'
import { motion } from 'motion-v'

const isScrolled = ref(false)
const activeSection = ref('home')
const scrollProgress = ref(0)

const navItems = [
  { name: 'Início', href: '#' },
  { name: 'Experiência', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Contato', href: '#contact' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20

  const totalHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = (window.scrollY / totalHeight) * 100

  const sections = navItems.map((item) => item.href.replace('#', '')).filter(Boolean)

  for (const section of sections.reverse()) {
    const el = document.getElementById(section)
    if (el && window.scrollY >= el.offsetTop - 150) {
      activeSection.value = section
      break
    }
  }

  if (window.scrollY < 100) activeSection.value = 'home'
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <motion.header
    :initial="{ y: -80, opacity: 0 }"
    :animate="{ y: 0, opacity: 1 }"
    :transition="{ duration: 0.5, ease: 'easeOut' }"
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
      isScrolled
        ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-zinc-200 dark:border-zinc-800 py-3'
        : 'bg-transparent border-transparent py-5',
    ]"
  >
    <motion.div
      class="absolute bottom-0 left-0 h-[3px] bg-zinc-900 dark:bg-white"
      :animate="{ width: `${scrollProgress}%` }"
      :transition="{ duration: 0.15 }"
    />

    <div class="max-w-4xl mx-auto px-6 md:px-8 flex items-center justify-between">
      <motion.a
        href="#"
        class="font-handwritten text-2xl tracking-tight text-zinc-900 dark:text-white"
        while-hover="{ rotate: [-2,2,-1,0], scale: 1.05 }"
        :transition="{ duration: 0.4 }"
      >
        L<span class="text-zinc-400">.</span>Adrian
      </motion.a>

      <nav class="hidden md:flex items-center gap-8">
        <motion.a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          class="relative text-base font-bold text-zinc-500 dark:text-zinc-400"
          while-hover="{ scale: 1.1, y: -2 }"
          :transition="{ type: 'spring', stiffness: 300 }"
        >
          {{ item.name }}

          <motion.span
            v-if="
              activeSection === item.href.replace('#', '') ||
              (item.href === '#' && activeSection === 'home')
            "
            layoutId="navIndicator"
            class="absolute left-0 -bottom-1 w-full h-[2px] bg-zinc-900 dark:bg-white"
          />
        </motion.a>
      </nav>

      <div class="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </div>
  </motion.header>
</template>
