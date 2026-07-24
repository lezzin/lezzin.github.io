import type { Language } from '../composables/useLanguage'
import type { Experience } from '../types/experience'

export const experiencesTranslations: Record<Language, Experience[]> = {
  pt: [
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
  ],
  en: [
    {
      title: 'Freelance Fullstack Developer',
      company: 'Freelance · Remote',
      period: 'Jan 2024 – Dec 2024',
      description:
        'Development of ==a custom web platform== for a client, acting across all project stages, from requirements gathering to production deployment.',

      bulletPoints: [
        '**Fullstack Development:** End-to-end application construction using **CodeIgniter**, **jQuery**, **MySQL**, HTML, CSS, and JavaScript.',

        '**Literary Ecosystem:** Development of features for publishing works, chapters, author profiles, comments, reviews, and interaction between writers and readers.',

        '**Payment Integration:** Implementation of **Stripe** integration for platform monetization, enabling billing and payment flow management.',

        '**Deploy & Infrastructure:** Production environment configuration and application deployment on **Hostinger**, including database, domain, and evolutionary maintenance.',
      ],

      projects: [
        {
          name: 'Erupção das Letras',
          context:
            'Social platform tailored for writers and readers, enabling book publishing, discovery of literary works, user interaction, and content monetization.',

          importance:
            'Project developed to create a comprehensive environment for producing and consuming literary content.',

          problem:
            'The client needed to centralize publishing, reading, and monetization on a single platform, offering an experience similar to major online reading platforms.',

          decisions: [
            'Application development using **CodeIgniter** following MVC architecture.',
            'Implementation of distinct profiles for writers and readers with specific access rules.',
            'Integration with **Stripe** for payment processing and platform monetization.',
            'Creation of modules for publishing works, chapters, comments, reviews, and user interactions.',
            'Database modeling to support platform growth and catalog organization.',
          ],

          tradeoffs:
            'Using CodeIgniter provided fast development speed and easy shared hosting, though requiring greater responsibility in architectural organization compared to more opinionated frameworks.',

          outcome:
            'Delivery of a functional platform for publishing and discovering literary works, allowing writers to share content and interact directly with their readers.',

          technologies: ['CodeIgniter', 'PHP', 'MySQL', 'jQuery', 'JavaScript', 'Stripe'],
        },
      ],
    },
    {
      title: 'Trainee Backend Developer',
      company: 'Ágil Empréstimos · Monte Belo',
      period: 'Apr 2025 – Feb 2026',
      description:
        'Working on the development and modernization of the company\'s ==core systems==, with a focus on performance, scalability, and code maintainability.',
      bulletPoints: [
        '**Messaging System:** Implementation of multichannel dispatches with **RabbitMQ** and **Redis**, ensuring the processing of over **100,000 invoices per day** with high availability.',

        '**Process Optimization:** Reduction of report generation time by **97.5%** (from 40 minutes to under 1 minute) through asynchronous processing and data streaming.',

        '**Technological Evolution:** Development of new microservices with **NestJS** and evolutionary maintenance on legacy systems using **CodeIgniter**.',

        '**Technical Culture:** Creation of technical documentation and architectural diagrams to facilitate support and onboarding for new team members.',
      ],
      projects: [
        {
          name: 'Automatic Invoice Dispatch Schedule',
          context:
            'System responsible for ==automating invoice dispatch== via Email, SMS, and WhatsApp.',
          importance:
            'Essential for cash flow predictability and reducing delinquency rates.',
          problem:
            'Centralized manual processes and lack of traceability, which generated ==high operational risk== and billing errors.',
          decisions: [
            'Implementation of **asynchronous processing with RabbitMQ** to manage load spikes without compromising the system.',
            'Use of **Redis** for fast query caching and **MinIO** for persistence of generated invoices.',
          ],
          tradeoffs:
            'Complexity vs. Scalability: Queue usage introduced higher initial complexity, but solved long-term performance bottlenecks.',
          outcome:
            'Total elimination of manual interventions, capable of processing over **100,000 daily transactions**.',
          technologies: ['Laravel 11', 'RabbitMQ', 'Redis', 'MinIO'],
        },
        {
          name: 'Asynchronous Financial Reporting',
          context:
            'Tool developed for ==generating operational and financial reports== for internal business units.',
          importance: 'Reports are essential for daily monitoring of business health.',
          problem:
            'Constant timeouts up to **40 minutes** in synchronous processes, requiring frequent manual support.',
          decisions: [
            'Migration of file generation logic to background processing via **Redis Queues**.',
            'SQL query optimization and implementation of ==data streaming== to drastically cut memory consumption.',
          ],
          tradeoffs:
            'New Service vs. Legacy: Instead of keeping logic in the legacy system, I built a new application from scratch to ensure stability, isolation, and modern tech stack.',
          outcome:
            'Generation time reduced from **40 minutes to under 1 minute**, with zero timeout occurrences.',
          technologies: ['Laravel 12', 'Redis', 'MinIO', 'SQL Optimization'],
        },
        {
          name: 'WhatsApp Messaging Gateway (OMNE API)',
          context:
            'Microservice responsible for connecting internal systems with the WhatsApp Gateway.',
          importance:
            'Critical communication channel for invoice dispatch and security verifications (OTP).',
          problem:
            'Hardcoded business rules and templates, requiring ==technical deploys== for minor text updates.',
          decisions: [
            'Integration with OMNE API for official provider communication.',
            'Development of an ==admin dashboard== for dynamic template management by the business team.',
          ],
          tradeoffs:
            'Agility vs. Cost: Adopting an official intermediary slightly increased costs, but significantly reduced time-to-market for new campaigns.',
          outcome:
            'Full autonomy for the business team and analytical visibility over message delivery status.',
          technologies: ['NestJS', 'TypeScript', 'Redis', 'API OMNE', 'Node.js'],
        },
      ],
    },
    {
      title: 'Freelance Fullstack Developer',
      company: 'Freelance · Remote',
      period: 'Feb 2026 – Present',
      description:
        'Development of ==custom web applications== using Laravel, involved in all project stages from requirements gathering to production deployment.',
      bulletPoints: [
        '**Fullstack Development:** Creation of complete applications with **Laravel**, **Blade**, **Tailwind CSS**, **Alpine.js**, and **MySQL**, prioritizing clean code, security, and scalability.',

        '**Backend Architecture:** Implementation of REST APIs, authentication, queues (**Queues**), Jobs, permissions system, external integrations, and complex business logic.',

        '**Deploy & Infrastructure:** Linux environment configuration and hosting setup on providers like **Hostinger** and VPS.',

        '**Client Relations:** Requirements gathering, architecture definition, on-demand feature development, and post-delivery support, ensuring solutions align with business needs.',
      ],
      projects: [
        {
          name: 'Franquias Panda Platform',
          context:
            'Custom web system built to centralize operations for Franquias Panda, unifying admins, franchisees, and clients into a single platform.',
          importance:
            'Application responsible for handling contracts, ad campaigns, companies, devices, content, benefits, and administrative franchise processes.',
          problem:
            'The business relied on decentralized processes and manual operations, making franchise network management and feature evolution difficult.',
          decisions: [
            'Development of a modular architecture in Laravel for simplified maintenance and system evolution.',
            'Separation of the application into dedicated panels for admins, franchisees, and clients, each with specific permissions and features.',
            'Implementation of modules for managing contracts, ad campaigns, companies, devices, blogs, and administrative content.',
            'Creation of dashboards featuring metrics, filters, and reports for decision support.',
            'Automation of processes such as PDF contract generation, validation, signature workflows, and operational management.',
            'Development of reusable components using Blade, TailwindCSS, and Alpine.js to maintain visual consistency and reduce code duplication.',
          ],
          tradeoffs:
            'The vast amount of business logic and access roles increased application complexity, but provided a flexible, organized platform ready for future expansion.',
          outcome:
            'The system centralized core operations for Franquias Panda, eliminating manual tasks, increasing administrative team autonomy, and improving franchisee and client experience.',
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
  ],
  es: [
    {
      title: 'Desarrollador Fullstack Freelance',
      company: 'Autónomo · Remoto',
      period: 'Ene 2024 – Dic 2024',
      description:
        'Desarrollo de ==una plataforma web a medida== para un cliente, participando en todas las etapas del proyecto, desde el levantamiento de requisitos hasta el despliegue en producción.',

      bulletPoints: [
        '**Desarrollo Fullstack:** Construcción completa de la aplicación utilizando **CodeIgniter**, **jQuery**, **MySQL**, HTML, CSS y JavaScript.',

        '**Ecosistema Literario:** Desarrollo de funcionalidades para publicación de obras, capítulos, perfiles de autores, comentarios, evaluaciones e interacción entre escritores y lectores.',

        '**Integración de Pagos:** Implementación de la integración con **Stripe** para la monetización de la plataforma, permitiendo cobros y gestión del flujo de pagos.',

        '**Despliegue e Infraestructura:** Configuración del entorno de producción y despliegue de la aplicación en **Hostinger**, incluyendo base de datos, dominio y mantenimiento evolutivo.',
      ],

      projects: [
        {
          name: 'Erupção das Letras',
          context:
            'Plataforma social orientada a escritores y lectores, que permite la publicación de libros, descubrimiento de obras, interacción entre usuarios y monetización de contenido.',

          importance:
            'Proyecto desarrollado para crear un entorno completo de producción y consumo de contenido literario.',

          problem:
            'El cliente necesitaba centralizar la publicación, lectura y monetización en una única plataforma, ofreciendo una experiencia similar a las grandes plataformas de lectura online.',

          decisions: [
            'Desarrollo de la aplicación utilizando **CodeIgniter** siguiendo la arquitectura MVC.',
            'Implementación de perfiles distintos para escritores y lectores con reglas de acceso específicas.',
            'Integración con **Stripe** para el procesamiento de pagos y monetización de la plataforma.',
            'Creación de módulos para la publicación de obras, capítulos, comentarios, evaluaciones e interacción entre usuarios.',
            'Modelado de la base de datos para soportar el crecimiento de la plataforma y la organización del catálogo de obras.',
          ],

          tradeoffs:
            'El uso de CodeIgniter proporcionó rapidez en el desarrollo y facilidad de alojamiento compartido, aunque exigió mayor responsabilidad en la organización de la arquitectura en comparación con frameworks más opinativos.',

          outcome:
            'Entrega de una plataforma funcional para la publicación y descubrimiento de obras literarias, permitiendo que los escritores compartieran contenido e interactuaran directamente con sus lectores.',

          technologies: ['CodeIgniter', 'PHP', 'MySQL', 'jQuery', 'JavaScript', 'Stripe'],
        },
      ],
    },
    {
      title: 'Desarrollador Backend Trainee',
      company: 'Ágil Empréstimos · Monte Belo',
      period: 'Abr 2025 – Feb 2026',
      description:
        'Participación en el desarrollo y modernización de ==sistemas core== de la empresa, con enfoque en rendimiento, escalabilidad y mantenimiento de código.',
      bulletPoints: [
        '**Sistema de Mensajería:** Implementación de envíos multicanal con **RabbitMQ** y **Redis**, garantizando el procesamiento de más de **100 mil facturas por día** con alta disponibilidad.',

        '**Optimización de Procesos:** Reducción del tiempo de generación de reportes en un **97,5%** (de 40 minutos a menos de 1 minuto) a través de procesamiento asíncrono y streaming de datos.',

        '**Evolución Tecnológica:** Desarrollo de nuevos microservicios con **NestJS** y mantenimiento evolutivo en sistemas legados utilizando **CodeIgniter**.',

        '**Cultura Técnica:** Creación de documentación técnica y diagramas arquitectónicos para facilitar el soporte y onboarding de nuevos miembros en el equipo.',
      ],
      projects: [
        {
          name: 'Cronograma Automático de Envío de Facturas',
          context:
            'Sistema responsable de ==automatizar el envío de facturas== por Correo, SMS y WhatsApp.',
          importance:
            'Fundamental para la previsibilidad del flujo de caja y reducción de la morosidad.',
          problem:
            'Procesos manuales centralizados y falta de trazabilidad, lo que generaba ==alto riesgo operativo== y errores de cobro.',
          decisions: [
            'Implementación de **procesamiento asíncrono con RabbitMQ** para gestionar picos de carga sin comprometer el sistema.',
            'Uso de **Redis** para almacenamiento en caché de consultas rápidas y **MinIO** para persistencia de facturas generadas.',
          ],
          tradeoffs:
            'Complejidad vs. Escalabilidad: El uso de colas trajo mayor complejidad inicial, pero resolvió cuellos de botella de rendimiento a largo plazo.',
          outcome:
            'Eliminación total de intervenciones manuales, con capacidad para procesar más de **100 mil transacciones diarias**.',
          technologies: ['Laravel 11', 'RabbitMQ', 'Redis', 'MinIO'],
        },
        {
          name: 'Procesamiento Asíncrono de Reportes Financieros',
          context:
            'Herramienta desarrollada para ==generación de reportes operativos== y financieros para áreas internas.',
          importance: 'Los reportes son esenciales para el monitoreo diario de la salud del negocio.',
          problem:
            'Timeouts constantes de hasta **40 minutos** en procesos síncronos, exigiendo soporte manual frecuente.',
          decisions: [
            'Migración de la lógica de generación de archivos a procesamiento en segundo plano mediante **Redis Queues**.',
            'Optimización de consultas SQL e implementación de ==streaming de datos== para reducir drásticamente el consumo de memoria.',
          ],
          tradeoffs:
            'Nuevo Servicio vs. Legado: En lugar de mantener la lógica en el sistema legado, opté por desarrollar una nueva aplicación desde cero para garantizar estabilidad, aislamiento y uso de tecnologías modernas.',
          outcome:
            'Reducción del tiempo de generación de **40 minutos a menos de 1 minuto**, con cero incidencias de timeouts.',
          technologies: ['Laravel 12', 'Redis', 'MinIO', 'SQL Optimization'],
        },
        {
          name: 'Gateway de Mensajes WhatsApp (API OMNE)',
          context:
            'Microservicio responsable de la conexión entre el sistema interno y el WhatsApp Gateway.',
          importance:
            'Canal crítico de comunicación para envío de facturas y validaciones de seguridad (OTP).',
          problem:
            'Reglas de negocio y plantillas fijas en el código, requiriendo ==despliegues técnicos== para cambios de texto.',
          decisions: [
            'Integración con la API OMNE para facilitar la comunicación con el proveedor oficial.',
            'Desarrollo de una ==interfaz administrativa== para la gestión dinámica de plantillas por parte del equipo de negocios.',
          ],
          tradeoffs:
            'Agilidad vs. Costo: La adopción de un intermediario oficial aumentó levemente los costos, pero redujo el time-to-market de nuevas campañas.',
          outcome:
            'Total autonomía para el equipo de negocios y visibilidad analítica sobre el estado de entrega de los mensajes.',
          technologies: ['NestJS', 'TypeScript', 'Redis', 'API OMNE', 'Node.js'],
        },
      ],
    },
    {
      title: 'Desarrollador Fullstack Freelance',
      company: 'Autónomo · Remoto',
      period: 'Feb 2026 – Actualidad',
      description:
        'Desarrollo de ==sistemas web personalizados== utilizando Laravel, participando en todas las etapas del proyecto, desde el levantamiento de requisitos hasta el despliegue en producción.',
      bulletPoints: [
        '**Desarrollo Fullstack:** Creación de aplicaciones completas con **Laravel**, **Blade**, **Tailwind CSS**, **Alpine.js** y **MySQL**, priorizando código limpio, seguridad y escalabilidad.',

        '**Arquitectura Backend:** Implementación de APIs REST, autenticación, colas (**Queues**), Jobs, sistema de permisos, integraciones con servicios externos y reglas de negocio complejas.',

        '**Despliegue e Infraestructura:** Configuración de entornos Linux y alojamiento en proveedores como **Hostinger** y VPS.',

        '**Relación con Clientes:** Levantamiento de requisitos, definición de arquitectura, desarrollo de funcionalidades a medida y soporte post-entrega, garantizando soluciones alineadas a las necesidades del negocio.',
      ],
      projects: [
        {
          name: 'Plataforma Franquias Panda',
          context:
            'Sistema web desarrollado a medida para centralizar la operación de Franquias Panda, integrando administradores, franquiciados y clientes en una única plataforma.',
          importance:
            'Aplicación responsable de la gestión de contratos, campañas, empresas, dispositivos, contenidos, beneficios y procesos administrativos de la franquicia.',
          problem:
            'La empresa dependía de procesos descentralizados y operaciones manuales, dificultando la gestión de la red de franquicias y la evolución de funcionalidades.',
          decisions: [
            'Desarrollo de una arquitectura modular en Laravel para facilitar el mantenimiento y la evolución del sistema.',
            'Separación de la aplicación en paneles específicos para administradores, franquiciados y clientes, cada uno con permisos y funcionalidades propias.',
            'Implementación de módulos para la gestión de contratos, campañas publicitarias, empresas, dispositivos, blogs y contenidos administrativos.',
            'Creación de dashboards con indicadores, filtros y reportes para soporte en la toma de decisiones.',
            'Automatización de procesos como generación de contratos en PDF, validaciones, flujo de firmas y gestión operativa.',
            'Desarrollo de componentes reutilizables con Blade, Tailwind CSS y Alpine.js para mantener la consistencia visual y reducir la duplicación de código.',
          ],
          tradeoffs:
            'La gran cantidad de reglas de negocio y diferentes perfiles de acceso aumentó la complejidad de la aplicación, pero proporcionó una plataforma flexible, organizada y preparada para futuras expansiones.',
          outcome:
            'El sistema pasó a centralizar los principales procesos de Franquias Panda, reduciendo actividades manuales, aumentando la autonomía del equipo administrativo y mejorando la experiencia de franquiciados y clientes.',
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
  ],
}
