export interface Experience {
  title: string
  company: string
  period: string
  description: string[]
  logo?: string
}

export default [
  {
    title: 'Desenvolvedor Backend Trainee',
    company: 'Ágil Empréstimos · Monte Belo',
    period: 'Abril 2025 – Atual',
    description: [
      'Atuação no **desenvolvimento e refatoração de sistemas críticos** para a operação financeira, com foco em **escalabilidade e autonomia de processos**.',
      'Desenvolvimento e escala do **sistema de disparos multicanal** (RabbitMQ/Redis), processando **+100 mil faturas diárias** com alta confiabilidade e rastreabilidade por contrato.',
      'Otimização do tempo de processamento de relatórios em **97,5%** (de 40 min para < 1 min) através de **migração para arquitetura assíncrona** e streaming de dados em Laravel.',
      'Refatoração do **microserviço de WhatsApp com NestJS**, integrando a API da OMNE para extração de relatórios analíticos.',
      'Manutenção de sistemas legados em **CodeIgniter** e produção de **documentação técnica com diagramas de arquitetura**.',
    ],
    logo: 'https://raichu-uploads.s3.amazonaws.com/logo_null_LAPYHD.png',
  },
] as Experience[]
