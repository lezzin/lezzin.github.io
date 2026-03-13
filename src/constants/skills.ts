import type { SkillCategory } from '../types/skill'
import { 
  Database, 
  Layers, 
  Server, 
  Zap, 
  Cloud, 
  Monitor 
} from 'lucide-vue-next'

export const skillCategories: SkillCategory[] = [
  {
    category: 'Arquitetura & Boas Práticas',
    skills: ['Clean Architecture', 'SOLID', 'Microserviços', 'Clean Code'],
    icon: Layers,
  },
  {
    category: 'Backend & Frameworks',
    skills: ['PHP', 'TypeScript', 'Laravel', 'NestJS', 'Node.js', 'CodeIgniter'],
    icon: Server,
  },
  {
    category: 'Mensageria & Performance',
    skills: ['RabbitMQ', 'Redis (Filas & Cache)', 'Webhooks', 'MinIO (Arquivos)'],
    icon: Zap,
  },
  {
    category: 'Bancos de Dados',
    skills: ['PostgreSQL', 'MySQL', 'Otimização de Queries', 'Migrations'],
    icon: Database,
  },
  {
    category: 'Ferramentas & DevOps',
    skills: [
      'Docker',
      'Kubernetes (K8s)',
      'Git / GitHub',
      'Postman / Insomnia',
      'Linux (Ubuntu)',
    ],
    icon: Cloud,
  },
  {
    category: 'Frontend',
    skills: ['Vue.js', 'Tailwind CSS', 'Vite', 'Bootstrap'],
    icon: Monitor,
  },
]
