import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    name: 'Cronograma Automático de Disparo de Faturas',
    context:
      'Sistema responsável por ==automatizar o envio de faturas== por E-mail, SMS e WhatsApp.',
    importance: 'Fundamental para a previsibilidade do fluxo de caixa e redução da inadimplência.',
    problem:
      'Processos manuais centralizados e falta de rastreabilidade, o que gerava ==alto risco operacional== e erros de cobrança.',
    decisions: [
      'Implementação de **processamento assíncrono com RabbitMQ** para gerenciar picos de carga sem comprometer o sistema.',
      'Uso de **Redis** para caching de consultas rápidas e **MinIO** para persistência das faturas geradas.',
    ],
    tradeoffs:
      'Complexidade vs. Escalabilidade: O uso de filas trouxe maior complexidade inicial, mas resolveu gargalos de performance a longo prazo.',
    outcome:
      'Eliminação total de intervenções manuais, com capacidade para processar mais de **100 mil transações diárias**.',
    technologies: ['Laravel 11', 'RabbitMQ', 'Redis', 'MinIO'],
  },
  {
    name: 'Processamento Assíncrono de Relatórios Financeiros',
    context:
      'Ferramenta desenvolvida para ==geração de relatórios operacionais== e financeiros para áreas internas.',
    importance: 'Os relatórios são essenciais para o monitoramento diário da saúde do negócio.',
    problem:
      'Timeouts constantes de até **40 minutos** em processos síncronos, exigindo suporte manual frequente.',
    decisions: [
      'Migração da lógica de geração de arquivos para processamento em background via **Redis Queues**.',
      'Otimização de queries SQL e implementação de ==streaming de dados== para reduzir drasticamente o consumo de memória.',
    ],
    tradeoffs:
      'Novo Serviço vs. Legado: Em vez de manter a lógica no sistema legado, optei por desenvolver uma nova aplicação do zero para garantir estabilidade, isolamento e uso de tecnologias modernas.',
    outcome:
      'Redução do tempo de geração de **40 minutos para menos de 1 minuto**, com zero ocorrências de timeouts.',
    technologies: ['Laravel 12', 'Redis', 'MinIO', 'SQL Optimization'],
  },
  {
    name: 'Gateway de Mensagens WhatsApp (API OMNE)',
    context: 'Microserviço responsável pela conexão entre o sistema interno e o WhatsApp Gateway.',
    importance:
      'Canal crítico de comunicação para envio de faturas e validações de segurança (OTP).',
    problem:
      'Regras de negócio e templates fixos no código, exigindo ==deploys técnicos== para alterações de texto.',
    decisions: [
      'Integração com a API OMNE para facilitar a comunicação com o provedor oficial.',
      'Desenvolvimento de uma ==interface administrativa== para gerenciamento dinâmico de templates pelo time de negócio.',
    ],
    tradeoffs:
      'Agilidade vs. Custo: A adoção de um intermediador oficial aumentou levemente os custos, mas reduziu o time-to-market de novas campanhas.',
    outcome:
      'Total autonomia para o time de negócios e visibilidade analítica sobre o status de entrega das mensagens.',
    technologies: ['NestJS', 'TypeScript', 'Redis', 'API OMNE', 'Node.js'],
  },
]
