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
  { name: 'Contato', href: '#contact' },
]

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
  <motion.header
    :initial="{ y: -80, opacity: 0 }"
    :animate="{ y: 0, opacity: 1 }"
    :transition="{ duration: 0.5, ease: 'easeOut' }"
    :class="[
      'fixed left-0 right-0 z-40 flex justify-center pointer-events-none transition-all duration-500 ease-out',
      isScrolled ? 'top-4 px-4 md:px-8' : 'top-0 px-0',
    ]"
  >
    <div
      :class="[
        'relative w-full max-w-5xl flex items-center justify-between px-6 py-2.5 border-zinc-900 dark:border-zinc-100  overflow-hidden transition-all duration-300 pointer-events-auto',
        isScrolled
          ? 'bg-white/60 dark:bg-black/60 backdrop-blur-sm border-2 rounded-rough-1 shadow-[4px_4px_0px_0px_rgb(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgb(255,255,255)]'
          : '',
      ]"
    >
      <motion.div
        class="absolute bottom-0 left-0 h-[3px] bg-accent"
        :animate="{ width: `${scrollProgress}%` }"
        :transition="{ duration: 0.15 }"
      />

      <motion.a
        href="#"
        class="font-handwritten text-2xl tracking-tight text-board-text"
        while-hover="{ rotate: [-2, 2, -1, 0], scale: 1.05 }"
        :transition="{ duration: 0.4 }"
      >
        L<span class="text-accent">.</span>Adrian
      </motion.a>

      <nav class="hidden md:flex items-center gap-8">
        <div v-for="item in navItems" :key="item.name" class="relative group">
          <motion.a
            :href="item.href"
            :class="[
              'relative inline-block text-base font-bold transition-colors duration-200',
              activeSection === item.href.replace('#', '') ||
              (item.href === '#' && activeSection === 'home')
                ? 'text-accent'
                : 'text-board-text/70 group-hover:text-accent',
            ]"
            while-hover="{ rotate: [0, -1.5, 1.5, -1, 0], y: -1 }"
            :transition="{ duration: 0.35, ease: 'easeInOut' }"
          >
            {{ item.name }}
          </motion.a>

          <svg
            v-if="
              activeSection === item.href.replace('#', '') ||
              (item.href === '#' && activeSection === 'home')
            "
            class="absolute -bottom-1.5 left-0 w-full h-[8px] overflow-visible pointer-events-none"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M2,5 C15,2 25,8 38,4 C50,1 60,7 72,3 C82,0.5 90,6 98,4"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              class="text-accent"
            />
          </svg>

          <svg
            v-else
            class="absolute -bottom-1.5 left-0 w-full h-[8px] overflow-visible pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M2,6 C18,2 30,8 45,3 C58,-0.5 68,7 82,2 C90,-0.5 94,5 98,3"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              class="text-accent sketch-draw"
              pathLength="1"
            />
          </svg>
        </div>
      </nav>

      <div class="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </div>
  </motion.header>
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
