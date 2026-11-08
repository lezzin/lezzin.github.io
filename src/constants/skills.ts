import { Database, Layers, Server, Zap, Cloud, Monitor } from 'lucide-vue-next'
import type { SkillCategory } from '../types/skill'

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
    category: 'Mensageria e Performance',
    skills: ['Redis', 'RabbitMQ', 'Webhooks', 'MinIO'],
    icon: Zap,
  },
  {
    category: 'Arquitetura e Boas Práticas',
    skills: ['Clean Code', 'SOLID', 'Clean Architecture', 'Microsserviços'],
    icon: Layers,
  },
  {
    category: 'DevOps e Ferramentas',
    skills: ['Linux', 'Docker', 'Git e GitHub', 'Azure DevOps', 'Postman / Insomnia'],
    icon: Cloud,
  },
]
