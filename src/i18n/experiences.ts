import type { Language } from '../composables/useLanguage'
import type { Experience } from '../types/experience'
import { withSameKeys } from '../types/utils'

const pt = [
  {
    title: 'Desenvolvedor Fullstack Freelancer',
    company: 'Autônomo · Remoto',
    period: 'Jan 2024 – Dez 2024',
    description:
      'Concepção e entrega de ==plataforma web para publicação e monetização literária==, assumindo todo o ciclo de engenharia: levantamento técnico de requisitos, modelagem relacional, desenvolvimento fullstack e implantação em produção.',

    bulletPoints: [
      '**Arquitetura e desenvolvimento:** Estruturação da aplicação com **CodeIgniter (PHP)** e **MySQL**, aplicando separação clara de camadas de serviço e repositório para facilitar manutenções futuras.',
      '**Controle de acesso e engajamento:** Implementação de autenticação e RBAC para isolar permissões entre autores e leitores, além de módulos dinâmicos de comentários, avaliações e métricas de leitura.',
      '**Integração financeira:** Configuração de checkout seguro via **Stripe**, automatizando a liberação de capítulos e obras pagas por meio do tratamento de webhooks transacionais.',
      '**Deploy e infraestrutura:** Provisionamento do ambiente na **Hostinger**, configuração de domínios, SSL, rotinas automatizadas de backup e otimização de queries para planos compartilhados.',
    ],

    projects: [
      {
        name: 'Erupção das Letras',
        context:
          'Plataforma social e de publicação digital voltada para a produção, consumo e monetização direta de obras literárias independentes.',
        importance:
          'Permitir que o cliente validasse no mercado um modelo de negócio baseado em venda avulsa de capítulos e assinaturas de autores, com baixa barreira operacional.',
        problem:
          'Inexistência de um ecossistema integrado que unificasse leitura confortável no navegador, interação social entre usuários e processamento seguro de pagamentos sob uma mesma conta.',
        decisions: [
          'Modelagem relacional normalizada em **MySQL** para gerenciar hierarquia de publicações (obras, volumes e capítulos) com versionamento de rascunhos.',
          'Consumo assíncrono de webhooks da **Stripe** com controle de idempotência para evitar duplicidade na liberação de conteúdos.',
          'Separação estrita de permissões via RBAC para segregar perfis de autores, leitores e moderação administrativa.',
          'Desenvolvimento de leitor web responsivo com tipografia ajustável e renderização leve com **jQuery** e CSS modular.',
          'Estruturação de índices em chaves compostas no banco para garantir carregamento instantâneo do feed e da busca de obras.',
        ],
        tradeoffs:
          'A escolha pelo CodeIgniter viabilizou rápida entrega e baixo custo de hospedagem compartilhada, mas demandou a implementação manual de camadas de abstração ausentes no framework para manter o código desacoplado.',
        outcome:
          'Lançamento da plataforma em produção dentro do prazo estabelecido, com processamento de pagamentos 100% estável e catálogo ativo de autores independentes.',
        technologies: ['CodeIgniter', 'PHP', 'MySQL', 'jQuery', 'JavaScript', 'Stripe'],
      },
    ],
  },
  {
    title: 'Desenvolvedor Backend Trainee',
    company: 'Ágil Empréstimos · Monte Belo',
    period: 'Abr 2025 – Fev 2026',
    description:
      'Atuação na engenharia de backend e sustentação dos ==sistemas centrais de crédito e faturamento==, com foco em pipelines de mensageria assíncrona, refatoração de gargalos de banco e modernização de serviços legados.',
    bulletPoints: [
      '**Mensageria e processamento assíncrono:** Construção de pipelines com **RabbitMQ** e **Redis**, garantindo o processamento distribuído e tolerante a falhas de mais de **100 mil faturas diárias**.',
      '**Otimização de desempenho:** Redução de **97,5% no tempo de geração** de relatórios operacionais (de 40 minutos para menos de 1 minuto), aplicando streaming de dados e reestruturação de consultas SQL.',
      '**Modernização de microsserviços:** Construção de novos serviços em **NestJS (TypeScript)** e manutenção corretiva/evolutiva em sistemas transacionais legados em **CodeIgniter**.',
      '**Diagnóstico e observabilidade:** Investigação e resolução de incidentes em clusters **Kubernetes** utilizando **Lens**, analisando ciclos de vida de pods, services, métricas de consumo e logs de aplicação.',
      '**Padronização e documentação:** Elaboração de documentações de API e diagramas de fluxo arquitetural, acelerando o onboarding de novos desenvolvedores e o suporte entre equipes.',
    ],
    projects: [
      {
        name: 'Automação Multicanal de Faturas',
        context:
          'Sistema automatizado para orquestração e despacho de cobranças via E-mail, SMS e WhatsApp integrado ao core financeiro.',
        importance:
          'Mitigar a inadimplência por atraso de envio, conferir previsibilidade ao fluxo de caixa e eliminar intervenções manuais na cobrança.',
        problem:
          'Envios eram realizados manualmente, sem fila centralizada ou rastreabilidade de entrega, provocando gargalos operacionais e alto índice de inconsistências nos envios.',
        decisions: [
          'Estruturação de filas assíncronas no **RabbitMQ** para desacoplar a geração de títulos do envio externo, absorvendo picos de demanda sem indisponibilidade.',
          'Implementação de cache de dados cadastrais no **Redis** e armazenamento de comprovantes/QR Codes no **MinIO** via S3 API para aliviar a carga no banco relacional.',
        ],
        tradeoffs:
          'A introdução de mensageria assíncrona adicionou complexidade no rastreamento de estados parciais de envio, mitigada com logs estruturados de eventos por fatura.',
        outcome:
          'Processo 100% automatizado com capacidade homologada para mais de **100 mil transações diárias**, eliminando erros de envio manual.',
        technologies: ['Laravel 11', 'RabbitMQ', 'Redis', 'MinIO'],
      },
      {
        name: 'Processamento Assíncrono de Relatórios Financeiros',
        context:
          'Módulo especializado na consolidação e exportação de dados contábeis e operacionais volumosos para auditoria e controladoria.',
        importance:
          'Disponibilizar métricas auditáveis essenciais para fechamento diário e decisões executivas sem degradar o ambiente transacional.',
        problem:
          'Consultas síncronas bloqueavam tabelas transacionais e causavam estouro de memória no servidor PHP, gerando timeouts de até **40 minutos** e falhas de exportação.',
        decisions: [
          'Migração da extração de dados para jobs assíncronos no **Redis Queues**, liberando as conexões HTTP dos usuários de forma imediata.',
          'Otimização de índices relacionais e implementação de **cursor-based streaming**, gerando e gravando arquivos diretamente no **MinIO** sem retenção em memória RAM.',
        ],
        tradeoffs:
          'A construção de um serviço dedicado substituiu patches paliativos no legado, exigindo validação rigorosa de conciliação de dados entre o modelo antigo e o novo.',
        outcome:
          'Redução no tempo de geração de **40 minutos para menos de 60 segundos**, com zero ocorrências de timeout e consumo de memória estabilizado.',
        technologies: ['Laravel 12', 'Redis', 'MinIO', 'SQL Optimization'],
      },
      {
        name: 'Microsserviço de Mensageria WhatsApp (API OMNE)',
        context:
          'Microsserviço integrador entre a infraestrutura interna da empresa e o provedor oficial de mensageria via API OMNE.',
        importance:
          'Assegurar um canal seguro e homologado para envio de códigos de validação (OTP) e avisos transacionais com alta taxa de entrega.',
        problem:
          'Regras de negócio e modelos de mensagens ficavam codificados de forma rígida no backend, demandando deploys técnicos para qualquer ajuste de texto ou template.',
        decisions: [
          'Desenvolvimento de microsserviço isolado com **NestJS** e **TypeScript**, tratando autenticação com tokens, retentativas e webhooks de entrega e leitura.',
          'Criação de painel de controle administrativo para homologação e gestão de templates de mensagens pela equipe de negócios sem intervenção da TI.',
        ],
        tradeoffs:
          'A utilização de provedor oficial e a separação em microsserviço introduziram latência de rede adicional, compensada pela garantia de entregabilidade e conformidade com as políticas do WhatsApp.',
        outcome:
          'Autonomia completa para as áreas operacionais na gestão de campanhas e rastreabilidade em tempo real do status de cada mensagem enviada.',
        technologies: ['NestJS', 'TypeScript', 'Redis', 'API OMNE', 'Node.js'],
      },
    ],
  },
  {
    title: 'Desenvolvedor Fullstack Freelancer',
    company: 'Autônomo · Remoto',
    period: 'Fev 2026 – Ago 2026',
    description:
      'Engenharia e implantação de ==sistema web corporativo== para gestão integrada de rede de franquias, centralizando operações financeiras, contratos digitais e governança multi-unidade em produção.',
    bulletPoints: [
      '**Desenvolvimento Fullstack:** Construção da plataforma utilizando **Laravel**, **MySQL**, **Tailwind CSS** e **Alpine.js**, priorizando código testável e interface responsiva.',
      '**Arquitetura de dados e processos:** Criação de APIs RESTful, controle de acesso granular multi-tenant, processamento assíncrono de relatórios e emissão automatizada de contratos em PDF.',
      '**Infraestrutura e segurança:** Configuração de servidores Linux em VPS, políticas de firewall, Nginx, certificados SSL e esteiras de deploy para garantir disponibilidade da rede.',
      '**Alinhamento de produto:** Levantamento de requisitos diretamente com a liderança, definição de roadmap de entregas e suporte técnico pós-lançamento aos franqueados.',
    ],
    projects: [
      {
        name: 'Plataforma Franquias Panda',
        context:
          'Sistema ERP sob medida projetado para unificar a gestão operacional, financeira e contratual entre franqueadora, franqueados e clientes.',
        importance:
          'Eliminar o uso de controles manuais em planilhas e dar visibilidade em tempo real sobre adesão de campanhas, faturamento e conformidade das unidades.',
        problem:
          'A dispersão de informações em canais informais causava atrasos na aprovação de contratos, extravio de inventário de dispositivos e falta de métricas consolidadas de desempenho.',
        decisions: [
          'Arquitetura modular em **Laravel** orientada a serviços para facilitar a inclusão de novas verticais de negócio.',
          'Isolamento de contextos com painéis dedicados para administradores, franqueados e clientes finais via policies e RBAC.',
          'Módulos para gestão de contratos, controle de estoque de dispositivos, campanhas de incentivo e catálogo de conteúdos corporativos.',
          'Dashboards analíticos com filtros compostos para acompanhamento de faturamento e engajamento por unidade.',
          'Pipeline automatizado para geração e assinatura digital de contratos em PDF com registros de auditoria.',
          'Componentização da interface com **Blade**, **Tailwind CSS** e **Alpine.js**, garantindo carregamento rápido e consistência visual.',
        ],
        tradeoffs:
          'A multiplicidade de papéis e regras contratuais customizadas elevou a complexidade das regras de negócio, compensada pela criação de uma suíte de testes unitários e de integração para prevenir regressões.',
        outcome:
          'Centralização completa da operação da rede em uma única plataforma, reduzindo o tempo de fechamento contratual e proporcionando total autonomia administrativa.',
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
  {
    title: 'Desenvolvedor Backend Junior',
    company: 'Ágil Empréstimos · Monte Belo',
    period: 'Ago 2026 – Atual',
    description:
      'Engenharia e evolução contínua de ==serviços de alta criticidade no ecossistema de crédito e cobrança==, atuando no desacoplamento de microsserviços, observabilidade em Kubernetes e garantia de resiliência em rotas transacionais.',
    bulletPoints: [
      '**Microsserviços de alto desempenho:** Desenvolvimento de APIs corporativas com **NestJS** e **Laravel 13**, garantindo baixa latência em rotas transacionais de alto volume e manutenção de legados em **CodeIgniter**.',
      '**Observabilidade em Kubernetes:** Diagnóstico proativo de incidentes em produção com **Lens**, inspecionando ciclo de vida de pods, roteamento de services, logs estruturados e contenção de falhas em tempo real.',
      '**Resiliência transacional:** Implementação de mecanismos de fallback e reprocessamento automático para liquidação e envio de faturas, eliminando perdas de comunicação com clientes.',
      '**Governança de dados e testes:** Refatoração de consultas analíticas e criação de testes automatizados para assegurar conformidade e integridade contábil nas operações de crédito.',
    ],
    projects: [
      {
        name: 'Automação e Resiliência na Cobrança de Acordos',
        context:
          'Sistema de régua de cobrança automática para acordos de crédito, orquestrando envio prioritário via WhatsApp com failover instantâneo para SMS.',
        importance:
          'Acelerar a recuperação de crédito e garantir que clientes recebam os títulos antes do vencimento, mitigando a quebra de acordos.',
        problem:
          'O fluxo dependia de envios manuais e desordenados, sem rastreabilidade de entrega, provocando atrasos nos pagamentos, aumento de cancelamento de acordos e sobrecarga no suporte.',
        decisions: [
          'Desenvolvimento de pipeline assíncrono em **Laravel 13** com **Redis**, isolando o processamento em filas concorrentes para suportar picos sazonais de vencimento.',
          'Implementação de **failover multicanal automático**: a não confirmação de entrega do WhatsApp aciona envio imediato de contingência via SMS com o código da fatura.',
          'Criação de chaves de idempotência e locks distribuídos no Redis para impedir envios duplicados em cenários de reprocessamento por webhook.',
          'Rastreabilidade de ponta a ponta com registro detalhado de status (gerado, enviado, entregue, falha e pago) para auditoria operacional.',
        ],
        tradeoffs:
          'A arquitetura com múltiplos canais e failover em tempo real exigiu atenção redobrada no gerenciamento de estados assíncronos e retentativas para evitar notificações em duplicidade.',
        outcome:
          '100% de rastreabilidade sobre os envios de acordos, redução expressiva na quebra de negociações por falta de fatura e eliminação do trabalho manual de disparo.',
        technologies: ['Laravel 13', 'Redis', 'WhatsApp API', 'SMS'],
      },
    ],
  },
] satisfies Experience[]

const en = withSameKeys<typeof pt>()([
  {
    title: 'Freelance Fullstack Developer',
    company: 'Freelance · Remote',
    period: 'Jan 2024 – Dec 2024',
    description:
      'Design and end-to-end delivery of a ==web platform for literary publishing and monetization==, covering technical requirements gathering, relational data modeling, fullstack development, and production deployment.',

    bulletPoints: [
      '**Architecture & development:** Engineered the core application using **CodeIgniter (PHP)** and **MySQL**, establishing a clear separation of service and repository layers for sustainable maintainability.',
      '**Access control & engagement:** Implemented authentication and RBAC to isolate permissions between authors and readers, alongside dynamic modules for comments, ratings, and reading metrics.',
      '**Financial integration:** Integrated secure checkout via **Stripe**, automating content access upon payment confirmation through transactional webhook handling.',
      '**Deployment & infrastructure:** Provisioned production hosting on **Hostinger**, managing domain routing, SSL certification, automated backup routines, and database query tuning for shared environments.',
    ],

    projects: [
      {
        name: 'Erupção das Letras',
        context:
          'Social and digital publishing platform designed for independent authors to produce, distribute, and directly monetize literary works.',
        importance:
          'Enabled the client to validate a digital business model based on individual chapter sales and author subscriptions with minimal operational friction.',
        problem:
          'Lack of an integrated ecosystem combining comfortable in-browser reading, author-reader social interaction, and secure payment processing under a unified account.',
        decisions: [
          'Normalized relational schema in **MySQL** to manage publication hierarchies (books, volumes, and chapters) with draft versioning support.',
          'Asynchronous consumption of **Stripe** webhooks with idempotency checks to prevent duplicate content unlocking.',
          'Strict RBAC implementation separating access privileges across author, reader, and administrative moderation profiles.',
          'Responsive in-browser reader interface featuring configurable typography and lightweight rendering using **jQuery** and modular CSS.',
          'Composite indexing strategy across high-traffic tables to maintain instant feed loading and catalog search speeds.',
        ],
        tradeoffs:
          'Choosing CodeIgniter enabled fast time-to-market and low-cost shared hosting, but required building manual architectural abstractions absent in the framework to prevent tight coupling.',
        outcome:
          'Platform deployed to production on schedule with 100% stable payment processing and an active catalog of published independent authors.',
        technologies: ['CodeIgniter', 'PHP', 'MySQL', 'jQuery', 'JavaScript', 'Stripe'],
      },
    ],
  },
  {
    title: 'Backend Developer Trainee',
    company: 'Ágil Empréstimos · Monte Belo',
    period: 'Apr 2025 – Feb 2026',
    description:
      'Engineered backend solutions and maintained ==core credit and billing systems==, focusing on asynchronous messaging pipelines, database query optimization, and legacy service modernization.',
    bulletPoints: [
      '**Messaging & asynchronous processing:** Built resilient event pipelines with **RabbitMQ** and **Redis**, processing over **100,000 daily invoices** with distributed throughput control.',
      '**Performance optimization:** Cut operational report generation time by **97.5%** (from 40 minutes to under 1 minute) through cursor-based data streaming and SQL query tuning.',
      '**Microservice modernization:** Developed domain-oriented microservices with **NestJS (TypeScript)** while maintaining and incrementally refactoring transactional legacy systems in **CodeIgniter**.',
      '**Troubleshooting & observability:** Diagnosed and resolved production issues across **Kubernetes** clusters using **Lens**, analyzing pod lifecycles, service routing, resource utilization, and container logs.',
      '**Technical documentation:** Created comprehensive API documentation and architectural diagrams, reducing team onboarding overhead and streamlining cross-team support.',
    ],
    projects: [
      {
        name: 'Automatic Multichannel Invoice Dispatch',
        context:
          'Automated orchestration system for dispatching financial invoices via Email, SMS, and WhatsApp, integrated with the core billing engine.',
        importance:
          'Mitigate customer delinquency, provide cash flow predictability, and eliminate manual human intervention in daily billing.',
        problem:
          'Invoices were dispatched manually without centralized queuing or delivery tracking, leading to network bottlenecks and frequent billing discrepancies.',
        decisions: [
          'Structured asynchronous worker pools in **RabbitMQ** to decouple invoice generation from external messaging providers, absorbing peak loads seamlessly.',
          'Cached customer reference data in **Redis** and offloaded invoice artifacts/QR codes to **MinIO** via S3 API, significantly reducing relational database I/O.',
        ],
        tradeoffs:
          'Adopting asynchronous message queues introduced tracking complexity across intermediate states, which was mitigated by implementing structured event-level logging per invoice.',
        outcome:
          'Achieved a fully automated process handling over **100,000 daily transactions**, entirely eliminating manual billing errors.',
        technologies: ['Laravel 11', 'RabbitMQ', 'Redis', 'MinIO'],
      },
      {
        name: 'Asynchronous Financial Reporting Pipeline',
        context:
          'Dedicated pipeline for consolidating and exporting high-volume operational and accounting datasets for internal audits and financial controllers.',
        importance:
          'Delivered audit-ready financial metrics essential for daily business closing and executive decisions without degrading transactional database health.',
        problem:
          'Synchronous SQL queries triggered database locks and PHP memory exhaustion, resulting in timeouts of up to **40 minutes** and failed downloads.',
        decisions: [
          'Offloaded data extraction workloads to background workers managed by **Redis Queues**, immediately freeing client HTTP connections.',
          'Refactored SQL queries with index optimization and implemented **cursor-based streaming**, persisting export files directly to **MinIO** with minimal RAM overhead.',
        ],
        tradeoffs:
          'Building an isolated service replaced legacy hotfixes but required extensive data reconciliation testing to ensure 100% accounting accuracy against historic outputs.',
        outcome:
          'Reduced report generation time from **40 minutes to under 60 seconds**, maintaining zero timeout incidents and fully stabilized memory utilization.',
        technologies: ['Laravel 12', 'Redis', 'MinIO', 'SQL Optimization'],
      },
      {
        name: 'WhatsApp Messaging Gateway (OMNE API)',
        context:
          'Integration microservice connecting internal core platforms to the official WhatsApp Business provider via OMNE API.',
        importance:
          'Guaranteed a secure, certified communication channel for mission-critical notifications and one-time password (OTP) verification with high delivery rates.',
        problem:
          'Message templates and routing rules were hardcoded in application logic, requiring code changes and technical deployments for minor text adjustments.',
        decisions: [
          'Engineered a standalone microservice using **NestJS** and **TypeScript**, handling token authorization, automated retries, and inbound delivery/read webhooks.',
          'Built a dedicated administrative interface enabling business teams to configure, test, and manage message templates autonomously.',
        ],
        tradeoffs:
          'Transitioning to an official intermediary and standalone microservice introduced slight network overhead, outweighed by guaranteed delivery rates and full compliance with messaging policies.',
        outcome:
          'Granted full operational autonomy to marketing and operations teams while providing real-time visibility into message delivery status.',
        technologies: ['NestJS', 'TypeScript', 'Redis', 'API OMNE', 'Node.js'],
      },
    ],
  },
  {
    title: 'Freelance Fullstack Developer',
    company: 'Freelance · Remote',
    period: 'Feb 2026 – Aug 2026',
    description:
      'Architected and deployed a ==multi-tenant enterprise management platform== for a franchise network, centralizing financial tracking, digital contracts, and unit operations in production.',
    bulletPoints: [
      '**Fullstack development:** Built the application core using **Laravel**, **MySQL**, **Tailwind CSS**, and **Alpine.js**, emphasizing test-driven domain logic and reactive, responsive UI.',
      '**Data architecture & automation:** Designed RESTful APIs, multi-tenant RBAC policies, background workers for data exports, and automated cryptographic PDF contract generation.',
      '**Infrastructure & security:** Provisioned and secured Linux VPS environments with Nginx reverse proxy, SSL enforcement, automated backups, and zero-downtime deployment workflows.',
      '**Product strategy:** Mapped domain requirements directly with executive stakeholders, planned iterative sprint releases, and delivered ongoing technical support to franchise owners.',
    ],
    projects: [
      {
        name: 'Franquias Panda Platform',
        context:
          'Tailored ERP system designed to unify operational, financial, and contractual management across the franchisor, franchisee branches, and end clients.',
        importance:
          'Eliminated fragmented spreadsheet workflows, providing real-time executive visibility into franchise revenue, campaign performance, and contractual compliance.',
        problem:
          'Decentralized communication across informal channels caused contract validation delays, hardware inventory discrepancies, and an absence of unified performance metrics.',
        decisions: [
          'Modular service-oriented architecture in **Laravel** enabling rapid integration of new business feature sets.',
          'Scoped permission boundaries creating dedicated portals for franchisors, branch owners, and end clients via Laravel policies.',
          'Integrated domain modules for contract management, hardware tracking, incentive campaigns, and corporate content distribution.',
          'Analytical dashboards with composable filters tracking unit revenue, engagement rates, and performance benchmarks.',
          'Automated pipeline for digital contract rendering in PDF format with verifiable audit trail logging.',
          'Reusable interface components engineered with **Blade**, **Tailwind CSS**, and **Alpine.js** for fast rendering and UI consistency.',
        ],
        tradeoffs:
          'Handling extensive custom contract logic and layered authorization boundaries increased domain complexity, balanced by a robust automated test suite to prevent regressions.',
        outcome:
          'Full operational centralization onto a single platform, shortening contract closing turnaround and delivering end-to-end administrative clarity.',
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
  {
    title: 'Junior Backend Developer',
    company: 'Ágil Empréstimos · Monte Belo',
    period: 'Aug 2026 – Present',
    description:
      'Engineering and continuous improvement of ==mission-critical financial services across credit and billing systems==, focusing on microservice decoupling, Kubernetes observability, and transactional resilience.',
    bulletPoints: [
      '**High-throughput microservices:** Engineered production APIs with **NestJS** and **Laravel 13**, maintaining low latency across critical transaction routes while sustaining legacy **CodeIgniter** services.',
      '**Kubernetes observability:** Investigated and resolved production issues using **Lens**, analyzing pod lifecycles, service routing, structured container logs, and cluster resource contention in real time.',
      '**Transactional resilience:** Built automated fallback and retry mechanisms for invoice delivery and reconciliation, eliminating communication drops with borrowers.',
      '**Data governance & testing:** Optimized analytical database queries and expanded automated test coverage to enforce accounting integrity across loan workflows.',
    ],
    projects: [
      {
        name: 'Automated Agreement Invoice Delivery & Failover',
        context:
          'Automated billing notification pipeline for credit renegotiations, orchestrating priority delivery via WhatsApp with automated SMS failover.',
        importance:
          'Accelerated debt recovery by ensuring borrowers receive payment credentials reliably before due dates, reducing broken agreements.',
        problem:
          'The workflow depended on manual message dispatches lacking delivery traceability, causing payment delays, broken agreement rates, and overloaded support queues.',
        decisions: [
          'Developed an asynchronous pipeline in **Laravel 13** backed by **Redis**, isolating execution across concurrent queues to absorb month-end payment spikes.',
          'Engineered an **automated multichannel failover**: delivery failure or timeout on WhatsApp instantly triggers a contingency SMS containing invoice credentials.',
          'Implemented distributed locking and idempotency keys in Redis to guarantee zero duplicate messages during webhook retries.',
          'Full lifecycle traceability logging every state transition (queued, dispatched, delivered, failed, settled) for operational auditing.',
        ],
        tradeoffs:
          'Managing real-time cross-channel failover required rigorous asynchronous state machines and retry handling to eliminate any risk of duplicate notifications.',
        outcome:
          'Achieved 100% delivery auditability on renegotiation notices, significantly lowering broken agreement rates and eliminating manual dispatch overhead.',
        technologies: ['Laravel 13', 'Redis', 'WhatsApp API', 'SMS'],
      },
    ],
  },
] satisfies Experience[])

const es = withSameKeys<typeof pt>()([
  {
    title: 'Desarrollador Fullstack Freelance',
    company: 'Autónomo · Remoto',
    period: 'Ene 2024 – Dic 2024',
    description:
      'Diseño y entrega integral de una ==plataforma web para publicación y monetización literaria==, abarcando el relevamiento técnico de requerimientos, modelado relacional, desarrollo fullstack y despliegue en producción.',

    bulletPoints: [
      '**Arquitectura y desarrollo:** Estructuración de la aplicación con **CodeIgniter (PHP)** y **MySQL**, aplicando una separación clara de capas de servicio y repositorio para facilitar el mantenimiento futuro.',
      '**Control de acceso e interacción:** Implementación de autenticación y RBAC para aislar permisos entre autores y lectores, además de módulos dinámicos de comentarios, calificaciones y métricas de lectura.',
      '**Integración financiera:** Configuración de checkout seguro con **Stripe**, automatizando la liberación de contenido tras la confirmación de pago mediante webhooks transaccionales.',
      '**Despliegue e infraestructura:** Aprovisionamiento del entorno en **Hostinger**, configuración de dominios, SSL, rutinas automatizadas de respaldo y optimización de consultas para planes compartidos.',
    ],

    projects: [
      {
        name: 'Erupção das Letras',
        context:
          'Plataforma social y de publicación digital orientada a la producción, distribución y monetización directa de obras literarias independientes.',
        importance:
          'Permitió al cliente validar en el mercado un modelo de negocio basado en la venta de capítulos individuales y suscripciones de autores, con baja fricción operativa.',
        problem:
          'Inexistencia de un ecosistema integrado que unificara lectura cómoda en el navegador, interacción social entre usuarios y procesamiento seguro de pagos bajo una sola cuenta.',
        decisions: [
          'Modelado relacional normalizado en **MySQL** para gestionar la jerarquía de publicaciones (obras, volúmenes y capítulos) con soporte para versionado de borradores.',
          'Consumo asíncrono de webhooks de **Stripe** con control de idempotencia para evitar duplicidades en la liberación de contenidos.',
          'Separación estricta de permisos mediante RBAC para segregar perfiles de autores, lectores y moderación administrativa.',
          'Desarrollo de lector web responsivo con tipografía adaptable y renderizado ligero mediante **jQuery** y CSS modular.',
          'Estructuración de índices en claves compuestas para mantener tiempos de respuesta inmediatos en el feed y la búsqueda del catálogo.',
        ],
        tradeoffs:
          'Elegir CodeIgniter permitió un lanzamiento ágil y bajo costo de alojamiento, pero exigió implementar manualmente capas de abstracción no nativas del framework para mantener el código desacoplado.',
        outcome:
          'Lanzamiento exitoso de la plataforma en producción dentro del plazo previsto, con procesamiento de pagos estable y un catálogo activo de autores independientes.',
        technologies: ['CodeIgniter', 'PHP', 'MySQL', 'jQuery', 'JavaScript', 'Stripe'],
      },
    ],
  },
  {
    title: 'Desarrollador Backend Trainee',
    company: 'Ágil Empréstimos · Monte Belo',
    period: 'Abr 2025 – Feb 2026',
    description:
      'Participación en la ingeniería backend y mantenimiento de los ==sistemas centrales de crédito y facturación==, con foco en procesamiento asíncrono, optimización de bases de datos y modernización de servicios heredados.',
    bulletPoints: [
      '**Mensajería y procesamiento asíncrono:** Construcción de flujos con **RabbitMQ** y **Redis**, garantizando el procesamiento distribuido de más de **100 mil facturas diarias** sin saturación.',
      '**Optimización de rendimiento:** Reducción del **97,5% en el tiempo de generación** de reportes (de 40 minutos a menos de 1 minuto), implementando streaming de datos y reestructuración SQL.',
      '**Modernización de microservicios:** Desarrollo de nuevos microservicios en **NestJS (TypeScript)** y mantenimiento evolutivo de sistemas transaccionales heredados en **CodeIgniter**.',
      '**Diagnóstico y observabilidad:** Investigación y resolución de incidencias en clústeres **Kubernetes** mediante **Lens**, analizando ciclos de vida de pods, services, métricas y registros de aplicación.',
      '**Estandarización y documentación:** Elaboración de documentación de APIs y diagramas de flujo arquitectónico, acelerando la incorporación de nuevos desarrolladores y el soporte operativo.',
    ],
    projects: [
      {
        name: 'Automatización Multicanal de Facturas',
        context:
          'Sistema automatizado para la orquestación y envío de cobros por Correo, SMS y WhatsApp integrado con el core financiero.',
        importance:
          'Mitigar la morosidad, otorgar previsibilidad al flujo de caja y eliminar intervenciones manuales en la gestión diaria de cobros.',
        problem:
          'Los envíos se realizaban manualmente sin una cola centralizada ni trazabilidad de entrega, generando cuellos de botella operativos y frecuentes inconsistencias.',
        decisions: [
          'Estructuración de colas asíncronas en **RabbitMQ** para desacoplar la generación de títulos de los envíos externos, absorbiendo picos de demanda sin interrupciones.',
          'Implementación de caché en **Redis** para datos recurrentes y almacenamiento de comprobantes/QR Codes en **MinIO** mediante S3 API, reduciendo el I/O en la base de datos.',
        ],
        tradeoffs:
          'La adopción de procesamiento asíncrono aumentó la complejidad en el seguimiento de estados intermedios, mitigada mediante registros estructurados de eventos por factura.',
        outcome:
          'Operación 100% automatizada con capacidad demostrada para más de **100 mil transacciones diarias**, eliminando errores de envío manual.',
        technologies: ['Laravel 11', 'RabbitMQ', 'Redis', 'MinIO'],
      },
      {
        name: 'Procesamiento Asíncrono de Reportes Financieros',
        context:
          'Módulo especializado en la consolidación y exportación de grandes volúmenes de datos contables y operativos para auditoría y control financiero.',
        importance:
          'Proveer métricas auditables indispensables para el cierre contable diario y la toma de decisiones ejecutivas sin degradar la base transaccional.',
        problem:
          'Consultas SQL síncronas generaban bloqueos de tablas y agotamiento de memoria en PHP, provocando timeouts de hasta **40 minutos** y descargas fallidas.',
        decisions: [
          'Migración de la extracción de datos a tareas en segundo plano gestionadas con **Redis Queues**, liberando de inmediato las conexiones HTTP del usuario.',
          'Optimización de índices relacionales e implementación de **streaming con cursores**, grabando los archivos directamente en **MinIO** sin sobrecarga de memoria RAM.',
        ],
        tradeoffs:
          'Desarrollar un servicio dedicado reemplazó parches temporales en el sistema legado, pero demandó una rigurosa validación de conciliación de datos contables.',
        outcome:
          'Reducción del tiempo de generación de **40 minutos a menos de 60 segundos**, con cero timeouts registrados y consumo de memoria estabilizado.',
        technologies: ['Laravel 12', 'Redis', 'MinIO', 'SQL Optimization'],
      },
      {
        name: 'Microservicio de Mensajería WhatsApp (API OMNE)',
        context:
          'Microservicio de integración entre las plataformas internas y el proveedor oficial de WhatsApp Business mediante la API OMNE.',
        importance:
          'Garantizar un canal seguro y homologado para la entrega de códigos de verificación (OTP) y notificaciones críticas con alta tasa de apertura.',
        problem:
          'Las plantillas y reglas de mensaje estaban acopladas en el código fuente, exigiendo despliegues técnicos ante cualquier cambio de texto o política.',
        decisions: [
          'Desarrollo de un microservicio independiente con **NestJS** y **TypeScript**, gestionando autenticación por tokens, reintentos y webhooks de entrega y lectura.',
          'Creación de un panel administrativo para que el equipo de negocio configure y homologue plantillas sin dependencia técnica directa.',
        ],
        tradeoffs:
          'La migración a un proveedor oficial y la separación en microservicio añadieron una leve latencia de red, compensada por la confiabilidad de entrega y cumplimiento normativo.',
        outcome:
          'Autonomía total para los equipos de negocio en la gestión de comunicaciones y trazabilidad en tiempo real sobre el estado de cada mensaje.',
        technologies: ['NestJS', 'TypeScript', 'Redis', 'API OMNE', 'Node.js'],
      },
    ],
  },
  {
    title: 'Desarrollador Fullstack Freelance',
    company: 'Autónomo · Remoto',
    period: 'Feb 2026 – Ago 2026',
    description:
      'Ingeniería y despliegue de una ==plataforma web corporativa== para la gestión integral de una red de franquicias, centralizando operaciones financieras, contratos digitales y gobernanza multiunidad.',
    bulletPoints: [
      '**Desarrollo Fullstack:** Construcción de la plataforma utilizando **Laravel**, **MySQL**, **Tailwind CSS** y **Alpine.js**, priorizando código mantenible e interfaz responsiva.',
      '**Arquitectura de datos y procesos:** Diseño de APIs RESTful, control de acceso multi-tenant granular, tareas en segundo plano para exportación de datos y generación automatizada de contratos en PDF.',
      '**Infraestructura y seguridad:** Configuración y endurecimiento de servidores Linux (VPS) con Nginx, SSL, copias de seguridad automatizadas y flujos de despliegue continuo.',
      '**Alineación de producto:** Relevamiento de requisitos directamente con los directivos, definición del roadmap de entregas y soporte técnico continuo a las unidades franquiciadas.',
    ],
    projects: [
      {
        name: 'Plataforma Franquias Panda',
        context:
          'Sistema ERP a medida diseñado para unificar la gestión operativa, financiera y contractual entre la empresa franquiciadora, franquiciados y clientes.',
        importance:
          'Eliminar el uso de planillas dispersas y brindar visibilidad en tiempo real sobre ingresos, desempeño de campañas y cumplimiento contractual de cada sede.',
        problem:
          'La dispersión de información en canales manuales provocaba retrasos en la validación de contratos, falta de control sobre inventario de dispositivos y ausencia de métricas consolidadas.',
        decisions: [
          'Arquitectura modular en **Laravel** orientada a servicios para facilitar la incorporación ágil de nuevos módulos de negocio.',
          'Aislamiento de contextos mediante paneles dedicados para administradores, franquiciados y clientes finales a través de políticas y RBAC.',
          'Módulos para la gestión de contratos, control de inventario de dispositivos, campañas de incentivos y contenidos corporativos.',
          'Dashboards analíticos con filtros dinámicos para monitoreo de ingresos y niveles de actividad por franquicia.',
          'Flujo automatizado para generación y validación digital de contratos en PDF con registro de auditoría.',
          'Componentes de interfaz reutilizables con **Blade**, **Tailwind CSS** y **Alpine.js**, asegurando tiempos de carga reducidos y coherencia visual.',
        ],
        tradeoffs:
          'La multiplicidad de roles y reglas contractuales específicas aumentó la densidad del dominio, compensada por la implementación de pruebas automatizadas para evitar regresiones.',
        outcome:
          'Centralización total de las operaciones de la red en una única plataforma, reduciendo los tiempos de formalización de contratos y otorgando autonomía operativa.',
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
  {
    title: 'Desarrollador Backend Junior',
    company: 'Ágil Empréstimos · Monte Belo',
    period: 'Ago 2026 – Actualidad',
    description:
      'Ingeniería y evolución continua de ==servicios críticos en el ecosistema de crédito y cobros==, participando en el desacoplamiento de microservicios, observabilidad en Kubernetes y resiliencia transaccional.',
    bulletPoints: [
      '**Microservicios de alto rendimiento:** Desarrollo de APIs corporativas con **NestJS** e **Laravel 13**, asegurando baja latencia en endpoints transaccionales y manteniendo servicios en **CodeIgniter**.',
      '**Observabilidad en Kubernetes:** Diagnóstico proactivo de incidencias en producción mediante **Lens**, inspeccionando pods, services, registros estructurados y contención de fallos en tiempo real.',
      '**Resiliencia transaccional:** Implementación de mecanismos de fallback y reintentos automatizados para la emisión y liquidación de facturas, evitando pérdidas de contacto con clientes.',
      '**Gobernanza de datos y pruebas:** Refactorización de consultas analíticas y cobertura de pruebas automatizadas para salvaguardar la integridad contable en las operaciones de crédito.',
    ],
    projects: [
      {
        name: 'Automatización y Resiliencia en Cobros de Acuerdos',
        context:
          'Sistema automatizado de notificaciones de cobro para acuerdos de crédito, con envío prioritario por WhatsApp y failover instantáneo hacia SMS.',
        importance:
          'Acelerar la recuperación de deuda y asegurar que los clientes reciban los comprobantes antes del vencimiento, reduciendo la rescisión de acuerdos.',
        problem:
          'El proceso dependía de envíos manuales sin trazabilidad, lo que provocaba retrasos en los pagos, rescisión involuntaria de acuerdos y saturación en el soporte.',
        decisions: [
          'Desarrollo de un flujo asíncrono en **Laravel 13** con **Redis**, aislando el procesamiento en colas concurrentes para absorber picos de vencimiento.',
          'Implementación de **failover multicanal automático**: ante fallos de entrega en WhatsApp, el sistema conmuta de inmediato hacia SMS con el código de factura.',
          'Creación de claves de idempotencia y locks distribuidos en Redis para impedir envíos duplicados ante reintentos de webhooks.',
          'Trazabilidad de ciclo de vida completo con registro de estados (generado, enviado, entregado, fallido y liquidado) para auditoría operativa.',
        ],
        tradeoffs:
          'La arquitectura multicanal con failover en tiempo real requirió un control riguroso de máquinas de estado y reintentos para evitar notificaciones duplicadas.',
        outcome:
          '100% de trazabilidad en las notificaciones de acuerdos, reducción notable en la pérdida de convenios por falta de factura y eliminación del trabajo manual.',
        technologies: ['Laravel 13', 'Redis', 'WhatsApp API', 'SMS'],
      },
    ],
  },
] satisfies Experience[])

export const experiencesTranslations = {
  pt: [...pt].reverse(),
  en: [...en].reverse(),
  es: [...es].reverse(),
} satisfies Record<Language, Experience[]>
