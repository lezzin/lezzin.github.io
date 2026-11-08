export interface Metric {
  value: string
  label: string
}

export interface Project {
  name: string
  summary: string
  problem: string
  solution: string[]
  outcome: string
  metrics?: Metric[]
  technologies: string[]
}