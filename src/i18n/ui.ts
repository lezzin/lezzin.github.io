import type { Language } from '../composables/useLanguage'

export interface UiTranslations {
  card: {
    hero: string
    nav: string
  }
  hero: {
    description: string
    experiences: string
    skills: string
  }
  experience: {
    title: string
    projectsTitle: string
    readCaseStudy: string
    modal: {
      close: string
      context: string
      importance: string
      problem: string
      decisions: string
      tradeoffs: string
      outcome: string
    }
  }
  skills: {
    title: string
  }
  contact: {
    title: string
    subtitle: string
    github: string
    linkedin: string
    whatsapp: string
  }
  footer: {
    madeWith: string
  }
}

export const uiTranslations: Record<Language, UiTranslations> = {
  pt: {
    card: {
      hero: 'Leandro Adrian da Silva',
      nav: 'Links Úteis',
    },
    hero: {
      description:
        'Desenvolvedor Backend especializado em arquiteturas orientadas a eventos, APIs de alto tráfego e modernização de legados com ==NestJS e Laravel==. Foco prático na resolução de gargalos em bancos de dados relacionais, pipelines de mensageria assíncrona e entrega de serviços resilientes alinhados aos objetivos de negócio.',
      experiences: 'Ver Experiências',
      skills: 'Ver Habilidades',
    },
    experience: {
      title: 'Experiência Profissional',
      projectsTitle: 'Projetos e Estudos de Caso',
      readCaseStudy: 'Ler estudo de caso completo',
      modal: {
        close: 'Fechar',
        context: 'Contexto',
        importance: 'Impacto no Negócio',
        problem: 'O Desafio Técnico',
        decisions: 'Decisões de Engenharia',
        tradeoffs: 'Análise de Trade-offs',
        outcome: 'Resultado Final',
      },
    },
    skills: {
      title: 'Habilidades & Ferramentas',
    },
    contact: {
      title: 'Vamos conversar?',
      subtitle:
        'Disponível para novos desafios em engenharia de backend, discussões sobre arquitetura de software e desenvolvimento de soluções de alta performance.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      whatsapp: 'Whatsapp',
    },
    footer: {
      madeWith: '© {year} — Feito com Vue.js & Tailwind CSS',
    },
  },
  en: {
    card: {
      hero: 'Leandro Adrian da Silva',
      nav: 'Useful Links',
    },
    hero: {
      description:
        'Backend Developer specializing in event-driven architectures, high-throughput APIs, and legacy modernization with ==NestJS and Laravel==. Hands-on experience optimizing relational database bottlenecks, asynchronous messaging pipelines, and delivering resilient services aligned with business goals.',
      experiences: 'View Experience',
      skills: 'View Skills',
    },
    experience: {
      title: 'Professional Experience',
      projectsTitle: 'Projects & Case Studies',
      readCaseStudy: 'Read full case study',
      modal: {
        close: 'Close',
        context: 'Context',
        importance: 'Business Impact',
        problem: 'Technical Challenge',
        decisions: 'Engineering Decisions',
        tradeoffs: 'Trade-off Analysis',
        outcome: 'Final Outcome',
      },
    },
    skills: {
      title: 'Skills & Tools',
    },
    contact: {
      title: "Let's talk?",
      subtitle:
        'Open to new backend engineering opportunities, software architecture discussions, and building high-performance systems.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      whatsapp: 'Whatsapp',
    },
    footer: {
      madeWith: '© {year} — Built with Vue.js & Tailwind CSS',
    },
  },
  es: {
    card: {
      hero: 'Leandro Adrian da Silva',
      nav: 'Links Úteis',
    },
    hero: {
      description:
        'Desarrollador Backend especializado en arquitecturas orientadas a eventos, APIs de alto rendimiento y modernización de sistemas con ==NestJS y Laravel==. Enfoque práctico en la resolución de cuellos de botella en bases de datos relacionales, canalizaciones de mensajería asíncrona y entrega de servicios resilientes alineados con los objetivos del negocio.',
      experiences: 'Ver Experiencias',
      skills: 'Ver Habilidades',
    },
    experience: {
      title: 'Experiencia Profesional',
      projectsTitle: 'Proyectos y Casos de Estudio',
      readCaseStudy: 'Leer caso de estudio completo',
      modal: {
        close: 'Cerrar',
        context: 'Contexto',
        importance: 'Impacto en el Negocio',
        problem: 'El Desafío Técnico',
        decisions: 'Decisiones de Ingeniería',
        tradeoffs: 'Análisis de Trade-offs',
        outcome: 'Resultado Final',
      },
    },
    skills: {
      title: 'Habilidades y Herramientas',
    },
    contact: {
      title: '¿Hablamos?',
      subtitle:
        'Disponible para nuevos desafíos en ingeniería backend, debates sobre arquitectura de software y desarrollo de soluciones de alto rendimiento.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      whatsapp: 'Whatsapp',
    },
    footer: {
      madeWith: '© {year} — Hecho con Vue.js & Tailwind CSS',
    },
  },
}
