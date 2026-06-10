/* ==========================================================================
   js/model.js - Camada MODEL (Dados e Comunicação HTTP)
   ========================================================================== */

const StreamModel = {
    /**
     * Calcula o caminho correto do XML de forma dinâmica, 
     * dependendo se estamos na raiz (index.html) ou na subpasta (pages/...).
     */
    obterCaminhoXML() {
        const emSubpasta = window.location.pathname.includes('/pages/');
        return emSubpasta ? '../data/catalogo.xml' : 'data/catalogo.xml';
    },

    /**
     * Efetua um pedido HTTP GET para ler o ficheiro XML e converte-o para objetos JS.
     * @returns {Promise<Array>} Array de objetos com os dados dos filmes.
     */
    async obterTodosOsFilmes() {
        try {
            // Obtém o caminho correto antes de fazer o fetch
            const caminhoCorreto = this.obterCaminhoXML();

            // REQUISITO: Utilização explícita do método HTTP GET
            const resposta = await fetch(caminhoCorreto, {
                method: 'GET',
                headers: {
                    'Accept': 'application/xml'
                }
            });

            // Validação do estado da resposta HTTP
            if (!resposta.ok) {
                throw new Error(`Falha no pedido HTTP. Código de Status: ${resposta.status}`);
            }

            // Captura o corpo da resposta HTTP como texto bruto
            const xmlTexto = await resposta.text();

            // Transforma a string de texto num documento estruturado XML (DOM)
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlTexto, 'text/xml');

            // Verifica se houve erros de parsing no XML
            if (xmlDoc.getElementsByTagName('parsererror').length > 0) {
                throw new Error('Erro ao interpretar a estrutura do ficheiro XML.');
            }

            // Converte a árvore de nós do XML num Array nativo do JavaScript
            return this.converterXmlParaArray(xmlDoc);

        } catch (erro) {
            console.error('Erro na camada Model ao efetuar o método HTTP GET:', erro);
            return []; // Retorna um array vazio em caso de falha para evitar quebras
        }
    },

    /**
     * Converte o documento XML nativo num Array de objetos JS estruturados.
     * @param {XMLDocument} xmlDoc 
     * @returns {Array} Array de filmes formatado.
     */
    converterXmlParaArray(xmlDoc) {
        const nosFilmes = xmlDoc.getElementsByTagName('filme');
        const listaFilmes = [];

        for (let i = 0; i < nosFilmes.length; i++) {
            const no = nosFilmes[i];
            
            listaFilmes.push({
                id: no.getAttribute('id'),
                titulo: no.getElementsByTagName('titulo')[0].textContent,
                categoria: no.getElementsByTagName('categoria')[0].textContent,
                ano: no.getElementsByTagName('ano')[0].textContent,
                classificacao: no.getElementsByTagName('classificacao')[0].textContent,
                imagem: no.getElementsByTagName('imagem')[0].textContent,
                trailer: no.getElementsByTagName('trailer')[0].textContent,
                descricao: no.getElementsByTagName('descricao')[0].textContent
            });
        }

        return listaFilmes;
    }
};