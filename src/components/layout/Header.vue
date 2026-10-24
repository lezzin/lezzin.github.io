<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ThemeToggle from './ThemeToggle.vue'
import LanguageToggle from './LanguageToggle.vue'
import { navItems } from '../../constants/nav-items.ts'
import NavItems from './NavItems.vue'

defineProps<{
  containerClass: string
}>()

const isScrolled = ref(false)
const activeSection = ref('home')

let observer: IntersectionObserver | null = null

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
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
  window.addEventListener('scroll', handleScroll, { passive: true })
  setupObserver()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  observer?.disconnect()
})
</script>

<template>
  <header :class="[
    'fixed left-0 right-0 z-40 transition-all duration-200',
    isScrolled
      ? 'bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-800'
      : 'border-transparent',
  ]">
    <div :class="[containerClass, 'w-full flex items-center justify-between py-4']">
      <a href="#" class="font-handwritten text-2xl tracking-tight text-zinc-900 dark:text-zinc-100">
        L<span class="text-green-600 dark:text-green-400">.</span>Adrian
      </a>

      <NavItems :active="activeSection" class="hidden md:flex" />

      <div class="flex items-center gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>
