import type { SkillCategory } from '../types/skill'
import { Database, Layers, Server, Zap, Cloud, Monitor } from 'lucide-vue-next'

export const skillCategories: SkillCategory[] = [
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
]