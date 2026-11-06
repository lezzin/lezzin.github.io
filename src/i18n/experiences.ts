import type { Language } from '../composables/useLanguage'
import type { Experience } from '../types/experience'
import { withSameKeys } from '../types/utils'

const pt = [
  {
    title: 'Desenvolvedor Fullstack Freelancer',
    company: 'Autônomo · Remoto',
    period: 'Jan 2024 – Dez 2024',
    description:
      'Criei e lancei uma ==plataforma web de publicação literária==. Cuidei de requisitos, banco de dados, desenvolvimento fullstack e deploy em produção.',

    bulletPoints: [
      '**Arquitetura e desenvolvimento:** Desenvolvi a aplicação com **CodeIgniter (PHP)** e **MySQL**, separando camadas para facilitar manutenções futuras.',
      '**Controle de acesso e comunidade:** Criei controle de acesso para autores e leitores, além de comentários, avaliações e métricas de leitura.',
      '**Pagamentos com Stripe:** Integrei checkout da **Stripe** e criei rotinas para liberar capítulos e assinaturas de forma automática.',
      '**Deploy e infraestrutura:** Configurei o ambiente na **Hostinger** com SSL e rotinas de backup, otimizando consultas ao banco de dados.',
    ],

    projects: [
      {
        name: 'Erupção das Letras',
        context:
          'Plataforma web para autores independentes publicarem, divulgarem e venderem suas obras diretamente aos leitores.',
        importance:
          'Permitir que o cliente validasse o modelo de venda de capítulos e assinaturas com baixo custo operacional.',
        problem:
          'Faltava uma plataforma que reunisse leitura agradável no navegador, interação entre usuários e pagamentos seguros no mesmo lugar.',
        decisions: [
          'Modelei o banco em **MySQL** para organizar obras, volumes e capítulos com histórico de rascunhos.',
          'Processei webhooks da **Stripe** com checagem de segurança para evitar liberação duplicada de conteúdo.',
          'Isolei permissões com RBAC para separar os acessos de autores, leitores e administradores.',
          'Criei um leitor web responsivo com **jQuery** e CSS modular, com ajuste no tamanho do texto.',
          'Criei índices compostos no banco de dados para acelerar a busca e o carregamento do catálogo.',
        ],
        tradeoffs:
          'O CodeIgniter acelerou a entrega e reduziu custos de hospedagem. Em contrapartida, precisei criar camadas de abstração na mão.',
        outcome:
          'Lancei a plataforma no prazo, com pagamentos 100% estáveis e autores vendendo suas obras.',
        technologies: ['CodeIgniter', 'PHP', 'MySQL', 'jQuery', 'JavaScript', 'Stripe'],
      },
    ],
  },
  {
    title: 'Desenvolvedor Backend Trainee',
    company: 'Ágil Empréstimos · Monte Belo',
    period: 'Abr 2025 – Fev 2026',
    description:
      'Atuei no backend dos ==sistemas centrais de crédito e faturamento==. Otimizei consultas ao banco, montei filas assíncronas e modernizei serviços legados.',
    bulletPoints: [
      '**Mensageria e filas:** Criei rotinas com **RabbitMQ** e **Redis** para processar mais de **100 mil faturas diárias** sem falhas.',
      '**Otimização de banco:** Reduzi o tempo de relatórios em **97,5%** (de 40 minutos para menos de 1 minuto) com streaming e consultas SQL.',
      '**Modernização de microsserviços:** Criei novos serviços em **NestJS (TypeScript)** e mantive sistemas legados em **CodeIgniter**.',
      '**Documentação técnica:** Escrevi documentações de APIs e diagramas de fluxo para acelerar o aprendizado de novos desenvolvedores.',
    ],
    projects: [
      {
        name: 'Automação Multicanal de Faturas',
        context:
          'Sistema para automatizar o envio de faturas por E-mail, SMS e WhatsApp integrado ao financeiro da empresa.',
        importance:
          'Reduzir atrasos nos pagamentos, dar previsibilidade ao caixa e eliminar disparos manuais de cobrança.',
        problem:
          'Os envios eram manuais, sem fila nem rastreio, o que gerava atrasos operacionais e erros de entrega.',
        decisions: [
          'Criei filas no **RabbitMQ** para separar a geração de cobranças dos envios externos, absorvendo picos sem travar o sistema.',
          'Adicionei cache no **Redis** e salvei arquivos no **MinIO** via S3 para aliviar o banco relacional.',
        ],
        tradeoffs:
          'As filas assíncronas exigiram mais controle dos envios, resolvido com logs detalhados para cada fatura processada.',
        outcome:
          'Automatização completa do processo, com capacidade para mais de **100 mil transações diárias** e zero erros manuais.',
        technologies: ['Laravel 11', 'RabbitMQ', 'Redis', 'MinIO'],
      },
      {
        name: 'Processamento Assíncrono de Relatórios Financeiros',
        context:
          'Módulo para consolidar e exportar grandes volumes de dados contábeis para auditoria e controladoria.',
        importance:
          'Gerar relatórios essenciais para fechamentos diários e decisões da diretoria sem deixar o sistema lento.',
        problem:
          'Consultas pesadas travavam o banco e estouravam a memória do PHP, gerando erros e esperas de até **40 minutos**.',
        decisions: [
          'Movi a extração de dados para tarefas em segundo plano com **Redis Queues**, liberando o usuário na hora.',
          'Otimizei índices no banco e usei **streaming com cursores**, gravando relatórios no **MinIO** sem lotar a memória RAM.',
        ],
        tradeoffs:
          'Criar um serviço novo levou mais tempo de validação dos dados contábeis, mas eliminou remendos no código antigo.',
        outcome:
          'Tempo de geração caiu de **40 minutos para menos de 60 segundos**, sem falhas e com baixo uso de memória.',
        technologies: ['Laravel 12', 'Redis', 'MinIO', 'SQL Optimization'],
      },
      {
        name: 'Microsserviço de Mensageria WhatsApp (API OMNE)',
        context:
          'Microsserviço que conecta os sistemas da empresa à API OMNE para envio de mensagens via WhatsApp.',
        importance:
          'Garantir a entrega rápida de códigos de validação (OTP) e avisos de cobrança por um canal oficial.',
        problem:
          'Modelos de mensagens ficavam fixos no código. Qualquer ajuste de texto exigia um novo deploy.',
        decisions: [
          'Construí um microsserviço em **NestJS** e **TypeScript** com renovação de tokens, retentativas automáticas e leitura de webhooks.',
          'Criei um painel administrativo para a equipe de negócios gerenciar e aprovar templates sem depender da TI.',
        ],
        tradeoffs:
          'O microsserviço adicionou chamadas de rede extras, mas garantiu segurança na entrega e conformidade com as regras do WhatsApp.',
        outcome:
          'Autonomia total para o time de operações gerenciar envios e acompanhamento em tempo real de cada mensagem entregue.',
        technologies: ['NestJS', 'TypeScript', 'Redis', 'API OMNE', 'Node.js'],
      },
    ],
  },
  {
    title: 'Desenvolvedor Fullstack Freelancer',
    company: 'Autônomo · Remoto',
    period: 'Fev 2026 – Ago 2026',
    description:
      'Desenvolvi e implantei um ==sistema web== para redes de franquias. Centralizei a gestão financeira, contratos digitais e o controle entre unidades.',
    bulletPoints: [
      '**Desenvolvimento fullstack:** Construí a plataforma com **Laravel**, **MySQL**, **Tailwind CSS** e **Alpine.js**, focando em código testável e interface ágil.',
      '**APIs e regras de negócio:** Criei APIs RESTful com isolamento por unidade (multi-tenant), relatórios assíncronos e emissão automática de contratos em PDF.',
      '**Infraestrutura e segurança:** Configurei servidores Linux em VPS com firewall, Nginx, certificados SSL e deploys automatizados.',
      '**Alinhamento de produto:** Alinhei requisitos com os fundadores, planejei entregas e dei suporte técnico direto aos usuários da rede.',
    ],
    projects: [
      {
        name: 'Plataforma Franquias Panda',
        context:
          'Sistema de gestão sob medida para unificar as rotinas operacionais, financeiras e contratuais entre franqueadora e franqueados.',
        importance:
          'Substituir planilhas manuais por dados em tempo real sobre vendas, campanhas e conformidade de cada unidade.',
        problem:
          'Dados espalhados em canais informais causavam atrasos em contratos, perdas no estoque e falta de visão clara do negócio.',
        decisions: [
          'Estruturei a aplicação em **Laravel** com camadas de serviço para facilitar a chegada de novas funções.',
          'Criei painéis específicos para administradores, franqueados e clientes com controle rigoroso de acessos (RBAC).',
          'Desenvolvi módulos de contratos, estoque de dispositivos, campanhas de incentivo e materiais de treinamento corporativo.',
          'Criei painéis analíticos com filtros detalhados para acompanhar vendas e desempenho de cada filial.',
          'Automatizei a criação e assinatura de contratos em PDF com registro histórico para auditoria.',
          'Construí a interface usando **Blade**, **Tailwind CSS** e **Alpine.js** para um carregamento rápido e visual consistente.',
        ],
        tradeoffs:
          'A variedade de regras e perfis aumentou a complexidade. Para evitar falhas, criei uma rotina ampla de testes automatizados.',
        outcome:
          'Operação 100% centralizada na plataforma, com contratos fechados muito mais rápido e autonomia para os administradores.',
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
      'Desenvolvo e mantenho ==serviços essenciais de crédito e cobrança==. Atuo na separação de microsserviços e na estabilidade de pagamentos.',
    bulletPoints: [
      '**Microsserviços rápidos:** Desenvolvo APIs de alto volume com **NestJS** e **Laravel 13**, além de manter legados em **CodeIgniter**.',
      '**Rotinas confiáveis:** Criei reprocessamento automático e rotas de contingência para envio e liquidação de faturas sem perder notificações.',
    ],
    projects: [
      {
        name: 'Automação e Resiliência na Cobrança de Acordos',
        context:
          'Sistema de cobrança automática para acordos de crédito, enviando mensagens via WhatsApp com troca imediata para SMS se falhar.',
        importance:
          'Acelerar o recebimento de parcelas e garantir a entrega dos boletos antes do vencimento para evitar quebras de acordos.',
        problem:
          'Os envios eram manuais e desorganizados. Sem rastreio de entrega, os pagamentos atrasavam e o suporte ficava sobrecarregado.',
        decisions: [
          'Criei rotinas em **Laravel 13** com filas no **Redis** para aguentar picos de envio nas datas de vencimento.',
          'Criei **troca automática de canal**: se o WhatsApp falhar, o sistema dispara a fatura por SMS imediatamente.',
          'Usei travas e chaves únicas no **Redis** para nunca enviar a mesma cobrança duas vezes durante reprocessamentos.',
          'Gravei cada etapa da mensagem (criada, enviada, entregue e paga) para auditoria e controle em tempo real.',
        ],
        tradeoffs:
          'A alternância entre canais exigiu controle rigoroso de filas para nunca notificar o cliente mais de uma vez.',
        outcome:
          'Alcancei 100% de rastreio nas cobranças, menos quebras de acordos e o fim total dos envios manuais.',
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
      'Engineering and continuous improvement of ==mission-critical financial services across credit and billing systems==, focusing on microservice decoupling and transactional resilience.',
    bulletPoints: [
      '**High-throughput microservices:** Engineered production APIs with **NestJS** and **Laravel 13**, maintaining low latency across critical transaction routes while sustaining legacy **CodeIgniter** services.',
      '**Transactional resilience:** Built automated fallback and retry mechanisms for invoice delivery and reconciliation, eliminating communication drops with borrowers.',
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
      'Ingeniería y evolución continua de ==servicios críticos en el ecosistema de crédito y cobros==, participando en el desacoplamiento de microservicios y resiliencia transaccional.',
    bulletPoints: [
      '**Microservicios de alto rendimiento:** Desarrollo de APIs corporativas con **NestJS** e **Laravel 13**, asegurando baja latencia en endpoints transaccionales y manteniendo servicios en **CodeIgniter**.',
      '**Resiliencia transaccional:** Implementación de mecanismos de fallback y reintentos automatizados para la emisión y liquidación de facturas, evitando pérdidas de contacto con clientes.',
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
