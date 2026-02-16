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
      'Sistema responsável por automatizar o envio de faturas por E-mail, SMS, Push e WhatsApp, apoiando a régua de cobrança da empresa.',

    importance:
      'Ajuda a manter o controle da inadimplência e a previsibilidade do fluxo de caixa.',

    problem:
      'Parte do processo era manual e concentrado em uma única pessoa. Não havia rastreabilidade clara dos envios, o que gerava risco operacional e atrasos na cobrança.',

    decisions: [
      'Implementação de processamento assíncrono com filas (RabbitMQ)',
      'Criação de tela de auditoria para acompanhar status de envio por contrato',
      'Uso de Redis para melhorar desempenho nas consultas em banco de dados',
      'Armazenamento de arquivos e QRCodes no MinIO',
      'Implementação de regras de envio por canal (ex: Push para clientes com login < 30 dias e SMS para > 30 dias)'
    ],

    tradeoffs:
      'Foi necessário aprender e aplicar o conceito de filas no Laravel e lidar com maior complexidade inicial. Em troca, o processo deixou de ser manual e passou a ser escalável.',

    outcome:
      'Sistema capaz de processar mais de 100 mil faturas por dia, com rastreabilidade e menor risco operacional.',

    technologies: [
      'Laravel 11',
      'CodeIgniter',
      'RabbitMQ',
      'Redis',
      'MinIO',
      'Bootstrap',
      'jQuery',
    ],
  },

  {
    name: 'Processamento Assíncrono de Relatórios',

    context:
      'API responsável pela geração de relatórios operacionais e financeiros para as áreas internas.',

    importance:
      'Os relatórios são essenciais para a operação diária e tomada de decisão.',

    problem:
      'O sistema antigo processava relatórios de forma síncrona, gerando timeouts de até 40 minutos. Quando falhava, era necessário acionar o DBA para gerar o relatório direto no banco.',

    decisions: [
      'Migração para processamento assíncrono com Redis',
      'Geração de arquivos via streaming para reduzir uso de memória',
      'Armazenamento dos relatórios no MinIO',
      'Tela para acompanhamento de status e notificação por e-mail',
      'Reprocessamento automático em caso de falha'
    ],

    tradeoffs:
      'Foi necessário criar uma nova camada de aplicação por limitações do sistema legado.',

    outcome:
      'Redução do tempo de processamento de 40 minutos para menos de 1 minuto. Fim dos timeouts e da dependência do DBA para exportações manuais.',

    technologies: [
      'Laravel 12',
      'CodeIgniter',
      'Redis',
      'MinIO',
      'Bootstrap',
      'jQuery'
    ],
  },

  {
    name: 'Refatoração do Microserviço de WhatsApp',

    context:
      'Refatoração do serviço responsável pelo envio de OTP, links de contrato e faturas via WhatsApp.',

    importance:
      'O WhatsApp é um dos principais canais de comunicação com o cliente.',

    problem:
      'Os templates eram configurados via variável de ambiente. Qualquer alteração exigia deploy e apoio técnico, além de pouca visibilidade sobre os envios.',

    decisions: [
      'Integração com a OMNE como intermediadora entre API interna e GUPSHUP',
      'Criação de tela para gerenciamento de templates sem necessidade de deploy',
      'Organização das configurações para reduzir dependência de DevOps'
    ],

    tradeoffs:
      'A inclusão da OMNE adicionou um custo extra e mais um ponto na arquitetura.',

    outcome:
      'Time de Negócios passou a gerenciar templates sozinho, com mais visibilidade sobre os envios e menos dependência técnica.',

    technologies: [
      'NestJS',
      'TypeScript',
      'Redis',
      'API OMNE',
      'API Gupshup',
      'Node.js'
    ],
  }
] as Project[]
