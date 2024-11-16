const projects = [
    {
        "image": "erupcao-das-letras.webp",
        "imageDetails": [
            { src: "erupcao-1.png", label: "Página inicial antes do freelance" },
            { src: "erupcao-2.png", label: "Página inicial após freelance" },
            { src: "erupcao-3.png", label: "Página de login" },
            { src: "erupcao-4.png", label: "Página de um livro à venda" },
            { src: "erupcao-5.png", label: "Página de um livro gratuito com doação" }
        ],
        "name": "Erupção das Letras",
        "description": "Rede social para autores e leitores, focada em publicação, venda e apoio financeiro de obras.",
        "detailedDescription": `
            <p><b>Descrição:</b> O projeto Erupção das Letras é uma plataforma que conecta autores e leitores, permitindo a publicação de obras, venda direta e apoio financeiro. A aplicação inclui recursos como feed de postagens, sistema de comentários, favoritos, notificações, renderização de PDFs, integração com Stripe, login com Google, e um sistema dinâmico de carregamento de conteúdo com AJAX.</p>
            <p><b>Desafio:</b> Iniciado como meu primeiro trabalho freelancer, o projeto foi um grande desafio técnico, exigindo aprendizado em áreas como integração de pagamento, envio de e-mails, e criação de sistemas robustos para interação entre usuários. Foi concluído com sucesso, atendendo às expectativas do cliente.</p>
        `,
        "skills": ["PHP", "CodeIgniter", "jQuery", "MySQL"],
        "deployUrl": "https://erupcaodasletras.com.br"
    },
    {
        "image": "taskflow.webp",
        "imageDetails": [
            { src: "task-1.png", label: "Página inicial" },
            { src: "task-2.png", label: "Página da tarefa selecionada" },
            { src: "task-3.png", label: "Página da tarefa selecionada com menu aberto" },
            { src: "task-4.png", label: "Página da visualização geral das tarefas" },
            { src: "task-5.png", label: "Página do Kanban" },
            { src: "task-6.png", label: "Página da funcionalidade de AI" }
        ],
        "name": "TaskFlow",
        "description": "Aplicação para gestão de tarefas, com visualização Kanban, sugestões por IA e categorização de projetos.",
        "detailedDescription": `
        <p><b>Descrição:</b> TaskFlow é uma plataforma intuitiva para organizar tarefas, utilizando Vue.js e Firebase. Permite aos usuários criar, editar e acompanhar atividades com foco em produtividade, oferecendo visualização Kanban e categorização por tópicos.</p>
        <p><b>Diferenciais:</b> Além dos recursos de organização, TaskFlow utiliza inteligência artificial para sugerir novas tarefas relacionadas às já adicionadas. Basta clicar em um botão para receber sugestões automáticas, otimizando ainda mais o planejamento do usuário. </p>
    `,
        "skills": ["Vue.js"],
        "deployUrl": "https://mytaskflow.vercel.app",
        "codeUrl": "https://github.com/lezzin/tasks_manager"
    },
    {
        "image": "ferramentas-dev.webp",
        "imageDetails": [
            { src: "ferramentas-dev-1.png", label: "Página inicial (light)" },
            { src: "ferramentas-dev-2.png", label: "Página inicial (dark)" },
            { src: "ferramentas-dev-3.png", label: "Página da categoria selecionada (light - usuário)" },
            { src: "ferramentas-dev-4.png", label: "Página da categoria selecionada (dark - usuário)" },
            { src: "ferramentas-dev-5.png", label: "Página da categoria selecionada (dark - admin)" }
        ],
        "name": "Ferramentas para Devs",
        "description": "Plataforma para acessar recursos gratuitos essenciais para desenvolvedores.",
        "detailedDescription": `
            <p><b>Descrição:</b> Ferramentas para Devs é um repositório online que centraliza links úteis para desenvolvedores, como bibliotecas, APIs e tutoriais, promovendo maior agilidade e organização no trabalho.</p>
            <p><b>Diferenciais:</b> Este foi meu primeiro projeto utilizando o framework Quasar, o que representou um marco importante no meu aprendizado. O uso do Quasar Framework permitiu o desenvolvimento de uma interface moderna e responsiva, com suporte nativo para temas claro e escuro, melhorando a experiência do usuário.</p>
        `,
        "skills": ["Vue.js", "Quasar"],
        "deployUrl": "https://mydevresources.vercel.app",
        "codeUrl": "https://github.com/lezzin/dev_resources"
    },
    {
        "image": "blog.webp",
        "imageDetails": [
            { src: "blog-1.png", label: "Página inicial" },
            { src: "blog-2.png", label: "Página da publicação" },
            { src: "blog-3.png", label: "Página do administrador" }
        ],
        "name": "Blog de Wellyoza",
        "description": "Blog sobre tecnologia.",
        "detailedDescription": `
            <p><b>Descrição:</b> Meu segundo projeto utilizando o Quasar. Desenvolvido para um colega de faculdade, com o objetivo de centralizar todos os seus vídeos do Youtube em um único lugar.</p>
        `,
        "skills": ["Vue.js", "Quasar"],
        "deployUrl": "https://wellyngton-blog.vercel.app/"
    },
    {
        "image": "rockscape.webp",
        "imageDetails": [
            { src: "game-1.png", label: "Página do menu inicial" },
            { src: "game-2.png", label: "Página do jogo" },
            { src: "game-3.png", label: "Página do ranking de pontuações" }
        ],
        "name": "Rock Scape",
        "description": "Jogo 2D inspirado no Dino, com ranking integrado para competições.",
        "detailedDescription": `
            <p><b>Descrição:</b> Rock Scape é um jogo 2D inspirado no clássico Dino, onde os jogadores enfrentam obstáculos enquanto tentam sobreviver o maior tempo possível. Com a integração de um sistema de ranking, os jogadores podem competir com amigos e outros usuários, o que torna o jogo mais divertido e desafiador.</p>
        `,
        "skills": ["jQuery"],
        "deployUrl": "https://rockscape.vercel.app/",
        "codeUrl": "https://github.com/lezzin/rock_scape"
    },
    {
        "image": "volei.webp",
        "imageDetails": [
            { src: "placar-1.png", label: "Página inicial" },
            { src: "placar-2.png", label: "Placar" }
        ],
        "name": "Placar para Vôlei",
        "description": "Aplicação simples para registrar placares de partidas de vôlei.",
        "detailedDescription": `
            <p><b>Descrição:</b> O Placar para Vôlei é uma ferramenta prática para partidas de vôlei, permitindo que amigos acompanhem o placar em tempo real.</p>
        `,
        "skills": ["Vue.js"],
        "deployUrl": "https://placar-volei.vercel.app/",
        "codeUrl": "https://github.com/lezzin/placar_volei"
    }
];

export default projects;
