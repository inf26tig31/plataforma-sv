# Plataforma Web de Streaming de Vídeo

Repositório para hospedar o projeto desenvolvido para a unidade curricular de Tecnologias Internet. 
Desenvolvido pelo Grupo inf26tig31: @alfordesdf-bot, @juhcruz, @tonyaguiar12.

## Descrição do Projeto

O tema selecionado pelo nosso grupo insere-se na área da Multimédia e consiste no desenvolvimento de uma Plataforma Web de streaming de vídeo, inspirada em interfaces modernas de entretenimento digital. O objetivo é criar um catálogo interativo de conteúdos audiovisuais, proporcionando uma experiência de utilizador fluida e visualmente imersiva.

O projeto será estruturado através de um sítio Web com quatro páginas estáticas principais:
1. **Landing Page:** Página introdutória para captação de utilizadores, destacando os serviços da plataforma.
2. **Catálogo Principal (Home):** Interface de navegação organizada em "carrosséis" dinâmicos divididos por géneros ou tendências.
3. **Página de Detalhe e Leitor:** Apresentação da sinopse da obra escolhida, classificação, elenco e o respetivo reprodutor de vídeo (player multimédia).
4. **Página de Registo / Subscrição:** Formulário semântico estruturado para adesão ou contacto de novos subscritores.

## Tecnologias e Arquitetura

* **HTML5:** Construção do website com recurso a marcação estritamente semântica (elementos como `video`, `main`, `section`, `nav`) - [HTML5](https://developer.mozilla.org/pt-PT/docs/Web/HTML)
* **CSS3:** A estética dark mode e a organização do layout serão garantidas inteiramente por CSS3 externo. Faremos forte uso de Flexbox/Grid, transições hover dinâmicas nas miniaturas dos vídeos e media queries para assegurar total responsividade em múltiplos ecrãs - [CSS3](https://developer.mozilla.org/pt-PT/docs/Web/CSS)
* **XML e XSD:** A arquitetura de dados do catálogo será assegurada por um documento XML estruturado e validado pelo seu respetivo Schema (XSD) - [XML](https://developer.mozilla.org/pt-PT/docs/Web/XML) e [XSD](https://www.w3.org/XML/Schema)
* **JavaScript:** Como principal elemento de valorização técnica, implementaremos JavaScript no lado do cliente (DOM) para extrair os dados deste XML e gerar, de forma automatizada e dinâmica, as listagens visuais de filmes na página do Catálogo - [JavaScript](https://developer.mozilla.org/pt-PT/docs/Web/JavaScript)

## Organização do Repositório

Navegação pela estrutura do projeto:

* O código-fonte principal (HTML, CSS, JS, XML e imagens) encontra-se na pasta `src`.
* Os capítulos do relatório final e documentação de suporte estão na pasta `documento`.

## Relatório

Documentação detalhada do projeto. Cada link abaixo direciona para o respetivo capítulo na pasta `documento`.

**Apresentação do projeto**
* [Capítulo 1: Apresentação do projeto](./documento/capitulo1.md)

**Interface do utilizador**
* [Capítulo 2: Protótipo da Interface e Mapa do Site](./documento/capitulo2.md)

**Produto e Requisitos**
* [Capítulo 3: Implementação e Validação W3C](./documento/capitulo3.md)

## Equipa

* Alfordes João [@alfordesdf-bot](https://github.com/Username1)
* Juliana Gonçalves [@juhcruz](https://github.com/Username2)
* Tonilson Furtado [@tonyaguiar12](https://github.com/Username3)
