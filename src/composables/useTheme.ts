import { ref, watchEffect } from 'vue'

type Theme = 'light' | 'dark'

const theme = ref<Theme>(
  (localStorage.getItem('theme') as Theme) ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
)

export function useTheme() {
  watchEffect(() => {
    const html = document.documentElement
    localStorage.setItem('theme', theme.value)

    if (theme.value === 'dark') {
      html.classList.add('dark')
      return
    }

    html.classList.remove('dark')
  })

  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  return {
    theme,
    toggleTheme,
  }
}
