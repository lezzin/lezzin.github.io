export interface Project {
  name: string
  context: string
  importance: string
  problem: string
  decisions: string[]
  tradeoffs: string
  outcome: string
  technologies: string[]
}

export default [
  {
    name: 'Cronograma de Disparos de Faturas',

    context:
      'Sistema responsável por ==automatizar o envio de faturas== por E-mail, SMS, Push e WhatsApp, apoiando a régua de cobrança da empresa.',

    importance:
      'Ajuda a manter o controle da inadimplência e a previsibilidade do **fluxo de caixa**.',

    problem:
      'Parte do processo era manual e concentrado em uma única pessoa. ==Não havia rastreabilidade clara== dos envios, o que gerava risco operacional e atrasos na cobrança.',

    decisions: [
      'Implementação de **processamento assíncrono com filas (RabbitMQ)**',
      'Uso de **Redis** para cache de consultas frequentes e **MinIO** para persistência de QRCodes de pagamento.',
    ],

    tradeoffs:
      'Foi necessário aprender e aplicar o conceito de filas no Laravel e lidar com maior complexidade inicial. Em troca, o processo deixou de ser manual e passou a ser ==escalável==.',

    outcome:
      'Sistema capaz de processar ==mais de 100 mil faturas por dia==, com rastreabilidade e menor risco operacional.',

    technologies: [
      'Laravel 11',
      'RabbitMQ',
      'Redis',
      'MinIO',
    ],
  },

  {
    name: 'Processamento Assíncrono de Relatórios',

    context:
      'API responsável pela ==geração de relatórios operacionais== e financeiros para as áreas internas.',

    importance:
      'Os relatórios são essenciais para a operação diária e **tomada de decisão**.',

    problem:
      'Timeouts constantes de até **40 minutos** em relatórios síncronos, exigindo intervenção manual do DBA.',

    decisions: [
      'Migração para **processamento assíncrono com Redis**',
      'Otimização de queries SQL e geração de arquivos via ==streaming== para reduzir o consumo de memória.',
      'Armazenamento dos arquivos no **MinIO**',
    ],

    tradeoffs:
      'Foi necessário criar uma nova camada de aplicação por limitações do sistema legado.',

    outcome:
      'Redução do tempo de processamento de ==40 minutos para menos de 1 minuto==. Fim dos timeouts e da dependência do DBA.',

    technologies: [
      'Laravel 12',
      'Redis',
      'MinIO',
      'SQL Optimization',
    ],
  },

  {
    name: 'Refatoração do Microserviço de WhatsApp',

    context:
      'Refatoração do serviço responsável pelo envio de ==OTP e faturas== via WhatsApp.',

    importance:
      'O WhatsApp é um dos principais canais de comunicação com o cliente.',

    problem:
      'Configurações de templates presas em variáveis de ambiente (ENV), exigindo ==deploys técnicos== para alterações de texto.',

    decisions: [
      'Integração com a **OMNE** como intermediadora entre API interna e GUPSHUP.',
      'Desenvolvimento de ==interface para gerenciamento dinâmico== de templates pelo time de negócio.',
    ],

    tradeoffs:
      'A introdução de um intermediário (OMNE) adicionou um custo fixo, mas o ganho em ==agilidade de negócio== foi superior, permitindo alterações sem novos deploys.',

    outcome:
      '==Autonomia total== para o time de negócios e visibilidade analítica sobre o status de entrega das mensagens.',

    technologies: [
      'NestJS',
      'TypeScript',
      'Redis',
      'API OMNE',
      'Node.js'
    ],
  }
] as Project[]
