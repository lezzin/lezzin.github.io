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
        name: "Cronograma de Disparos de Faturas",
        context:
            "Sistema especializado da Ágil Empréstimos focado na automação e controle do envio de faturas aos clientes através de múltiplos canais (E-mail, SMS, Push e WhatsApp).",
        importance:
            "Garantir a eficiência da régua de cobrança em uma operação de larga escala, assegurando que cada cliente receba sua fatura dentro do prazo para manter a saúde do fluxo de caixa.",
        problem:
            "O processo era manual e centralizado em um único desenvolvedor, o que gerava riscos operacionais elevados, falta de previsibilidade e ausência de mecanismos de auditoria sobre o status de envio de cada contrato.",
        decisions: [
            "Arquitetura de processamento assíncrono com RabbitMQ para garantir o envio massivo de faturas sem perda de dados",
            "Desenvolvimento de telas de auditoria detalhada, permitindo o acompanhamento do status de envio por contrato e visualização de informações vinculadas",
            "Implementação de cache com Redis para acelerar a consulta de dados recorrentes dos contratos durante o processamento",
            "Integração com MinIO para armazenamento de arquivos e QRCodes de pagamento, garantindo o desacoplamento do storage",
        ],
        tradeoffs:
            "A substituição do processo manual por uma arquitetura baseada em filas exigiu maior esforço inicial em infraestrutura e observabilidade, mas eliminou a dependência humana e permitiu a rastreabilidade total do processo.",
        outcome:
            "Entrega de um sistema estável capaz de processar mais de 100 mil faturas por dia. Implementação de visibilidade operacional completa, permitindo que falhas de entrega sejam identificadas e tratadas por contrato de forma imediata.",
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
            "API de processamento de dados responsável pela geração de relatórios operacionais e financeiros para as áreas internas da Ágil Empréstimos.",
        importance:
            "A disponibilidade desses relatórios é crítica para a operação diária. Falhas no modelo anterior comprometiam a produtividade das equipes e a confiabilidade das informações.",
        problem:
            "Aplicação legada em PHP com processamento síncrono via HTTP, gerando timeouts frequentes de até 40 minutos, bloqueio de recursos do servidor e alto volume de chamados de suporte.",
        decisions: [
            "Migração do modelo síncrono para processamento assíncrono e paralelo utilizando filas com Redis",
            "Implementação de geração de arquivos via streaming para reduzir drasticamente o consumo de memória",
            "Armazenamento de relatórios no MinIO, desacoplando o processamento pesado do fluxo de download do usuário",
            "Interface de acompanhamento do progresso e sistema de notificação automática por e-mail após a conclusão",
        ],
        tradeoffs:
            "Foi necessária a criação de uma nova camada de aplicação, pois o sistema legado utilizava versões defasadas que não suportavam uma arquitetura assíncrona moderna de forma segura.",
        outcome:
            "Redução do tempo de processamento de 40 minutos para menos de 1 minutos (melhoria de 97,5%). Erradicação de timeouts e queda expressiva no volume de chamados de suporte.",
        technologies: [
            "Laravel 12",
            "CodeIgniter",
            "Redis",
            "MinIO",
            "Bootstrap",
            "jQuery",
        ],
    },
    {
        name: "Refatoração do Microserviço de WhatsApp",
        context:
            "Evolução do microserviço de mensageria utilizado para o envio de tokens (OTP), links de assinatura de contratos e faturas via WhatsApp.",
        importance:
            "O WhatsApp é o canal vital de conversão. A agilidade na gestão de templates e o acesso a relatórios integrados impactam diretamente o tempo de resposta ao cliente.",
        problem:
            "A integração direta anterior (Gupshup) dificultava a gestão de templates e relatórios, exigindo constantes intervenções de DevOps e deploys para mudanças simples de negócio.",
        decisions: [
            "Refatoração para integração com a plataforma OMNE como intermediadora, visando utilizar seus relatórios nativos e acelerar a entrega de requisitos",
            "Desenvolvimento de tela de gerenciamento de templates, permitindo que a área de negócio cadastre IDs de templates da OMNE sem necessidade de novos deploys",
            "Uso de NestJS para garantir alta performance e escalabilidade no processamento de mensagens críticas",
        ],
        tradeoffs:
            "A inclusão da OMNE como intermediária trouxe um custo de plataforma, mas o retorno em velocidade de entrega para o negócio e a redução de carga técnica compensaram o investimento.",
        outcome:
            "Autonomia total para o time de Negócios na gestão de templates. Redução drástica do Lead Time de mudanças e maior clareza nos dados de entrega através de relatórios integrados.",
        technologies: [
            "NestJS",
            "TypeScript",
            "Redis",
            "API OMNE",
            "Gupshup API",
            "Node.js",
        ],
    },
] as Project[];