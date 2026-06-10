/* ==========================================================================
   js/view.js - Camada VIEW (Manipulação Dinâmica do DOM)
   ========================================================================== */

const StreamView = {
    /**
     * Renderiza a grelha de filmes num contentor específico (Início ou Catálogo).
     * @param {Array} filmes - Array de objetos contendo as informações dos filmes.
     * @param {string} idContentor - O ID do elemento HTML onde a grelha será injetada.
     */
    renderizarGrelhaFilmes(filmes, idContentor) {
        // Procura pelo ID dinâmico passado pelo Controller
        const contentorGrelha = document.getElementById(idContentor);
        
        if (!contentorGrelha) return;

        // Limpa os elementos estáticos colocados temporariamente no HTML
        contentorGrelha.innerHTML = '';

        // Se não existirem filmes, exibe uma mensagem amigável no DOM
        if (filmes.length === 0) {
            const mensagemErro = document.createElement('p');
            mensagemErro.textContent = 'De momento, não foi possível carregar o catálogo.';
            contentorGrelha.appendChild(mensagemErro);
            return;
        }

        // Constrói dinamicamente a estrutura semântica para cada filme
        filmes.forEach(filme => {
            // Criação do elemento <figure> exigido
            const cartao = document.createElement('figure');
            cartao.className = 'movie-card';
            cartao.setAttribute('data-id', filme.id);

            // Criação da tag de imagem <img> com atributos responsivos
            const imagem = document.createElement('img');
            imagem.src = filme.imagem;
            imagem.alt = `Capa Oficial do filme ${filme.titulo}`;
            imagem.loading = 'lazy'; // Otimização de performance nativa

            // Criação da legenda <figcaption> exigida
            const legenda = document.createElement('figcaption');
            legenda.textContent = filme.titulo;

            // Montagem hierárquica dos nós do DOM
            cartao.appendChild(imagem);
            cartao.appendChild(legenda);
            
            // Injeção do componente estruturado na grelha principal
            contentorGrelha.appendChild(cartao);
        });
    },

    /**
     * Renderiza os dados específicos de um único filme na página de Detalhes.
     * @param {Object} filme - Objeto com os dados do filme clicado.
     */
    renderizarDetalhesFilme(filme) {
        const contentorDetalhe = document.getElementById('detalhe-filme');
        if (!contentorDetalhe) return;

        if (!filme) {
            contentorDetalhe.innerHTML = '<h2>Filme não encontrado.</h2><p>Por favor, volta ao catálogo.</p>';
            return;
        }

        // --- MOTOR DE EXTRAÇÃO DE ID DO YOUTUBE RESTRITO ---
        let videoId = "";
        const urlStr = filme.trailer;

        try {
            if (urlStr.includes("watch?v=")) {
                videoId = urlStr.split("watch?v=")[1].split("&")[0];
            } else if (urlStr.includes("/live/")) {
                // Divide após /live/ e depois limpa qualquer ? ou & que venha a seguir
                let part = urlStr.split("/live/")[1];
                videoId = part.includes("?") ? part.split("?")[0] : part;
                videoId = videoId.includes("&") ? videoId.split("&")[0] : videoId;
            } else if (urlStr.includes("youtu.be/")) {
                let part = urlStr.split("youtu.be/")[1];
                videoId = part.includes("?") ? part.split("?")[0] : part;
            } else {
                videoId = urlStr;
            }
        } catch (erro) {
            console.error("Erro ao processar URL do trailer:", erro);
            videoId = ""; 
        }

        // Injeta o HTML dinâmico garantindo que a URL do iframe vai limpa e funcional
        contentorDetalhe.innerHTML = `
            <div class="detalhe-header">
                <h2>${filme.titulo}</h2>
                <div class="meta-info">
                    <mark>${filme.classificacao}</mark>
                    <span>${filme.ano}</span>
                    <span>${filme.categoria}</span>
                </div>
            </div>
            
            <div class="detalhe-media">
                <iframe width="100%" height="500" 
                    src="https://www.youtube.com/embed/${videoId.trim()}" 
                    title="Trailer de ${filme.titulo}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            
            <div class="detalhe-sinopse">
                <h3>Sinopse</h3>
                <p>${filme.descricao}</p>
            </div>
        `;
    },

    /**
     * Exibe uma mensagem de sucesso dinâmica após a confirmação do formulário.
     * @param {string} nome - O nome do utilizador capturado do input.
     * @param {string} plano - O plano selecionado pelo utilizador.
     */
    exibirSucessoSubscricao(nome, plano) {
        const form = document.querySelector('.checkout-form');
        const contentor = document.querySelector('.checkout-section');
        
        if (!contentor || !form) return;

        // Limpa o formulário do ecrã para dar lugar ao feedback visual
        form.remove();

        // Cria a estrutura semântica de sucesso dinamicamente
        const mensagemBox = document.createElement('div');
        mensagemBox.className = 'mensagem-sucesso';
        mensagemBox.style.animation = 'fadeIn 0.5s ease-in';

        mensagemBox.innerHTML = `
            <div style="text-align: center; padding: var(--spacing-lg) 0;">
                <span style="font-size: 4rem;">🎉</span>
                <h3 style="color: var(--color-primary); font-size: 1.8rem; margin-top: var(--spacing-md);">Subscrição Confirmada!</h3>
                <p style="font-size: 1.1rem; margin: var(--spacing-md) 0; color: var(--color-text-main);">
                    Olá <strong>${nome}</strong>, bem-vindo à família StreamFlix!
                </p>
                <p style="color: var(--color-text-muted);">
                    O teu plano <strong>${plano.toUpperCase()}</strong> já se encontra ativo.
                </p>
                <div style="margin-top: var(--spacing-lg);">
                    <a href="../index.html" class="btn-primary">Começar a Assistir</a>
                </div>
            </div>
        `;

        contentor.appendChild(mensagemBox);
    },

    /**
     * Altera o estado visual do menu de navegação mobile.
     * @param {HTMLElement} menuElement - O elemento <ul> do menu.
     * @param {HTMLElement} botaoElement - O botão que dispara o evento.
     */
    alternarMenuMobile(menuElement, botaoElement) {
        const estaAtivo = menuElement.classList.toggle('active');
        
        // Atualiza os atributos de acessibilidade (ARIA) dinamicamente no DOM
        botaoElement.setAttribute('aria-expanded', estaAtivo);
        
        // Modifica cirurgicamente o texto interno do botão para dar feedback visual
        botaoElement.textContent = estaAtivo ? 'Fechar' : 'Menu';
    }
};