/* ==========================================================================
   js/controller.js - Camada CONTROLLER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    StreamController.inicializarPlataforma();
});

const StreamController = {
    async inicializarPlataforma() {
        this.configurarEventosInterface();

        const listaFilmes = await StreamModel.obterTodosOsFilmes();
        
        // 1. Ativa o motor de busca passando a lista completa
        this.configurarPesquisa(listaFilmes);
        
        // 2. Roteamento Inteligente
        const grelhaIndex = document.getElementById('movies-grid');
        if (grelhaIndex) {
            const filmesDestaque = listaFilmes.slice(0, 3);
            StreamView.renderizarGrelhaFilmes(filmesDestaque, 'movies-grid');
        }

        const grelhaCatalogo = document.getElementById('catalog-grid');
        if (grelhaCatalogo) {
            StreamView.renderizarGrelhaFilmes(listaFilmes, 'catalog-grid');
        }

        const contentorDetalhe = document.getElementById('detalhe-filme');
        if (contentorDetalhe) {
            const params = new URLSearchParams(window.location.search);
            const idProcurado = params.get('id');
            const filmeEncontrado = listaFilmes.find(f => f.id === idProcurado);
            StreamView.renderizarDetalhesFilme(filmeEncontrado);
        }
    },

    /**
     * Motor de busca em tempo real (Filtra o XML a cada tecla pressionada)
     */
    configurarPesquisa(listaFilmes) {
        const searchInput = document.getElementById('search-input');
        if (!searchInput) return;

        // Ouve o evento 'input' (dispara sempre que uma tecla é pressionada)
        searchInput.addEventListener('input', (evento) => {
            // Converte o texto para minúsculas para não haver problemas de Maiúsculas/Minúsculas
            const termoPesquisa = evento.target.value.toLowerCase();
            
            // Filtra os filmes onde o título ou categoria inclua o termo pesquisado
            const filmesFiltrados = listaFilmes.filter(filme => 
                filme.titulo.toLowerCase().includes(termoPesquisa) || 
                filme.categoria.toLowerCase().includes(termoPesquisa)
            );

            // Deteta se a pesquisa está a ser feita na Home ou no Catálogo
            const idGrelhaAtiva = document.getElementById('catalog-grid') ? 'catalog-grid' : 'movies-grid';
            
            // Renderiza os filmes filtrados
            StreamView.renderizarGrelhaFilmes(filmesFiltrados, idGrelhaAtiva);
        });

        // Lógica do botão da lupa (impede o form de recarregar a página caso estivesse num <form>)
        const btnSearch = document.querySelector('.search-icon');
        if(btnSearch) {
            btnSearch.addEventListener('click', (e) => e.preventDefault());
        }
    },

    configurarEventosInterface() {
        const botaoMenu = document.getElementById('menu-toggle');
        const menuNavegacao = document.getElementById('nav-menu');

        // Lógica do Menu Mobile
        if (botaoMenu && menuNavegacao) {
            botaoMenu.addEventListener('click', (evento) => {
                evento.stopPropagation();
                StreamView.alternarMenuMobile(menuNavegacao, botaoMenu);
            });

            document.addEventListener('click', (evento) => {
                const menuAberto = menuNavegacao.classList.contains('active');
                const clicouFora = !menuNavegacao.contains(evento.target) && !botaoMenu.contains(evento.target);
                
                if (menuAberto && clicouFora) {
                    StreamView.alternarMenuMobile(menuNavegacao, botaoMenu);
                }
            });
        }

        // Lógica de Roteamento ao Clicar num Cartão de Filme
        document.body.addEventListener('click', (evento) => {
            const cartaoClicado = evento.target.closest('.movie-card');
            
            if (cartaoClicado) {
                const idFilme = cartaoClicado.getAttribute('data-id');
                const caminhoBase = window.location.pathname.includes('/pages/') ? '' : 'pages/';
                window.location.href = `${caminhoBase}detalhe.html?id=${idFilme}`;
            }
        });

        // --- NOVO: LÓGICA DE VALIDAÇÃO E SUBSCRIÇÃO DO FORMULÁRIO ---
        const formulario = document.querySelector('.checkout-form');
        if (formulario) {
            formulario.addEventListener('submit', (evento) => {
                // 1. Impede o recarregamento da página (comportamento padrão do HTML)
                evento.preventDefault();

                // 2. Captura os dados cirurgicamente do DOM
                const inputNome = document.getElementById('nome');
                const radioPlano = document.querySelector('input[name="plano"]:checked');
                
                // 3. Validação extra de segurança
                if (inputNome && radioPlano) {
                    const nomeUtilizador = inputNome.value;
                    const planoSelecionado = radioPlano.value;

                    // 4. Ordena à View para destruir o formulário e criar a mensagem de sucesso
                    StreamView.exibirSucessoSubscricao(nomeUtilizador, planoSelecionado);
                }
            });
        }
    }
};