<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ThemeToggle from './ThemeToggle.vue'
import { navItems } from '../../constants/nav-items.ts'
import NavItems from './NavItems.vue'

const isScrolled = ref(false)
const activeSection = ref('home')
const scrollProgress = ref(0)

let observer: IntersectionObserver | null = null

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20

  const totalHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = (window.scrollY / totalHeight) * 100
}

const setupObserver = () => {
  const sectionIds = navItems.map((item) => item.href.replace('#', '')).filter(Boolean)

  const order = new Map(sectionIds.map((id, index) => [id, index]))
  const visible = new Set<string>()

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id
        if (entry.isIntersecting) {
          visible.add(id)
          return
        }

        visible.delete(id)
      })

      if (visible.size === 0) return

      const active = [...visible].sort((a, b) => (order.get(b) ?? 0) - (order.get(a) ?? 0))[0]
      if (!active) return

      activeSection.value = active
    },
    {
      rootMargin: '-150px 0px -50% 0px',
      threshold: 0,
    }
  )

  sectionIds.forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer!.observe(el)
  })

  const homeObserver = new IntersectionObserver(
    ([entry]) => {
      if (!entry) return
      if (entry.isIntersecting) activeSection.value = 'home'
    },
    { rootMargin: '0px 0px -90% 0px', threshold: 0 }
  )

  const homeEl = document.getElementById('home') ?? document.body
  homeObserver.observe(homeEl)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  setupObserver()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  observer?.disconnect()
})
</script>

<template>
  <header
    :class="[
      'fixed left-0 right-0 z-40 flex justify-center pointer-events-none transition-all duration-500 ease-out',
      isScrolled ? 'top-4 px-4 md:px-8' : 'top-0 px-0',
    ]"
  >
    <div
      :class="[
        'relative w-full max-w-5xl flex items-center justify-between ps-6 pe-3 py-2.5 overflow-hidden transition-all duration-300 pointer-events-auto rounded-rough-pill shadow-sm border-2',
        isScrolled
          ? 'bg-white dark:bg-zinc-950 border-zinc-300 dark:border-zinc-800'
          : 'border-transparent',
      ]"
    >
      <a href="#" class="font-handwritten text-2xl tracking-tight text-board-text">
        L<span class="text-green-600 dark:text-green-400">.</span>Adrian
      </a>

      <NavItems :active="activeSection" class="hidden md:flex" />

      <div class="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>

<style scoped>
.sketch-draw {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: draw-sketch 0.35s ease forwards;
}

@keyframes draw-sketch {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
