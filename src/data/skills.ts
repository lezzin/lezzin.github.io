export interface SkillCategory {
    category: string;
    skills: string[];
}

export default [
    {
        category: "Linguagens & Tecnologias Base",
        skills: ["PHP", "TypeScript", "SQL"],
    },
    {
        category: "Backend",
        skills: ["Laravel", "CodeIgniter", "NestJS"],
    },
    {
        category: "Frontend",
        skills: ["Vue.js", "Tailwind CSS", "Bootstrap", "Sass", "jQuery"],
    },
    {
        category: "Bancos de Dados",
        skills: ["PostgreSQL", "MySQL"],
    },
    {
        category: "Mensageria & Cache",
        skills: ["RabbitMQ", "Redis"],
    },
    {
        category: "Infraestrutura & DevOps",
        skills: ["Docker", "Kubernetes"],
    },
    {
        category: "Ferramentas & Ambiente",
        skills: ["Git", "Linux"],
    },
] as SkillCategory[];
