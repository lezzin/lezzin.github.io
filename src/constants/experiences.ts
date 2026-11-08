import type { Experience } from '../types/experience'

export const experiences: Experience[] = [
  {
    title: 'Desenvolvedor Backend Junior',
    company: 'Ágil Empréstimos · Monte Belo',
    period: 'Ago 2026 – Atual',
    description: 'Desenvolvo e mantenho ==serviços essenciais de crédito e cobrança==.',
    bulletPoints: [
      '**Refatoração:** Reestruturação de microsserviços legados para facilitar o entendimento da equipe, com logs estruturados para melhorar a observabilidade.',
      '**Documentação:** Documentação de aplicações com **Vitepress** e diagramas **Mermaid**, para público técnico e de negócios.',
      '**Novos serviços:** Criação de microsserviços seguindo padrões de código, com apoio de IA.',
    ],
  },
  {
    title: 'Desenvolvedor Fullstack Freelancer',
    company: 'Autônomo · Remoto',
    period: 'Fev 2026 – Ago 2026',
    description: 'Desenvolvi e implantei um ==sistema web de gestão== para redes de franquias.',
    bulletPoints: [
      '**Fullstack:** Construção da plataforma com **Laravel**, **MySQL**, **Tailwind CSS** e **Alpine.js**.',
      '**Produto:** Participação em todas as etapas, do alinhamento de requisitos ao deploy.',
    ],
    projects: [
      {
        name: 'Plataforma Franquias Panda',
        summary:
          'Sistema sob medida que unifica rotinas operacionais, financeiras e contratuais entre franqueadora e franqueados.',
        problem:
          'Dados espalhados em canais informais causavam atrasos em contratos e falta de visão do negócio.',
        solution: [
          'Camadas de serviço em **Laravel** para facilitar novas funções.',
          'Painéis por perfil (admin, franqueado, cliente) com controle de acesso.',
          'Módulos de contratos, estoque, campanhas, treinamentos e painéis analíticos por filial.',
          'Geração e assinatura de contratos em PDF, com histórico para auditoria.',
        ],
        outcome:
          'Plataforma completa entregue e validada com o cliente, cobrindo contratos, estoque, campanhas e painéis por perfil.',
        technologies: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Tailwind CSS', 'Alpine.js'],
      },
    ],
  },
  {
    title: 'Desenvolvedor Backend Trainee',
    company: 'Ágil Empréstimos · Monte Belo',
    period: 'Abr 2025 – Fev 2026',
    description: 'Atuei no backend dos ==sistemas de crédito e faturamento==.',
    bulletPoints: [
      '**Filas e mensageria:** Processamento assíncrono com **RabbitMQ** e **Redis** para mais de **100 mil faturas por dia**.',
      '**Performance:** Relatórios de **40 min para menos de 1 min (−97,5%)** com streaming e SQL otimizado.',
      '**Microsserviços:** Novos serviços em **NestJS** e manutenção de sistemas legados em **CodeIgniter**.',
      '**Documentação:** APIs e diagramas de fluxo para acelerar a integração de novos devs.',
    ],
    projects: [
      {
        name: 'Cronograma de envio de faturas',
        summary:
          'Envio automático de faturas por push, e-mail, SMS e WhatsApp, cada um com suas regras individuais de envio, para reduzir inadimplência.',
        problem: 'Envios manuais, sem fila nem rastreio, geravam atrasos e erros de entrega.',
        solution: [
          'Filas no **RabbitMQ** separando a geração de cobranças dos envios externos.',
          'Cache no **Redis** e arquivos no **MinIO** (S3) para aliviar o banco.',
          'Agendamento de faturas, com seleção e envio totalmente automáticos.',
          'Relatórios para auditoria com o status de envio de cada fatura.',
        ],
        outcome: 'Envio totalmente automatizado, sem erros manuais e com relatórios de auditoria.',
        metrics: [{ value: '100 mil+', label: 'faturas processadas por dia' }],
        technologies: ['Laravel 11', 'RabbitMQ', 'Redis', 'MinIO'],
      },
      {
        name: 'Relatórios Assíncronos',
        summary:
          'Módulo que consolida e exporta grandes volumes de dados para auditoria e fechamentos diários.',
        problem:
          'Os CSVs eram gerados com **chunk**, que refaz a consulta a cada lote e fica mais lento conforme o volume cresce, com esperas de até **40 min** e a tela travada.',
        solution: [
          'Extração em segundo plano com **Redis**.',
          'Geração de CSVs com **cursor**, lendo os registros em fluxo contínuo, com salvamento no **MinIO**, além da otimização das queries de relatórios existentes.',
        ],
        outcome: 'Geração sem falhas e sem travar a tela.',
        metrics: [
          { value: '40 min → <1 min', label: 'tempo de geração' },
          { value: '−97,5%', label: 'redução no tempo de resposta' },
        ],
        technologies: ['Laravel 12', 'Redis', 'MinIO', 'Postgres'],
      },
      {
        name: 'Microsserviço WhatsApp',
        summary:
          'Integra os sistemas da empresa à API OMNE para enviar OTPs, avisos de cobrança e mensagens operacionais por um canal oficial.',
        problem: 'Templates fixos no código exigiam deploy a cada ajuste de texto.',
        solution: [
          'Serviço em **NestJS** que centraliza o envio de WhatsApp de toda a empresa.',
          'Painel para o time de negócios gerenciar templates sem depender da TI.',
        ],
        outcome:
          'Canal único de WhatsApp da empresa, com o time de negócios gerindo templates sem depender da TI.',
        metrics: [
          { value: '50 mil+', label: 'mensagens por dia' },
          { value: '5', label: 'tipos de templates' },
        ],
        technologies: ['NestJS', 'TypeScript', 'Redis', 'API OMNE'],
      },
    ],
  },
  {
    title: 'Desenvolvedor Fullstack Freelancer',
    company: 'Autônomo · Remoto',
    period: 'Jan 2024 – Dez 2024',
    description: 'Criei e lancei uma ==plataforma de publicação literária==.',
    bulletPoints: [
      '**Arquitetura:** **CodeIgniter** e **MySQL** com camadas separadas para facilitar a manutenção.',
      '**Comunidade:** Acesso por perfil, comentários, avaliações e métricas de leitura.',
      '**Produto:** Participação em todas as etapas, do levantamento de requisitos ao deploy na **Hostinger**.',
    ],
    projects: [
      {
        name: 'Erupção das Letras',
        summary:
          'Plataforma para autores independentes publicarem e venderem obras direto aos leitores, com capítulos e assinaturas.',
        problem:
          'Faltava um lugar que unisse leitura agradável, interação entre usuários e pagamentos seguros.',
        solution: [
          'Rede social integrada a pagamentos via **Stripe**, com perfis, denúncias, comentários e publicações.',
          'RBAC para autores, leitores e administradores.',
          'Leitor responsivo com **jQuery**, ajuste de fonte e índices compostos para acelerar o catálogo.',
        ],
        outcome:
          'Plataforma entregue no prazo e validada com o cliente, com pagamentos via Stripe e perfis de autor, leitor e admin.',
        technologies: ['CodeIgniter', 'PHP', 'MySQL', 'jQuery', 'Stripe'],
      },
    ],
  },
]
