import type { Language } from '../composables/useLanguage'

export interface NavItem {
  name: string
  href: string
}

export const navItemsTranslations: Record<Language, NavItem[]> = {
  pt: [
    { name: 'Início', href: '#' },
    { name: 'Experiência', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contato', href: '#contact' },
  ],
  en: [
    { name: 'Home', href: '#' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ],
  es: [
    { name: 'Inicio', href: '#' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contacto', href: '#contact' },
  ],
}
