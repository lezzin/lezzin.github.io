export interface SkillCategory {
    category: string;
    skills: string[];
}

export default [
    {
        category: "Arquitetura & Engenharia",
        skills: [
            "Clean Architecture",
            "SOLID",
            "Microserviços",
            "REST APIs",
        ],
    },
    {
        category: "Backend & Frameworks",
        skills: ["PHP", "TypeScript", "Laravel", "NestJS", "Node.js", "CodeIgniter"],
    },
    {
        category: "Mensageria & Performance",
        skills: ["RabbitMQ", "Redis (Caching & Queues)", "Webhooks", "MinIO (Object Storage)"],
    },
    {
        category: "Bancos de Dados",
        skills: ["PostgreSQL", "MySQL", "Query Optimization", "Migrations"],
    },
    {
        category: "Infraestrutura & DevOps",
        skills: [
            "Docker",
            "Kubernetes (Pods, Services, CronJobs)",
            "K8s Debugging (Lens)",
            "Linux (Ubuntu)",
            "Git"
        ],
    },
    {
        category: "Frontend & Ferramentas",
        skills: ["Vue.js", "Tailwind CSS", "Bootstrap", "Postman / Insomnia"],
    },
] as SkillCategory[];