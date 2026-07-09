import type { Project } from './project'

export interface Experience {
  title: string
  company: string
  period: string
  description: string
  bulletPoints: string[]
  projects: Project[]
}
