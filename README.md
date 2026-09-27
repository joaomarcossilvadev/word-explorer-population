# 🌎 World Explorer Population

Aplicação web desenvolvida em **React** para explorar informações populacionais de países ao redor do mundo.

O projeto permite pesquisar países, visualizar suas bandeiras e consultar informações como **nome, região, capital e população**, utilizando dados obtidos através de uma API pública.

> Projeto desenvolvido com foco em prática de desenvolvimento Front-end, consumo de API, componentização e criação de interfaces responsivas.

---

## 🤖 Uso de Inteligência Artificial

### Prompt utilizado

"Estou planejando uma aplicação React que utiliza uma api publica
API: https://countries.dev/
Meu problema é: mostrar ao usuario a população no mundo.
Meu público é: estudentes, profissionais de ecologia e etc.
Quero identificar possíveis requisitos funcionais e
componentes que poderiam fazer parte da solução. Não
escreva código. Quero apenas sugestões para analisar."

### Objetivo

Utilizei esse prompt para entender como planejar o projeto de forma consistente e flexivel.


## 🚀 Demonstração

🔗 **Acesse o projeto:**
[https://github.com/joaomarcossilvadev/word-explorer-population](https://word-explorer-population.vercel.app/)

---

## 📋 Sobre o projeto

O **World Explorer Population** foi criado com o objetivo de desenvolver uma aplicação interativa capaz de apresentar informações populacionais de diferentes países de forma simples e visual.

A aplicação utiliza uma API pública para obter os dados dos países e apresenta essas informações através de componentes reutilizáveis.

A proposta é tornar a consulta de informações sobre países mais intuitiva, permitindo que o usuário pesquise diretamente pelo nome do país e navegue pelos resultados encontrados.

---

## ✨ Funcionalidades

* 🔎 Pesquisa de países em tempo real
* 🌎 Consulta de informações de diferentes países
* 🏳️ Exibição da bandeira de cada país
* 👥 Exibição da população
* 📍 Exibição da região
* 🏛️ Exibição da capital
* 🇧🇷 Suporte à pesquisa utilizando nomes de países em português
* ⬅️➡️ Navegação entre os resultados encontrados
* 📑 Paginação dos resultados
* 📱 Interface responsiva
* ⚠️ Tratamento de erros quando um país não é encontrado
* ⏳ Indicação de carregamento durante a consulta à API
* 🧩 Componentização utilizando React

---

## 🛠️ Tecnologias utilizadas

### Front-end

* **React**
* **JavaScript**
* **HTML5**
* **CSS3**
* **Vite**
* **Axios**

### Ferramentas

* **Git**
* **GitHub**
* **ESLint**
* **VS Code**

### API

Os dados dos países são obtidos através da API pública:

**Countries.dev**

https://countries.dev/

---

## 🧠 Conceitos praticados

Durante o desenvolvimento foram utilizados diversos conceitos importantes do desenvolvimento Front-end moderno.

### React

* Componentização
* Props
* Hooks
* `useState`
* Renderização condicional
* Eventos
* Manipulação de estados
* Comunicação entre componentes

### JavaScript

* Arrays
* Objetos
* Funções
* Métodos de array
* Template literals
* Destructuring
* `async/await`
* `fetch`/requisições HTTP
* Tratamento de erros

### Consumo de API

A aplicação realiza requisições HTTP para obter os dados dos países e posteriormente transforma essas informações em componentes visuais.

---

## 🧩 Estrutura dos componentes

A aplicação foi dividida em componentes para facilitar a organização e manutenção do código.

Uma estrutura aproximada do projeto é:

```text
src/
│
├── components/
│   │
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.css
│   │
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.css
│   │
│   ├── CountryList/
│   │   ├── CountryList.jsx
│   │   └── CountryList.css
│   │
│   ├── CardCountry/
│   │   ├── CardCountry.jsx
│   │   └── CardCountry.css
│   │
│   ├── CountryDetails/
│   │   ├── CountryDetails.jsx
│   │   └── CountryDetails.css
│   │
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.css
│
├── App.jsx
├── main.jsx
└── ...
```

A separação dos componentes permite que cada parte da interface tenha uma responsabilidade específica.

---

## 🎨 Identidade visual

O projeto utiliza uma identidade visual baseada em cores associadas à tecnologia, natureza e exploração.

### Principais cores

| Cor       | Utilização                            |
| --------- | ------------------------------------- |
| `#2563EB` | Elementos principais e títulos        |
| `#16A34A` | Informações populacionais e destaques |
| `#06B6D4` | Elementos secundários                 |
| `#64748B` | Textos secundários                    |
| `#E2E8F0` | Bordas e divisores                    |
| `#FFFFFF` | Fundo e elementos de destaque         |

### Tipografia

A interface utiliza uma combinação de fontes modernas para facilitar a leitura e criar uma identidade visual limpa.

* **Poppins** — títulos e elementos de destaque
* **Inter** — textos e informações

---

## 🔎 Pesquisa de países

Um dos principais recursos da aplicação é o campo de pesquisa.

O usuário pode digitar o nome de um país e a aplicação realiza uma consulta à API.

Também foi implementado um mapeamento para permitir pesquisas utilizando nomes em português.

Exemplos:

```text
Brasil → Brazil
Alemanha → Germany
França → France
Espanha → Spain
Itália → Italy
Japão → Japan
China → China
Índia → India
Canadá → Canada
México → Mexico
```

Isso melhora a experiência do usuário brasileiro durante a utilização da aplicação.

---

## 📊 Informações apresentadas

Cada país encontrado pode apresentar informações como:

```text
🏳️ Bandeira
🌎 Nome do país
📍 Região
👥 População
🏛️ Capital
```

A população é formatada utilizando o padrão brasileiro:

```text
1.234.567
```

---

## ⬅️➡️ Navegação dos resultados

Para evitar que muitos cards ocupem espaço simultaneamente na interface, os resultados são apresentados de maneira controlada.

O usuário pode navegar pelos países encontrados utilizando controles de navegação.

```text
← Anterior    1  2  3    Próximo →
```

Essa abordagem mantém a interface mais organizada e facilita a visualização dos países em diferentes tamanhos de tela.

---

## 📱 Responsividade

O projeto foi desenvolvido pensando em diferentes tamanhos de tela.

A interface busca oferecer uma experiência consistente em:

* 💻 Desktop
* 💻 Notebook
* 📱 Smartphones
* 📱 Tablets

Os componentes possuem estilos responsivos para adaptar os elementos de acordo com o espaço disponível.

---

## ⚠️ Tratamento de erros

A aplicação possui tratamento para situações em que a pesquisa não retorna resultados.

Por exemplo:

```text
Nenhum país encontrado.
```

Também existe tratamento para possíveis falhas durante a comunicação com a API:

```text
Erro ao buscar países.
```

Isso evita que o usuário fique sem feedback quando ocorre algum problema durante a consulta.

---

## 📂 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/joaomarcossilvadev/word-explorer-population.git
```

### 2. Acesse a pasta

```bash
cd word-explorer-population
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm run dev
```

Depois, abra no navegador o endereço exibido pelo Vite.

Normalmente:

```text
http://localhost:5173
```

---

## 📦 Scripts disponíveis

O projeto utiliza scripts fornecidos pelo Vite.

### Desenvolvimento

```bash
npm run dev
```

Executa o servidor de desenvolvimento.

### Build

```bash
npm run build
```

Gera a versão otimizada para produção.

### Preview

```bash
npm run preview
```

Permite visualizar localmente a versão gerada para produção.

### Lint

```bash
npm run lint
```

Executa o ESLint para verificar possíveis problemas no código.

---

## 🔗 API utilizada

O projeto utiliza a **Countries.dev** para obter os dados dos países.

🔗 https://countries.dev/

A API é responsável por fornecer informações utilizadas pela aplicação, como dados populacionais e informações geográficas.

---

## 🎯 Objetivos de aprendizado

Este projeto foi desenvolvido principalmente para praticar:

* Desenvolvimento de aplicações React
* Criação de componentes reutilizáveis
* Gerenciamento de estado
* Consumo de APIs
* Requisições HTTP
* Organização de projetos Front-end
* Desenvolvimento de interfaces responsivas
* Tratamento de estados de carregamento
* Tratamento de erros
* Paginação e navegação de resultados
* Boas práticas de organização de código

---

## 📚 Aprendizados

O desenvolvimento do **World Explorer Population** proporcionou prática em situações comuns encontradas no desenvolvimento Front-end, principalmente na integração entre uma interface React e uma API externa.

Um dos principais aprendizados foi entender como transformar dados recebidos de uma API em componentes reutilizáveis e interativos.

Também foram praticados conceitos de:

```text
API
 ↓
Requisição HTTP
 ↓
Estado React
 ↓
Componentes
 ↓
Interface
```

---

## 👨‍💻 Desenvolvedor

Desenvolvido por **João Marcos Silva**.

### 🔗 Redes e portfólio

**GitHub:**
https://github.com/joaomarcossilvadev

**LinkedIn:**
https://linkedin.com/in/joao-silva-fullstack/

---

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo, prática e construção de portfólio.

Sinta-se à vontade para estudar o código e utilizar as ideias como referência para seus próprios projetos.

---

⭐ Se este projeto foi útil para você, considere deixar uma estrela no repositório!
