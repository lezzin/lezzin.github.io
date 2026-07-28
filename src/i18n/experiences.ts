import type { Language } from '../composables/useLanguage'
import type { Experience } from '../types/experience'

export const experiencesTranslations: Record<Language, Experience[]> = {
  pt: [
    {
      title: 'Desenvolvedor Fullstack Freelancer',
      company: 'Autônomo · Remoto',
      period: 'Jan 2024 – Dez 2024',
      description:
        'Desenvolvimento de ==uma plataforma web sob medida== para um cliente, do primeiro contato com as necessidades do negócio até a entrega em produção.',

      bulletPoints: [
        '**Entrega ponta a ponta:** Construção completa da aplicação com **CodeIgniter**, **jQuery**, **MySQL**, HTML, CSS e JavaScript, do zero ao ar.',

        '**Experiência para escritores e leitores:** Criação de um ambiente completo para publicar obras e capítulos, montar perfis de autores, comentar, avaliar e interagir.',

        '**Monetização:** Integração com **Stripe**, permitindo que o cliente cobrasse pelo conteúdo e gerenciasse pagamentos com segurança.',

        '**Colocando no ar:** Configuração do ambiente de produção e publicação na **Hostinger**, cuidando de banco de dados, domínio e manutenção contínua.',
      ],

      projects: [
        {
          name: 'Erupção das Letras',
          context:
            'Rede social pensada para escritores e leitores, onde é possível publicar livros, descobrir novas obras, interagir com outros usuários e monetizar conteúdo.',

          importance:
            'Projeto criado para oferecer um espaço completo de produção e consumo de conteúdo literário.',

          problem:
            'O cliente precisava reunir publicação, leitura e monetização em um só lugar, com uma experiência à altura das grandes plataformas de leitura online.',

          decisions: [
            'Construção da aplicação com **CodeIgniter**, organizada para facilitar manutenção.',
            'Perfis separados para escritores e leitores, cada um com suas próprias permissões.',
            'Integração com **Stripe** para processar pagamentos e viabilizar a monetização.',
            'Módulos para publicação de obras, capítulos, comentários, avaliações e interação entre usuários.',
            'Banco de dados modelado pensando no crescimento da plataforma e na organização do catálogo.',
          ],

          tradeoffs:
            'Optar pelo CodeIgniter trouxe agilidade no desenvolvimento e facilidade para hospedar em planos compartilhados, ainda que exigisse mais cuidado meu na organização da arquitetura.',

          outcome:
            'Plataforma no ar e funcional, permitindo que escritores publicassem suas obras e se conectassem diretamente com seus leitores.',

          technologies: ['CodeIgniter', 'PHP', 'MySQL', 'jQuery', 'JavaScript', 'Stripe'],
        },
      ],
    },
    {
      title: 'Desenvolvedor Backend Trainee',
      company: 'Ágil Empréstimos · Monte Belo',
      period: 'Abril 2025 – Fev 2026',
      description:
        'Atuação no desenvolvimento e modernização dos ==sistemas centrais== da empresa, com foco em deixar tudo mais rápido, estável e fácil de manter.',
      bulletPoints: [
        '**Mensageria em escala:** Implementação de disparos multicanal com **RabbitMQ** e **Redis**, garantindo o processamento de mais de **100 mil faturas por dia** sem sustos.',

        '**Relatórios muito mais rápidos:** Redução do tempo de geração de relatórios em **97,5%** (de 40 minutos para menos de 1 minuto), com processamento assíncrono e streaming de dados.',

        '**Modernização dos sistemas:** Novos microserviços construídos com **NestJS** e manutenção evolutiva dos sistemas legados em **CodeIgniter**.',

        '**Troubleshooting de ambientes:** Análise e diagnóstico de aplicações em ambientes **Kubernetes** utilizando **Lens**, investigando **pods, services, logs e recursos do ambiente** para identificar e solucionar problemas.',

        '**Compartilhando conhecimento:** Documentação técnica e diagramas de arquitetura criados para facilitar o suporte e o onboarding de novos colegas.',
      ],
      projects: [
        {
          name: 'Cronograma Automático de Disparo de Faturas',
          context:
            'Sistema responsável por ==automatizar o envio de faturas== por E-mail, SMS e WhatsApp.',
          importance:
            'Peça-chave para dar previsibilidade ao fluxo de caixa e reduzir a inadimplência.',
          problem:
            'Os disparos eram feitos manualmente e sem rastreabilidade, o que gerava ==alto risco operacional== e erros de cobrança.',
          decisions: [
            'Processamento assíncrono com **RabbitMQ** para aguentar picos de envio sem travar o sistema.',
            '**Redis** para cache de consultas frequentes e **MinIO** para armazenamento dos QR Codes de pagamento enviados por e-mail.',
          ],
          tradeoffs:
            'Adotar filas trouxe mais complexidade no início, mas resolveu de vez os gargalos de performance a longo prazo.',
          outcome:
            'Fim das intervenções manuais, com capacidade de processar mais de **100 mil transações diárias**.',
          technologies: ['Laravel 11', 'RabbitMQ', 'Redis', 'MinIO'],
        },
        {
          name: 'Processamento Assíncrono de Relatórios Financeiros',
          context:
            'Ferramenta criada para ==gerar relatórios operacionais== e financeiros usados pelas áreas internas.',
          importance: 'Relatórios essenciais para acompanhar a saúde do negócio no dia a dia.',
          problem:
            'Os relatórios travavam com timeouts de até **40 minutos**, exigindo suporte manual com frequência.',
          decisions: [
            'Geração de arquivos migrada para processamento em segundo plano com **Redis Queues**.',
            'Otimização das consultas SQL e ==streaming de dados== para consumir bem menos memória.',
          ],
          tradeoffs:
            'Em vez de remendar o sistema legado, construí uma aplicação nova para garantir estabilidade e usar tecnologias atuais.',
          outcome:
            'Tempo de geração caiu de **40 minutos para menos de 1 minuto**, sem nenhum timeout desde então.',
          technologies: ['Laravel 12', 'Redis', 'MinIO', 'SQL Optimization'],
        },
        {
          name: 'Gateway de Mensagens WhatsApp (API OMNE)',
          context:
            'Microserviço responsável pela conexão entre o sistema interno e o WhatsApp Gateway.',
          importance:
            'Canal crítico de comunicação para envio de faturas e validações de segurança (OTP).',
          problem:
            'Textos e regras ficavam fixos no código, exigindo ==deploys técnicos== para qualquer alteração de mensagem.',
          decisions: [
            'Integração com a API OMNE para comunicação com o provedor oficial.',
            '==Painel administrativo== criado para o time de negócio gerenciar os templates sem depender de TI.',
          ],
          tradeoffs:
            'Usar um intermediador oficial aumentou um pouco os custos, mas reduziu bastante o tempo para lançar novas campanhas.',
          outcome:
            'Time de negócio ganhou autonomia total e visibilidade sobre o status de entrega das mensagens.',
          technologies: ['NestJS', 'TypeScript', 'Redis', 'API OMNE', 'Node.js'],
        },
      ],
    },
    {
      title: 'Desenvolvedor Fullstack Freelancer',
      company: 'Autônomo · Remoto',
      period: 'Fev 2026 – Atual',
      description:
        'Desenvolvimento de ==sistemas web personalizados== com Laravel, acompanhando o projeto do início ao fim: levantamento de requisitos, desenvolvimento e deploy em produção.',
      bulletPoints: [
        '**Aplicações completas:** Construção com **Laravel**, **Blade**, **Tailwind CSS**, **Alpine.js** e **MySQL**, sempre com foco em código limpo, segurança e escalabilidade.',

        '**Base sólida por trás:** APIs REST, autenticação, filas (**Queues**), jobs, permissões e integrações externas para suportar regras de negócio complexas.',

        '**No ar e funcionando:** Configuração de ambientes Linux e hospedagem em **Hostinger** e VPS.',

        '**Parceria com o cliente:** Levantamento de necessidades, definição da arquitetura, novas funcionalidades sob demanda e suporte após a entrega.',
      ],
      projects: [
        {
          name: 'Plataforma Franquias Panda',
          context:
            'Sistema sob medida para centralizar a operação da Franquias Panda, unindo administradores, franqueados e clientes em um só lugar.',
          importance:
            'Responsável pela gestão de contratos, campanhas, empresas, aparelhos, conteúdos, benefícios e processos administrativos da franquia.',
          problem:
            'A empresa vivia de processos descentralizados e manuais, o que dificultava gerenciar a rede de franquias e evoluir o sistema.',
          decisions: [
            'Arquitetura modular em Laravel, pensada para facilitar manutenção e evolução do sistema.',
            'Painéis separados para administradores, franqueados e clientes, cada um com suas próprias permissões.',
            'Módulos para contratos, campanhas publicitárias, empresas, aparelhos, blogs e conteúdos administrativos.',
            'Dashboards com indicadores, filtros e relatórios para apoiar a tomada de decisão.',
            'Automação de processos como geração de contratos em PDF, validações e fluxo de assinaturas.',
            'Componentes reutilizáveis com Blade, Tailwind CSS e Alpine.js para manter consistência visual e reduzir retrabalho.',
          ],
          tradeoffs:
            'Tanta regra de negócio e perfil de acesso diferente deixou a aplicação mais complexa, mas resultou numa plataforma flexível e pronta para crescer.',
          outcome:
            'O sistema passou a centralizar os principais processos da Franquias Panda, reduzindo trabalho manual, aumentando a autonomia da equipe administrativa e melhorando a experiência de franqueados e clientes.',
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
  ].reverse(),
  en: [
    {
      title: 'Freelance Fullstack Developer',
      company: 'Freelance · Remote',
      period: 'Jan 2024 – Dec 2024',
      description:
        'Built ==a custom web platform== for a client, from the first conversation about business needs all the way through production launch.',

      bulletPoints: [
        '**End-to-end delivery:** Built the full application from scratch using **CodeIgniter**, **jQuery**, **MySQL**, HTML, CSS, and JavaScript.',

        '**A home for writers and readers:** Delivered a complete experience for publishing works and chapters, building author profiles, commenting, reviewing, and interacting.',

        '**Monetization:** Integrated **Stripe** so the client could charge for content and manage payments securely.',

        '**Getting it live:** Set up the production environment and deployed on **Hostinger**, handling the database, domain, and ongoing maintenance.',
      ],

      projects: [
        {
          name: 'Erupção das Letras',
          context:
            'A social platform for writers and readers, where people can publish books, discover new works, interact with each other, and monetize content.',

          importance:
            'Built to give writers and readers a complete space to produce and enjoy literary content.',

          problem:
            'The client needed to bring publishing, reading, and monetization together in one place, with an experience on par with major online reading platforms.',

          decisions: [
            'Built the application with **CodeIgniter**, organized for easy maintenance.',
            'Separate profiles for writers and readers, each with their own permissions.',
            'Integrated **Stripe** to handle payments and enable monetization.',
            'Built modules for publishing works, chapters, comments, reviews, and user interaction.',
            'Modeled the database with platform growth and catalog organization in mind.',
          ],

          tradeoffs:
            'Choosing CodeIgniter meant faster development and easy shared hosting, though it took extra care on my part to keep the architecture organized.',

          outcome:
            'Shipped a working platform where writers could publish their work and connect directly with readers.',

          technologies: ['CodeIgniter', 'PHP', 'MySQL', 'jQuery', 'JavaScript', 'Stripe'],
        },
      ],
    },
    {
      title: 'Trainee Backend Developer',
      company: 'Ágil Empréstimos · Monte Belo',
      period: 'Apr 2025 – Feb 2026',
      description:
        "Helped build and modernize the company's ==core systems==, focused on making everything faster, more stable, and easier to maintain.",
      bulletPoints: [
        '**Messaging at scale:** Built multichannel dispatch with **RabbitMQ** and **Redis**, reliably processing over **100,000 invoices a day**.',

        '**Much faster reports:** Cut report generation time by **97.5%** (from 40 minutes to under 1 minute) using asynchronous processing and data streaming.',

        '**Modernizing the stack:** Built new microservices with **NestJS** while keeping legacy **CodeIgniter** systems running smoothly.',

        '**Environment troubleshooting:** Analysis and diagnosis of applications running in **Kubernetes** environments using **Lens**, investigating **pods, services, logs, and environment resources** to identify and resolve issues.',

        '**Sharing knowledge:** Wrote technical documentation and architecture diagrams to make support and onboarding easier for new teammates.',
      ],
      projects: [
        {
          name: 'Automatic Invoice Dispatch Schedule',
          context: 'System that ==automates invoice dispatch== via Email, SMS, and WhatsApp.',
          importance: 'Key to keeping cash flow predictable and cutting down on late payments.',
          problem:
            'Dispatches were handled manually with no traceability, creating ==high operational risk== and billing mistakes.',
          decisions: [
            'Used **asynchronous processing with RabbitMQ** to absorb load spikes without slowing the system down.',
            'Used **Redis** for caching frequent database queries and **MinIO** for storing payment QR codes sent via email.',
          ],
          tradeoffs:
            'Adding queues meant more upfront complexity, but it solved long-term performance bottlenecks for good.',
          outcome:
            'Eliminated manual work entirely, now processing over **100,000 transactions a day**.',
          technologies: ['Laravel 11', 'RabbitMQ', 'Redis', 'MinIO'],
        },
        {
          name: 'Asynchronous Financial Reporting',
          context:
            'A tool built to ==generate operational and financial reports== for internal teams.',
          importance: 'These reports are how the business tracks its day-to-day health.',
          problem:
            'Reports would time out after up to **40 minutes**, requiring frequent manual support.',
          decisions: [
            'Moved file generation to background processing with **Redis Queues**.',
            'Optimized SQL queries and added ==data streaming== to sharply cut memory use.',
          ],
          tradeoffs:
            'Rather than patch the legacy system, I built a new application from scratch for better stability and a modern tech stack.',
          outcome:
            'Cut generation time from **40 minutes to under 1 minute**, with zero timeouts since.',
          technologies: ['Laravel 12', 'Redis', 'MinIO', 'SQL Optimization'],
        },
        {
          name: 'WhatsApp Messaging Gateway (OMNE API)',
          context: 'A microservice connecting internal systems to the WhatsApp Gateway.',
          importance: 'A critical channel for sending invoices and handling security checks (OTP).',
          problem:
            'Message text and rules were hardcoded, so ==technical deploys== were needed for even small text changes.',
          decisions: [
            'Integrated with the OMNE API for official provider communication.',
            'Built an ==admin dashboard== so the business team could manage templates without needing engineering.',
          ],
          tradeoffs:
            'Using an official intermediary raised costs slightly, but significantly sped up how fast new campaigns could launch.',
          outcome:
            'Gave the business team full autonomy and clear visibility into message delivery status.',
          technologies: ['NestJS', 'TypeScript', 'Redis', 'API OMNE', 'Node.js'],
        },
      ],
    },
    {
      title: 'Freelance Fullstack Developer',
      company: 'Freelance · Remote',
      period: 'Feb 2026 – Present',
      description:
        'Building ==custom web applications== with Laravel, involved in every stage from requirements gathering to production deployment.',
      bulletPoints: [
        '**Complete applications:** Built with **Laravel**, **Blade**, **Tailwind CSS**, **Alpine.js**, and **MySQL**, always prioritizing clean code, security, and scalability.',

        '**Solid foundations behind the scenes:** REST APIs, authentication, queues, jobs, permissions, and external integrations supporting complex business logic.',

        '**Live and running:** Set up Linux environments and hosting on providers like **Hostinger** and VPS.',

        '**Working closely with the client:** Gathering requirements, defining architecture, building features on demand, and providing support after delivery.',
      ],
      projects: [
        {
          name: 'Franquias Panda Platform',
          context:
            'A custom system built to centralize operations for Franquias Panda, bringing admins, franchisees, and clients together on one platform.',
          importance:
            'Handles contracts, ad campaigns, companies, devices, content, benefits, and administrative processes for the franchise network.',
          problem:
            'The business relied on scattered manual processes, making it hard to manage the franchise network or add new features.',
          decisions: [
            'Built a modular Laravel architecture designed for easy maintenance and future growth.',
            'Split the application into dedicated panels for admins, franchisees, and clients, each with its own permissions.',
            'Built modules for contracts, ad campaigns, companies, devices, blogs, and administrative content.',
            'Created dashboards with metrics, filters, and reports to support decision-making.',
            'Automated processes like PDF contract generation, validation, and signature workflows.',
            'Built reusable components with Blade, Tailwind CSS, and Alpine.js to keep the visual style consistent and cut down on repeated work.',
          ],
          tradeoffs:
            'The sheer volume of business rules and access levels added complexity, but the result is a flexible, well-organized platform ready to grow.',
          outcome:
            "The system now centralizes Franquias Panda's core operations, cutting manual work, giving the admin team more autonomy, and improving the experience for franchisees and clients alike.",
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
  ].reverse(),
  es: [
    {
      title: 'Desarrollador Fullstack Freelance',
      company: 'Autónomo · Remoto',
      period: 'Ene 2024 – Dic 2024',
      description:
        'Desarrollo de ==una plataforma web a medida== para un cliente, desde la primera conversación sobre las necesidades del negocio hasta el lanzamiento en producción.',

      bulletPoints: [
        '**Entrega de punta a punta:** Construcción completa de la aplicación desde cero con **CodeIgniter**, **jQuery**, **MySQL**, HTML, CSS y JavaScript.',

        '**Un espacio para escritores y lectores:** Experiencia completa para publicar obras y capítulos, crear perfiles de autores, comentar, evaluar e interactuar.',

        '**Monetización:** Integración con **Stripe**, permitiendo al cliente cobrar por el contenido y gestionar los pagos con seguridad.',

        '**Puesta en marcha:** Configuración del entorno de producción y despliegue en **Hostinger**, incluyendo base de datos, dominio y mantenimiento continuo.',
      ],

      projects: [
        {
          name: 'Erupção das Letras',
          context:
            'Red social pensada para escritores y lectores, donde es posible publicar libros, descubrir nuevas obras, interactuar entre usuarios y monetizar contenido.',

          importance:
            'Proyecto creado para ofrecer un espacio completo de producción y consumo de contenido literario.',

          problem:
            'El cliente necesitaba reunir publicación, lectura y monetización en un solo lugar, con una experiencia a la altura de las grandes plataformas de lectura online.',

          decisions: [
            'Construcción de la aplicación con **CodeIgniter**, organizada para facilitar el mantenimiento.',
            'Perfiles separados para escritores y lectores, cada uno con sus propios permisos.',
            'Integración con **Stripe** para procesar pagos y habilitar la monetización.',
            'Módulos para la publicación de obras, capítulos, comentarios, evaluaciones e interacción entre usuarios.',
            'Base de datos modelada pensando en el crecimiento de la plataforma y la organización del catálogo.',
          ],

          tradeoffs:
            'Elegir CodeIgniter dio agilidad en el desarrollo y facilidad de alojamiento compartido, aunque exigió mayor cuidado de mi parte para mantener la arquitectura organizada.',

          outcome:
            'Plataforma funcional en producción, permitiendo que los escritores publicaran sus obras y se conectaran directamente con sus lectores.',

          technologies: ['CodeIgniter', 'PHP', 'MySQL', 'jQuery', 'JavaScript', 'Stripe'],
        },
      ],
    },
    {
      title: 'Desarrollador Backend Trainee',
      company: 'Ágil Empréstimos · Monte Belo',
      period: 'Abr 2025 – Feb 2026',
      description:
        'Participación en el desarrollo y modernización de los ==sistemas centrales== de la empresa, enfocado en hacer todo más rápido, estable y fácil de mantener.',
      bulletPoints: [
        '**Mensajería a gran escala:** Implementación de envíos multicanal con **RabbitMQ** y **Redis**, procesando de forma confiable más de **100 mil facturas por día**.',

        '**Reportes mucho más rápidos:** Reducción del tiempo de generación de reportes en **97,5%** (de 40 minutos a menos de 1 minuto), con procesamiento asíncrono y streaming de datos.',

        '**Modernización del stack:** Nuevos microservicios construidos con **NestJS**, manteniendo en funcionamiento los sistemas legados en **CodeIgniter**.',

        '**Troubleshooting de entornos:** Análisis y diagnóstico de aplicaciones en entornos **Kubernetes** utilizando **Lens**, investigando **pods, servicios, logs y recursos del entorno** para identificar y solucionar problemas.',

        '**Compartiendo conocimiento:** Documentación técnica y diagramas de arquitectura creados para facilitar el soporte y la incorporación de nuevos compañeros.',
      ],
      projects: [
        {
          name: 'Cronograma Automático de Envío de Facturas',
          context: 'Sistema que ==automatiza el envío de facturas== por Correo, SMS y WhatsApp.',
          importance: 'Clave para dar previsibilidad al flujo de caja y reducir la morosidad.',
          problem:
            'Los envíos se hacían manualmente y sin trazabilidad, lo que generaba ==alto riesgo operativo== y errores de cobro.',
          decisions: [
            'Uso de **procesamiento asíncrono con RabbitMQ** para absorber picos de carga sin afectar el sistema.',
            'Uso de**Redis** para almacenar en caché consultas frecuentes a la base de datos y **MinIO** para almacenar los códigos QR de pago enviados por correo electrónico.',
          ],
          tradeoffs:
            'Adoptar colas trajo más complejidad al inicio, pero resolvió los cuellos de botella de rendimiento a largo plazo.',
          outcome:
            'Eliminación total de las intervenciones manuales, procesando más de **100 mil transacciones diarias**.',
          technologies: ['Laravel 11', 'RabbitMQ', 'Redis', 'MinIO'],
        },
        {
          name: 'Procesamiento Asíncrono de Reportes Financieros',
          context:
            'Herramienta creada para ==generar reportes operativos== y financieros para las áreas internas.',
          importance: 'Reportes esenciales para el seguimiento diario de la salud del negocio.',
          problem:
            'Los reportes se caían con timeouts de hasta **40 minutos**, exigiendo soporte manual con frecuencia.',
          decisions: [
            'Migración de la generación de archivos a procesamiento en segundo plano con **Redis Queues**.',
            'Optimización de consultas SQL e implementación de ==streaming de datos== para reducir drásticamente el consumo de memoria.',
          ],
          tradeoffs:
            'En lugar de parchar el sistema legado, construí una aplicación nueva desde cero para garantizar estabilidad y usar tecnologías actuales.',
          outcome:
            'El tiempo de generación bajó de **40 minutos a menos de 1 minuto**, sin timeouts desde entonces.',
          technologies: ['Laravel 12', 'Redis', 'MinIO', 'SQL Optimization'],
        },
        {
          name: 'Gateway de Mensajes WhatsApp (API OMNE)',
          context: 'Microservicio que conecta el sistema interno con el WhatsApp Gateway.',
          importance:
            'Canal crítico para el envío de facturas y las validaciones de seguridad (OTP).',
          problem:
            'Los textos y reglas estaban fijos en el código, exigiendo ==despliegues técnicos== para cualquier cambio de mensaje.',
          decisions: [
            'Integración con la API OMNE para la comunicación con el proveedor oficial.',
            'Creación de un ==panel administrativo== para que el equipo de negocio gestionara las plantillas sin depender de TI.',
          ],
          tradeoffs:
            'Usar un intermediario oficial aumentó un poco los costos, pero redujo bastante el tiempo para lanzar nuevas campañas.',
          outcome:
            'El equipo de negocio ganó autonomía total y visibilidad sobre el estado de entrega de los mensajes.',
          technologies: ['NestJS', 'TypeScript', 'Redis', 'API OMNE', 'Node.js'],
        },
      ],
    },
    {
      title: 'Desarrollador Fullstack Freelance',
      company: 'Autónomo · Remoto',
      period: 'Feb 2026 – Actualidad',
      description:
        'Desarrollo de ==sistemas web personalizados== con Laravel, participando en cada etapa del proyecto, desde el levantamiento de requisitos hasta el despliegue en producción.',
      bulletPoints: [
        '**Aplicaciones completas:** Construidas con **Laravel**, **Blade**, **Tailwind CSS**, **Alpine.js** y **MySQL**, priorizando siempre código limpio, seguridad y escalabilidad.',

        '**Bases sólidas detrás de escena:** APIs REST, autenticación, colas, jobs, permisos e integraciones externas que soportan reglas de negocio complejas.',

        '**En producción y funcionando:** Configuración de entornos Linux y alojamiento en proveedores como **Hostinger** y VPS.',

        '**Trabajo cercano con el cliente:** Levantamiento de necesidades, definición de arquitectura, desarrollo de funcionalidades a pedido y soporte post-entrega.',
      ],
      projects: [
        {
          name: 'Plataforma Franquias Panda',
          context:
            'Sistema a medida para centralizar la operación de Franquias Panda, uniendo administradores, franquiciados y clientes en una sola plataforma.',
          importance:
            'Responsable de la gestión de contratos, campañas, empresas, dispositivos, contenidos, beneficios y procesos administrativos de la franquicia.',
          problem:
            'La empresa dependía de procesos dispersos y manuales, lo que dificultaba gestionar la red de franquicias y sumar nuevas funcionalidades.',
          decisions: [
            'Arquitectura modular en Laravel, pensada para facilitar el mantenimiento y el crecimiento del sistema.',
            'Paneles separados para administradores, franquiciados y clientes, cada uno con sus propios permisos.',
            'Módulos para contratos, campañas publicitarias, empresas, dispositivos, blogs y contenidos administrativos.',
            'Dashboards con indicadores, filtros y reportes para apoyar la toma de decisiones.',
            'Automatización de procesos como generación de contratos en PDF, validaciones y flujo de firmas.',
            'Componentes reutilizables con Blade, Tailwind CSS y Alpine.js para mantener la consistencia visual y reducir el trabajo repetido.',
          ],
          tradeoffs:
            'La gran cantidad de reglas de negocio y perfiles de acceso distintos añadió complejidad, pero el resultado es una plataforma flexible y organizada, lista para crecer.',
          outcome:
            'El sistema pasó a centralizar los procesos clave de Franquias Panda, reduciendo el trabajo manual, dando más autonomía al equipo administrativo y mejorando la experiencia de franquiciados y clientes.',
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
  ].reverse(),
}
