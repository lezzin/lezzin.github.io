import { ref, computed } from 'vue'

export type Language = 'pt' | 'en' | 'es'

const SUPPORTED_LANGUAGES: readonly Language[] = ['pt', 'en', 'es']

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'pt'
  const saved = localStorage.getItem('language') as Language | null
  if (saved && (SUPPORTED_LANGUAGES as readonly string[]).includes(saved)) {
    return saved
  }
  return 'pt'
}

const initialLang = getInitialLanguage()
const currentLanguage = ref<Language>(initialLang)

if (typeof window !== 'undefined') {
  document.documentElement.lang = initialLang
}

export function useLanguage() {
  const setLanguage = (lang: Language) => {
    currentLanguage.value = lang
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang)
      document.documentElement.lang = lang
    }
  }

  return {
    language: computed(() => currentLanguage.value),
    setLanguage,
  }
}
