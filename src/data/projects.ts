export interface Project {
    name: string;
    context: string;
    importance: string;
    problem: string;
    decisions: string[];
    tradeoffs: string;
    outcome: string;
    technologies: string[];
}

export default [
    {
        name: "Cronograma de Disparos Multicanal",
        context:
            "Sistema interno da Ágil Empréstimos responsável pelo envio automatizado de faturas e comunicações para clientes via e-mail, SMS, push e WhatsApp.",
        importance:
            "Com o crescimento acelerado da base de clientes, tornou-se essencial uma solução escalável, confiável e auditável para garantir a entrega das comunicações dentro dos prazos, reduzindo riscos operacionais e eliminando dependência de processos manuais.",
        problem:
            "O processo original era executado manualmente por um único desenvolvedor, concentrando conhecimento crítico e criando dependência operacional. Isso resultava em risco elevado de falhas humanas, baixa previsibilidade e dificuldade para escalar envios de alto volume.",
        decisions: [
            "Adoção de processamento assíncrono com filas utilizando RabbitMQ para desacoplar e escalar o envio das comunicações",
            "Implementação de cache com Redis para reduzir carga no banco de dados e otimizar acessos frequentes",
            "Desenvolvimento de telas de auditoria, monitoramento e gestão de agendamentos, aumentando visibilidade e controle operacional",
            "Criação de um sistema de templates dinâmicos para SMS, Push e WhatsApp, permitindo personalização e padronização das mensagens",
            "Integração com MinIO para armazenamento de arquivos e dados auxiliares de forma desacoplada",
        ],
        tradeoffs:
            "A arquitetura baseada em filas e processamento assíncrono aumentou a complexidade técnica inicial, exigindo maior esforço em desenvolvimento, configuração e observabilidade. Em contrapartida, proporcionou ganhos significativos de escalabilidade, resiliência e confiabilidade, alinhados ao volume de envios esperado.",
        outcome:
            "Entrega de um sistema estável e altamente escalável, capaz de processar mais de 100 mil faturas por dia com alta confiabilidade. Houve melhoria significativa na visibilidade operacional, facilitando auditorias, acompanhamento de entregas e identificação rápida de falhas.",
        technologies: [
            "Laravel 12",
            "CodeIgniter",
            "RabbitMQ",
            "Redis",
            "MinIO",
            "Bootstrap",
            "jQuery",
        ],
    },
    {
        name: "Processamento Assíncrono de Relatórios",
        context:
            "API responsável pela geração de relatórios operacionais e financeiros utilizados por áreas internas da Ágil Empréstimos.",
        importance:
            "A geração de relatórios é essencial para a tomada de decisão do negócio. No modelo anterior, o processamento síncrono comprometia a experiência do usuário e a estabilidade da aplicação.",
        problem:
            "O processamento síncrono via HTTP levava cerca de 40 minutos para ser concluído, causando timeouts frequentes, bloqueio de recursos, falhas recorrentes e alto volume de chamados de suporte.",
        decisions: [
            "Migração para um modelo de processamento assíncrono e paralelo utilizando filas com Redis",
            "Geração de arquivos via streaming para reduzir consumo de memória e evitar gargalos",
            "Armazenamento dos relatórios no MinIO, desacoplando completamente a geração do processo de download",
            "Implementação de interface de acompanhamento do processamento e notificação automática por e-mail ao término",
        ],
        tradeoffs:
            "A migração exigiu a criação de uma nova aplicação, pois o sistema legado utilizava uma versão desatualizada do Laravel e não suportava uma arquitetura assíncrona de forma segura. O esforço inicial foi maior, mas eliminou limitações técnicas críticas e viabilizou evolução sustentável.",
        outcome:
            "Redução do tempo de processamento de aproximadamente 40 minutos para menos de 2 minutos, eliminando timeouts e aumentando significativamente a estabilidade e a confiabilidade. Houve queda expressiva no número de chamados de suporte relacionados à geração de relatórios.",
        technologies: [
            "Laravel 12",
            "CodeIgniter",
            "Redis",
            "MinIO",
            "Bootstrap",
            "jQuery",
        ],
    },
] as Project[];
