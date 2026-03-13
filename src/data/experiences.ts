export interface Experience {
  title: string
  company: string
  period: string
  description: string
  bulletPoints: string[]
}

export default [
  {
    title: 'Desenvolvedor Backend Trainee',
    company: 'Ágil Empréstimos · Monte Belo',
    period: 'Abril 2025 – Atual',
    description: 'Atuação no desenvolvimento, evolução e modernização de ==sistemas críticos==, com foco em ==escalabilidade==, alta disponibilidade e eficiência operacional.',
    bulletPoints: [
      '**Arquitetura de Mensageria em Escala:** Implementação de sistema de disparos multicanal com **RabbitMQ** e **Redis**, processando mais de **100 mil faturas por dia** com alta confiabilidade.',

      '**Otimização de Performance:** Redução do tempo de geração de relatórios em **97,5%** (de 40 minutos para menos de 1 minuto) por meio de processamento assíncrono e streaming de dados.',

      '**Evolução de Arquitetura:** Refatoração e padronização de microserviços com **NestJS**, além de manutenção e melhorias em sistemas legados em **CodeIgniter**.',

      '**Documentação e Governança Técnica:** Criação de diagramas arquiteturais e documentação técnica, facilitando onboarding e alinhamento entre time técnico e stakeholders.',
    ]
  },
] as Experience[]