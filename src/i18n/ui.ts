import type { Language } from '../composables/useLanguage'

export interface UiTranslations {
  hero: {
    role: string
    description: string
    viewExperience: string
    scheduleCall: string
    resume: string
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
    copy: string
    copied: string
    github: string
    linkedin: string
  }
  footer: {
    madeWith: string
  }
}

export const uiTranslations: Record<Language, UiTranslations> = {
  pt: {
    hero: {
      role: 'Desenvolvedor Backend',
      description:
        'Desenvolvedor Backend focado na construção de sistemas robustos, escaláveis e de alta performance. Especializado em arquiteturas modernas com ==NestJS e Laravel==, busco transformar desafios técnicos em soluções eficientes, bem documentadas e de alto impacto para o negócio.',
      viewExperience: 'Ver Experiências',
      scheduleCall: 'Agendar Conversa',
      resume: 'Currículo',
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
        'Estou sempre interessado em ouvir sobre novos projetos desafiadores, arquitetura de sistemas e oportunidades de colaboração no ecossistema Backend.',
      copy: 'Copiar',
      copied: 'Copiado!',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    footer: {
      madeWith: '© {year} — Feito com Vue.js & Tailwind CSS',
    },
  },
  en: {
    hero: {
      role: 'Backend Developer',
      description:
        'Backend Developer focused on building robust, scalable, and high-performance systems. Specialized in modern architectures with ==NestJS and Laravel==, I strive to transform technical challenges into efficient, well-documented, and high-impact business solutions.',
      viewExperience: 'View Experience',
      scheduleCall: 'Schedule a Call',
      resume: 'Resume',
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
        "I'm always interested in hearing about new challenging projects, system architecture, and collaboration opportunities in the Backend ecosystem.",
      copy: 'Copy',
      copied: 'Copied!',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    footer: {
      madeWith: '© {year} — Built with Vue.js & Tailwind CSS',
    },
  },
  es: {
    hero: {
      role: 'Desarrollador Backend',
      description:
        'Desarrollador Backend enfocado en la construcción de sistemas robustos, escalables y de alto rendimiento. Especializado en arquitecturas modernas con ==NestJS y Laravel==, busco transformar desafíos técnicos en soluciones eficientes, bien documentadas y de alto impacto para el negocio.',
      viewExperience: 'Ver Experiencias',
      scheduleCall: 'Agendar Conversación',
      resume: 'Currículum',
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
        'Siempre estoy interesado en escuchar sobre nuevos proyectos desafiantes, arquitectura de sistemas y oportunidades de colaboración en el ecosistema Backend.',
      copy: 'Copiar',
      copied: '¡Copiado!',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    footer: {
      madeWith: '© {year} — Hecho con Vue.js & Tailwind CSS',
    },
  },
}
