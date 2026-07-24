import { ref, computed } from 'vue'

export type Language = 'pt' | 'en' | 'es'

const savedLang = typeof window !== 'undefined' ? (localStorage.getItem('language') as Language | null) : null
const initialLang: Language = savedLang && ['pt', 'en', 'es'].includes(savedLang) ? savedLang : 'pt'

const currentLanguage = ref<Language>(initialLang)

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
