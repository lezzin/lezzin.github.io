import type { Language } from '../composables/useLanguage'
import type { SkillCategory } from '../types/skill'
import { Database, Layers, Server, Zap, Cloud, Monitor } from 'lucide-vue-next'

export const skillCategoriesTranslations: Record<Language, SkillCategory[]> = {
  pt: [
    {
      category: 'Frontend',
      skills: ['Vue.js', 'Vite', 'Tailwind CSS', 'Bootstrap'],
      icon: Monitor,
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'NestJS', 'Laravel', 'CodeIgniter', 'PHP', 'TypeScript'],
      icon: Server,
    },
    {
      category: 'Bancos de Dados',
      skills: ['PostgreSQL', 'MySQL', 'Migrations', 'Otimização de Queries'],
      icon: Database,
    },
    {
      category: 'Mensageria & Performance',
      skills: ['Redis (Cache & Filas)', 'RabbitMQ', 'Webhooks', 'MinIO (Armazenamento)'],
      icon: Zap,
    },
    {
      category: 'Arquitetura & Boas Práticas',
      skills: ['Clean Code', 'SOLID', 'Clean Architecture', 'Microserviços'],
      icon: Layers,
    },
    {
      category: 'DevOps & Ferramentas',
      skills: ['Linux', 'Docker', 'Kubernetes (K8s)', 'Git & GitHub', 'Azure DevOps', 'Postman / Insomnia'],
      icon: Cloud,
    },
  ],
  en: [
    {
      category: 'Frontend',
      skills: ['Vue.js', 'Vite', 'Tailwind CSS', 'Bootstrap'],
      icon: Monitor,
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'NestJS', 'Laravel', 'CodeIgniter', 'PHP', 'TypeScript'],
      icon: Server,
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'Migrations', 'Query Optimization'],
      icon: Database,
    },
    {
      category: 'Messaging & Performance',
      skills: ['Redis (Cache & Queues)', 'RabbitMQ', 'Webhooks', 'MinIO (Storage)'],
      icon: Zap,
    },
    {
      category: 'Architecture & Best Practices',
      skills: ['Clean Code', 'SOLID', 'Clean Architecture', 'Microservices'],
      icon: Layers,
    },
    {
      category: 'DevOps & Tools',
      skills: ['Linux', 'Docker', 'Kubernetes (K8s)', 'Git & GitHub', 'Azure DevOps', 'Postman / Insomnia'],
      icon: Cloud,
    },
  ],
  es: [
    {
      category: 'Frontend',
      skills: ['Vue.js', 'Vite', 'Tailwind CSS', 'Bootstrap'],
      icon: Monitor,
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'NestJS', 'Laravel', 'CodeIgniter', 'PHP', 'TypeScript'],
      icon: Server,
    },
    {
      category: 'Bases de Datos',
      skills: ['PostgreSQL', 'MySQL', 'Migraciones', 'Optimización de Queries'],
      icon: Database,
    },
    {
      category: 'Mensajería y Rendimiento',
      skills: ['Redis (Caché y Colas)', 'RabbitMQ', 'Webhooks', 'MinIO (Almacenamiento)'],
      icon: Zap,
    },
    {
      category: 'Arquitectura y Buenas Prácticas',
      skills: ['Clean Code', 'SOLID', 'Clean Architecture', 'Microservicios'],
      icon: Layers,
    },
    {
      category: 'DevOps y Herramientas',
      skills: ['Linux', 'Docker', 'Kubernetes (K8s)', 'Git & GitHub', 'Azure DevOps', 'Postman / Insomnia'],
      icon: Cloud,
    },
  ],
}
