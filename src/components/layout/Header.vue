<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

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

  // Update scroll progress
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = (window.scrollY / totalHeight) * 100

  // Determine active section
  const sections = navItems.map(item => item.href.replace('#', '')).filter(Boolean)
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
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
      isScrolled
        ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-zinc-200 dark:border-zinc-800 py-3'
        : 'bg-transparent border-transparent py-5',
    ]"
  >
    <!-- Progress Bar -->
    <div
      class="absolute bottom-0 left-0 h-[3px] bg-zinc-900 dark:bg-white transition-all duration-150"
      :style="{ width: `${scrollProgress}%` }"
    ></div>

    <div class="max-w-4xl mx-auto px-6 md:px-8 flex items-center justify-between">
      <a href="#" class="font-handwritten text-2xl tracking-tight text-zinc-900 dark:text-white">
        L<span class="text-zinc-400">.</span>Adrian
      </a>

      <nav class="hidden md:flex items-center gap-8">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          :class="[
            'text-base font-bold transition-all hover:scale-110',
            activeSection === item.href.replace('#', '') || (item.href === '#' && activeSection === 'home')
              ? 'text-zinc-900 dark:text-white underline underline-offset-4 decoration-2'
              : 'text-zinc-500 dark:text-zinc-400',
          ]"
        >
          {{ item.name }}
        </a>
      </nav>

      <div class="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>
