import { experiences } from './experiences'
export const projects = experiences.map((experience) => experience.projects).flat()
