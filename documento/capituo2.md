# 2. Interface com o Utilizador

Neste capítulo é apresentado o estudo da interface da plataforma **StreamFlix**, incluindo o mapa do site (Sitemap) e os protótipos visuais (Sketches/Wireframes).

## 2.1. Sitemap (Mapa do Site)
A estrutura de navegação foi pensada para ser simples e linear, garantindo que o utilizador acede ao conteúdo com o mínimo de cliques possível, através do menu de navegação principal.

* **Início (Landing Page / Home):** Página principal com trailer de destaque, navegação e listagem de filmes em destaque.
    * -> **Catálogo:** Grelha completa de filmes organizados por categorias.
        * -> **Detalhe do Filme:** Página individual gerada com sinopse completa e leitor de vídeo principal.
    * -> **Subscrição:** Formulário de registo e contacto para novos utilizadores.

## 2.2. Sketches e Protótipos (Wireframes)
Abaixo apresenta-se o estudo inicial da interface (protótipo de alta fidelidade) desenhado para a página principal da plataforma StreamFlix.

![Protótipo da Página Inicial - StreamFlix](./doumento/homep.png)
*(Nota: O ficheiro original do mockup encontra-se na pasta documento/img/)*

### 2.3. Decisões de Design (UI/UX)
Com base no protótipo desenvolvido, as principais diretrizes visuais e funcionais são:

* **Esquema de Cores (Dark Mode):** Utilização de fundos escuros (pretos e cinzentos escuros) com detalhes interativos em vermelho vivo. Esta paleta reduz o cansaço visual, foca a atenção do utilizador nos pósteres dos filmes e nos trailers, remetendo para a experiência imersiva de uma sala de cinema.
* **Header e Navegação:** Menu fixo no topo com barra de pesquisa integrada, permitindo acesso rápido às secções "Início", "Catálogo" e "Subscrição".
* **Organização do Layout:**
    * **Hero Section (Estreia Exclusiva):** Zona de grande destaque com um reprodutor de vídeo incorporado e um claro *Call-to-Action* (Botão "Ver Detalhes").
    * **Barra Lateral (Categorias Populares):** Menu lateral direito em formato de lista não ordenada, permitindo uma filtragem rápida por géneros (Ficção Científica, Ação, Infantil, Musical).
    * **Grelha de Destaques:** Secção inferior organizada em cartões flexíveis (*cards*) com imagens dos filmes, que se adaptarão a diferentes tamanhos de ecrã recorrendo a *Media Queries* e propriedades de *Flexbox/Grid* no CSS3.
* **Rodapé (Footer):** Inclusão de hiperligações obrigatórias para o repositório do projeto e um botão de destaque para "Descarregar XML", cumprindo o requisito de disponibilização do ficheiro exigido pelo enunciado.
