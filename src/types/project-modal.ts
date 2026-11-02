import type { InjectionKey } from 'vue'
import type { Project } from './project'

export type ProjectModalContext = {
  openProject: (project: Project, index: number) => void
}

export const projectModalKey: InjectionKey<ProjectModalContext> = Symbol('projectModal')
