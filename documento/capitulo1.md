# 1. Apresentação do Projeto

## 1.1. Proposta de Trabalho Inicial
*Texto submetido para avaliação na fase de seleção de tema:*

O tema selecionado pelo nosso grupo insere-se na área da Multimédia e consiste no desenvolvimento de uma plataforma Web de streaming de vídeo on-demand (VOD), inspirada em interfaces modernas de entretenimento digital. O objetivo é criar um catálogo interativo de conteúdos audiovisuais, proporcionando uma experiência de utilizador fluida e visualmente imersiva.

O projeto será estruturado através de um sítio Web com quatro páginas estáticas principais:
1. **Landing Page:** Página introdutória para captação de utilizadores, destacando os serviços da plataforma.
2. **Catálogo Principal (Home VOD):** Interface de navegação organizada em "carrosséis" dinâmicos divididos por géneros ou tendências.
3. **Página de Detalhe e Leitor:** Apresentação da sinopse da obra escolhida, classificação, elenco e o respetivo reprodutor de vídeo (player multimédia).
4. **Página de Registo / Subscrição:** Formulário semântico estruturado para adesão ou contacto de novos subscritores.

Tecnicamente, o website será construído com recurso a marcação estritamente semântica em HTML5 (elementos como video, main, section, nav). A estética dark mode e a organização do layout serão garantidas inteiramente por CSS3 externo, fazendo forte uso de Flexbox/Grid, transições hover dinâmicas nas miniaturas dos vídeos e media queries para assegurar total responsividade em múltiplos ecrãs.

A arquitetura de dados do catálogo será assegurada por um documento XML estruturado e validado pelo seu respetivo Schema (XSD). Como principal elemento de valorização técnica, implementaremos JavaScript no lado do cliente (DOM) para extrair os dados deste XML e gerar, de forma automatizada e dinâmica, as listagens visuais de filmes na página do Catálogo.

---

## 1.2. Descrição Alargada do Projeto

Para além da proposta inicial, importa detalhar a visão abrangente desta plataforma e o seu enquadramento na disciplina de Tecnologias Internet.

### Objetivos Específicos
O objetivo principal não se limita apenas à criação de uma interface apelativa, mas sim à demonstração prática da separação de responsabilidades no desenvolvimento Web moderno (MVC adaptado ao cliente):
* **Estrutura (HTML5):** Garantir que todo o conteúdo é semanticamente descritivo para motores de busca e leitores de ecrã, sem formatação embutida.
* **Apresentação (CSS3):** Criar uma experiência *premium* (Dark UI), inspirada em gigantes da indústria multimédia, garantindo que o design se adapta perfeitamente a dispositivos móveis (Smartphones) e *Desktops*.
* **Dados e Lógica (XML + JS):** Simular um ambiente de base de dados isolando o conteúdo (filmes, descrições, links de vídeo) num ficheiro XML independente. A manipulação deste ficheiro via JavaScript demonstrará a capacidade de criar páginas dinâmicas e escaláveis, mesmo num ambiente de alojamento puramente estático.

### Público-Alvo e Utilidade
O projeto visa dois tipos de utilizadores:
1. **Consumidores de Multimédia:** Utilizadores que procuram uma interface simples e rápida para explorar e visualizar curtas-metragens, animações ou projetos independentes.
2. **Criadores de Conteúdo:** Produtores independentes que necessitem de uma plataforma estruturada para divulgar o seu portefólio audiovisual, utilizando o nosso formulário de subscrição para submeter novas obras.

### Âmbito Tecnológico e Restrições
De acordo com os requisitos da unidade curricular, o projeto respeita a restrição de não utilizar linguagens *server-side* (como PHP, Node.js) ou sistemas de gestão de bases de dados relacionais (SQL). Toda a inteligência da plataforma funcionará no lado do cliente (Browser). 

O projeto culminará com o alojamento do website numa plataforma de *cloud hosting* focada no *frontend*, nomeadamente o **Netlify**, garantindo acesso global, validação das normas W3C (HTML/CSS) e um ambiente colaborativo gerido através de controlo de versões no GitHub.
