export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
}

export default [
    {
        title: "Desenvolvedor Backend Trainee",
        company: "Ágil Empréstimos · Monte Belo",
        period: "Abril 2025 – Atual",
        description:
            "Desenvolvimento de APIs e microserviços com NestJS, implementando sistema de disparos multicanal (e-mail, SMS, push e WhatsApp) que processa mais de 100 mil faturas diárias. Utilização de RabbitMQ para filas e Redis para cache, melhorando escalabilidade. Manutenção de sistemas legados em CodeIgniter e desenvolvimento de novas aplicações em Laravel. Otimização de geração de relatórios, reduzindo tempo de processamento de 40 minutos para menos de 2 minutos. Criação de interfaces de monitoramento e auditoria, diminuindo chamados de suporte. Produção de documentação técnica e diagramas de arquitetura."
    },
] as Experience[];