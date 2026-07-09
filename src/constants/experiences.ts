import type { Experience } from '../types/experience'

export const experiences: Experience[] = [
  {
    title: 'Desenvolvedor Fullstack Freelancer',
    company: 'Autônomo · Remoto',
    period: 'Jan 2024 – Dez 2024',
    description:
      'Desenvolvimento de ==uma plataforma web sob medida== para um cliente, atuando em todas as etapas do projeto, desde o levantamento de requisitos até a implantação em produção.',

    bulletPoints: [
      '**Desenvolvimento Fullstack:** Construção completa da aplicação utilizando **CodeIgniter**, **jQuery**, **MySQL**, HTML, CSS e JavaScript.',

      '**Ecossistema Literário:** Desenvolvimento de funcionalidades para publicação de obras, capítulos, perfis de autores, comentários, avaliações e interação entre escritores e leitores.',

      '**Integração de Pagamentos:** Implementação da integração com **Stripe** para monetização da plataforma, permitindo cobranças e gerenciamento do fluxo de pagamentos.',

      '**Deploy & Infraestrutura:** Configuração do ambiente de produção e implantação da aplicação na **Hostinger**, incluindo banco de dados, domínio e manutenção evolutiva.',
    ],

    projects: [
      {
        name: 'Erupção das Letras',
        context:
          'Plataforma social voltada para escritores e leitores, permitindo publicação de livros, descoberta de obras, interação entre usuários e monetização de conteúdo.',

        importance:
          'Projeto desenvolvido para criar um ambiente completo de produção e consumo de conteúdo literário.',

        problem:
          'O cliente precisava centralizar publicação, leitura e monetização em uma única plataforma, oferecendo uma experiência semelhante às grandes plataformas de leitura online.',

        decisions: [
          'Desenvolvimento da aplicação utilizando **CodeIgniter** seguindo a arquitetura MVC.',
          'Implementação de perfis distintos para escritores e leitores com regras de acesso específicas.',
          'Integração com **Stripe** para processamento de pagamentos e monetização da plataforma.',
          'Criação de módulos para publicação de obras, capítulos, comentários, avaliações e interação entre usuários.',
          'Modelagem do banco de dados para suportar crescimento da plataforma e organização do catálogo de obras.',
        ],

        tradeoffs:
          'O uso do CodeIgniter proporcionou rapidez no desenvolvimento e facilidade de hospedagem compartilhada, embora exigisse maior responsabilidade na organização da arquitetura em comparação com frameworks mais opinativos.',

        outcome:
          'Entrega de uma plataforma funcional para publicação e descoberta de obras literárias, permitindo que escritores compartilhassem conteúdo e interagissem diretamente com seus leitores.',

        technologies: ['CodeIgniter', 'PHP', 'MySQL', 'jQuery', 'JavaScript', 'Stripe'],
      },
    ],
  },
  {
    title: 'Desenvolvedor Backend Trainee',
    company: 'Ágil Empréstimos · Monte Belo',
    period: 'Abril 2025 – Fev 2026',
    description:
      'Atuação no desenvolvimento e modernização de ==sistemas core== da empresa, com foco em performance, escalabilidade e manutenção de código.',
    bulletPoints: [
      '**Sistema de Mensageria:** Implementação de disparos multicanal com **RabbitMQ** e **Redis**, garantindo o processamento de mais de **100 mil faturas por dia** com alta disponibilidade.',

      '**Otimização de Processos:** Redução do tempo de geração de relatórios em **97,5%** (de 40 minutos para menos de 1 minuto) através de processamento assíncrono e streaming de dados.',

      '**Evolução Tecnológica:** Desenvolvimento de novos microserviços com **NestJS** e manutenção evolutiva em sistemas legados utilizando **CodeIgniter**.',

      '**Cultura Técnica:** Criação de documentação técnica e diagramas arquiteturais para facilitar o suporte e o onboarding de novos membros no time.',
    ],
    projects: [
      {
        name: 'Cronograma Automático de Disparo de Faturas',
        context:
          'Sistema responsável por ==automatizar o envio de faturas== por E-mail, SMS e WhatsApp.',
        importance:
          'Fundamental para a previsibilidade do fluxo de caixa e redução da inadimplência.',
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
        context:
          'Microserviço responsável pela conexão entre o sistema interno e o WhatsApp Gateway.',
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
    ],
  },
  {
    title: 'Desenvolvedor Fullstack Freelancer',
    company: 'Autônomo · Remoto',
    period: 'Fev 2026 – Atual',
    description:
      'Desenvolvimento de ==sistemas web personalizados== utilizando Laravel, com atuação em todas as etapas do projeto, desde o levantamento de requisitos até o deploy em produção.',
    bulletPoints: [
      '**Desenvolvimento Fullstack:** Criação de aplicações completas com **Laravel**, **Blade**, **Tailwind CSS**, **Alpine.js** e **MySQL**, priorizando código limpo, segurança e escalabilidade.',

      '**Arquitetura Backend:** Implementação de APIs REST, autenticação, filas (**Queues**), Jobs, sistema de permissões, integrações com serviços externos e regras de negócio complexas.',

      '**Deploy & Infraestrutura:** Configuração de ambientes Linux e hospedagem em provedores como **Hostinger** e VPS.',

      '**Relacionamento com Clientes:** Levantamento de requisitos, definição de arquitetura, desenvolvimento de funcionalidades sob demanda e suporte pós-entrega, garantindo soluções alinhadas às necessidades do negócio.',
    ],
    projects: [
      {
        name: 'Plataforma Franquias Panda',
        context:
          'Sistema web desenvolvido sob medida para centralizar a operação da Franquias Panda, integrando administradores, franqueados e clientes em uma única plataforma.',
        importance:
          'Aplicação responsável pela gestão de contratos, campanhas, empresas, aparelhos, conteúdos, benefícios e processos administrativos da franquia.',
        problem:
          'A empresa dependia de processos descentralizados e operações manuais, dificultando o gerenciamento da rede de franquias e a evolução das funcionalidades.',
        decisions: [
          'Desenvolvimento de uma arquitetura modular em Laravel para facilitar manutenção e evolução do sistema.',
          'Separação da aplicação em painéis específicos para administradores, franqueados e clientes, cada um com permissões e funcionalidades próprias.',
          'Implementação de módulos para gestão de contratos, campanhas publicitárias, empresas, aparelhos, blogs e conteúdos administrativos.',
          'Criação de dashboards com indicadores, filtros e relatórios para apoio à tomada de decisão.',
          'Automação de processos como geração de contratos em PDF, validações, fluxo de assinaturas e gerenciamento operacional.',
          'Desenvolvimento de componentes reutilizáveis com Blade, TailwindCSS e Alpine.js para manter consistência visual e reduzir duplicação de código.',
        ],
        tradeoffs:
          'A grande quantidade de regras de negócio e diferentes perfis de acesso aumentou a complexidade da aplicação, porém proporcionou uma plataforma flexível, organizada e preparada para futuras expansões.',
        outcome:
          'O sistema passou a centralizar os principais processos da Franquias Panda, reduzindo atividades manuais, aumentando a autonomia da equipe administrativa e melhorando a experiência de franqueados e clientes.',
        technologies: [
          'Laravel',
          'PHP',
          'MySQL',
          'Blade',
          'TailwindCSS',
          'Alpine.js',
          'JavaScript',
        ],
      },
    ],
  },
]
