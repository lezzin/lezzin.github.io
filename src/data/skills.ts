export interface SkillCategory {
    category: string;
    skills: string[];
}

export default [
    {
        category: "Arquitetura & Engenharia de Software",
        skills: [
            "Clean Architecture",
            "Arquitetura em Camadas",
            "SOLID",
        ],
    },
    {
        category: "Linguagens",
        skills: ["PHP", "TypeScript", "SQL"],
    },
    {
        category: "Backend",
        skills: ["Laravel", "NestJS", "CodeIgniter"],
    },
    {
        category: "Frontend",
        skills: ["Vue.js", "Tailwind CSS", "Sass", "Bootstrap", "jQuery"],
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
        skills: ["Docker", "Kubernetes", "Linux", "Git"],
    },
] as SkillCategory[];
