import type { Experience } from '../types/experience'

export const experiences: Experience[] = [
  {
    title: 'Desenvolvedor Backend Trainee',
    company: 'Ágil Empréstimos · Monte Belo',
    period: 'Abril 2025 – Fev 2026',
    description: 'Atuação no desenvolvimento e modernização de ==sistemas core== da empresa, com foco em performance, escalabilidade e manutenção de código.',
    bulletPoints: [
      '**Sistema de Mensageria:** Implementação de disparos multicanal com **RabbitMQ** e **Redis**, garantindo o processamento de mais de **100 mil faturas por dia** com alta disponibilidade.',

      '**Otimização de Processos:** Redução do tempo de geração de relatórios em **97,5%** (de 40 minutos para menos de 1 minuto) através de processamento assíncrono e streaming de dados.',

      '**Evolução Tecnológica:** Desenvolvimento de novos microserviços com **NestJS** e manutenção evolutiva em sistemas legados utilizando **CodeIgniter**.',

      '**Cultura Técnica:** Criação de documentação técnica e diagramas arquiteturais para facilitar o suporte e o onboarding de novos membros no time.',
    ]
  },
]
