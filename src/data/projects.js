const projects = [
    {
        "image": "erupcao-das-letras.webp",
        "imageDetails": [
            {
                src: "erupcao-1.png",
                label: "Página como estava antes do freelance"
            },
            {
                src: "erupcao-2.png",
                label: "Página inicial do feed (não atualizado)"
            }
        ],
        "name": "Erupção das Letras",
        "description": "Plataforma de rede social para autores e leitores, permitindo a publicação, venda direta e apoio financeiro de obras.",
        "detailedDescription": `
            <p>Este foi o meu primeiro projeto como freelancer, iniciado em junho de 2024, apenas 4 meses após minha colação de grau como Técnico em Informática. Foi um dos maiores desafios da minha carreira até o momento. Nunca havia trabalhado com várias das tecnologias e funcionalidades solicitadas, como a integração com plataformas de pagamento e envio de emails, o que exigiu bastante pesquisa e aprendizado durante o desenvolvimento.</p>

            <p>Inicialmente, a tarefa era criar um feed simples em formato grid para postagens, com opções de curtir e não curtir. Porém, conforme o projeto avançava, surgiram novas demandas, como sistema de comentários, favoritos, notificações, renderização de PDFs, integração de pagamento com Stripe para compra e venda de livros, criação de páginas de perfil, login com Google, seguir/ser seguido e carregamento dinâmico de conteúdo com AJAX, além de uma página de contato e confirmação de e-mail.</p>

            <p>Cada nova funcionalidade representou um desafio técnico, mas, com dedicação, consegui implementar todas com sucesso. No fim, o cliente ficou muito satisfeito com o resultado, o que foi extremamente gratificante e me deu a confiança para encarar novos projetos no futuro."</p>

            <small>(Algumas das funcionalidades não foram publicadas)</small>
        `,
        "skills": [
            "PHP",
            "jQuery",
            "MySQL",
            "Stripe"
        ],
        "deployUrl": "https://erupcaodasletras.com.br"
    },
    {
        "image": "taskflow.webp",
        "imageDetails": [
            {
                src: "task-1.png",
                label: "Página inicial"
            },
            {
                src: "task-2.png",
                label: "Página da tarefa selecionada"
            },
            {
                src: "task-5.png",
                label: "Página da tarefa selecionada com menu aberto"
            },
            {
                src: "task-3.png",
                label: "Página do Kanban"
            },
            {
                src: "task-4.png",
                label: "Página da visualização geral das tarefas"
            }
        ],
        "name": "TaskFlow",
        "description": "Plataforma intuitiva para gerenciar tarefas e otimizar a produtividade diária.",
        "detailedDescription": `
            <p>TaskFlow é uma plataforma desenvolvida para ajudar os usuários a gerenciar suas tarefas de maneira simples e eficiente. Usando Vue.js e Firebase, a aplicação permite a criação, organização e acompanhamento de tarefas, com recursos como separação por tópicos/categorias e um sistema Kanban para visualizar o progresso de cada tarefa em diferentes etapas.</p>
            <p>A proposta é oferecer uma experiência fluida e produtiva, e por isso, com um grande foco na UX/UI, TaskFlow utiliza modais para facilitar a criação e edição de tarefas sem sair da página atual, além de toasts para fornecer feedback imediato sobre ações realizadas, como atualizações e exclusões.</p>
        `,
        "skills": [
            "Vue.js",
            "Firebase"
        ],
        "deployUrl": "https://mytaskflow.vercel.app",
        "codeUrl": "https://github.com/lezzin/tasks_manager",
        "docsUrl": "https://docs.google.com/document/d/1OXHMNCdr_GWK0cbCZQPVm428zt4fm2YkKl_5KFTmCk0/edit?usp=drive_link"
    },
    {
        "image": "ferramentas-dev.webp",
        "imageDetails": [
            {
                src: "ferramentas-dev-1.png",
                label: "Página inicial (light)"
            },
            {
                src: "ferramentas-dev-2.png",
                label: "Página inicial (dark)"
            },
            {
                src: "ferramentas-dev-3.png",
                label: "Página da categoria selecionada (light - usuário)"
            },
            {
                src: "ferramentas-dev-4.png",
                label: "Página da categoria selecionada (dark - usuário)"
            },
            {
                src: "ferramentas-dev-5.png",
                label: "Página da categoria selecionada (dark - admin)"
            }
        ],
        "name": "Ferramentas para Devs",
        "description": "Repositório de links essenciais com recursos gratuitos voltados para desenvolvedores.",
        "detailedDescription": `
            <p>Ferramentas para Devs é uma plataforma que reúne links úteis e gratuitos para desenvolvedores. O objetivo é proporcionar um acesso rápido a recursos essenciais, como editores de código, bibliotecas, tutoriais e APIs, reunidos em um único local para otimizar o trabalho dos profissionais da área.</p>
        `,
        "skills": [
            "Vue.js",
            "Quasar",
            "Firebase"
        ],
        "deployUrl": "https://mydevresources.vercel.app",
        "codeUrl": "https://github.com/lezzin/dev_resources",
        "docsUrl": "https://docs.google.com/document/d/13NZD8NHy3Qt7Mof3ScI66R2LQpoKLho2C5uHUW1VJhs/edit?usp=sharing"
    },
    {
        "image": "blog.webp",
        "imageDetails": [
            {
                src: "blog-1.png",
                label: "Página inicial"
            },
            {
                src: "blog-2.png",
                label: "Página do administrador"
            }
        ],
        "name": "Blog de Wellyoza",
        "description": "Blog desenvolvido para um colega de faculdade, com foco em tecnologia.",
        "detailedDescription": `
            <p>Este blog foi desenvolvido para um colega de faculdade, com o objetivo de compartilhar conteúdo sobre tecnologia. Utilizando Vue.js e Firebase, a plataforma oferece uma experiência interativa e dinâmica para os usuários. O conteúdo do blog está atrelado ao seu canal no YouTube, permitindo que os seguidores acompanhem tanto os vídeos quanto os artigos em um único espaço.</p>
        `,
        "skills": [
            "Vue.js",
            "Firebase"
        ],
        "deployUrl": "https://wellyngton-blog.vercel.app/",
        "docsUrl": "https://docs.google.com/document/d/1UywrvVQGmPB1CkBdG7PX4AfZdiOekvqlkE05uMfsb6c/edit?usp=drive_link"
    },
    {
        "image": "rockscape.webp",
        "imageDetails": [
            {
                src: "game-1.png",
                label: "Página do menu inicial"
            },
            {
                src: "game-2.png",
                label: "Página do jogo"
            },
            {
                src: "game-3.png",
                label: "Página do ranking de pontuações"
            }
        ],
        "name": "Rock Scape",
        "description": "Jogo 2D no estilo Dino, com sistema de ranking para competir com amigos.",
        "detailedDescription": `
            <p>Rock Scape é um jogo 2D inspirado no clássico Dino, onde os jogadores enfrentam obstáculos enquanto tentam sobreviver o maior tempo possível. Com a integração de um sistema de ranking, os jogadores podem competir com amigos e outros usuários, o que torna o jogo mais divertido e desafiador.</p>
        `,
        "skills": [
            "jQuery",
            "Firebase"
        ],
        "deployUrl": "https://rockscape.vercel.app/",
        "codeUrl": "https://github.com/lezzin/rock_scape",
        "docsUrl": "https://docs.google.com/document/d/1YzCcnLMaM-Xa8uxCCYfcodcgb0WCPSJPcezIJZuDmyE/edit?usp=sharing"
    },
    {
        "image": "volei.webp",
        "imageDetails": [
            {
                src: "placar-1.png",
                label: "Página inicial"
            },
            {
                src: "placar-2.png",
                label: "Placar"
            }
        ],
        "name": "Placar para Vôlei",
        "description": "Placar para partidas de vôlei.",
        "detailedDescription": `
            <p>O Placar para Vôlei é uma aplicação simples e eficaz para registrar o placar de partidas de vôlei entre amigos.</p>
        `,
        "skills": [
            "Vue.js"
        ],
        "deployUrl": "https://placar-volei.vercel.app/",
        "codeUrl": "https://github.com/lezzin/placar_volei",
        "docsUrl": "https://docs.google.com/document/d/1D-D_juSptjhfYBQKPmFI8yjv8h6LqUr4GLOfJxoSOTY/edit?usp=sharing"
    }
]

export default projects;