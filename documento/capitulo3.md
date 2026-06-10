# Capítulo 3: Produto (Product)

### 3.1. Descrição do Produto
O **StreamFlix** é uma plataforma web de streaming de vídeo desenvolvida como um ecossistema SPA (*Single Page Application*) simulado, focado na experiência do utilizador e na fluidez visual. A aplicação foi inteiramente construída utilizando tecnologias nativas web (HTML5, CSS3 e Vanilla JavaScript), estruturada rigorosamente sob o padrão de arquitetura **MVC (Model-View-Controller)**. O catálogo de conteúdos, categorias, metadados e caminhos multimédia são geridos centralmente a partir de uma "base de dados" em formato XML (`catalogo.xml`), validada estruturalmente por um esquema XSD (`catalogo.xsd`).

### 3.2. Ligação para o Site (Alojamento Netlify)
A plataforma encontra-se publicada e totalmente operacional para testes e avaliação através da infraestrutura cloud do Netlify:
* **Ligação Oficial:** [https://inf26tig31-streamflix.netlify.app](https://inf26tig31-streamflix.netlify.app) 

### 3.3. Validação W3C

#### Validação HTML
![Print do Validador HTML](./img/valid_html.png)

#### Validação CSS
![Print do Validador CSS](./img/valid_css.png)

### 3.4. Instruções de Instalação e Configuração

#### A. Execução e Instalação Local
Para executar o projeto em ambiente de desenvolvimento local, siga os seguintes passos:
1. Efetue o clone do repositório Git ou descarregue o ficheiro `.zip` do projeto:
   ```bash
   git clone [https://github.com/inf26tig31/plataforma-sv.git](https://github.com/inf26tig31/plataforma-sv.git)
