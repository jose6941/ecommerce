# E-commerce Moderno com Next js

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)

---

## Sobre o Projeto

É um projeto de e-commerce moderno, rápido e responsivo, focado em demonstrar conhecimentos avançados no ecossistema **Next.js**. O objetivo principal desta aplicação é construir uma vitrine de produtos fluida e interativa, consumindo dados de uma API externa (FakeStoreAPI) e aplicando as melhores práticas de design e desenvolvimento frontend.

O projeto foi criado combinando o poder do **Next.js App Router** com a performance do **React 19** e estilizado com a versão mais recente do **Tailwind CSS (v4)**, garantindo uma interface requintada, limpa e com uma excelente usabilidade tanto em dispositivos móveis quanto em desktops.

---

## Funcionalidades

- **Vitrine Dinâmica de Produtos:** Listagem de produtos consumidos em tempo real da [Fake Store API](https://fakestoreapi.com/products).
- **Paginação Funcional:** Solução robusta de paginação projetada para otimizar requisições e a experiência de navegação do usuário.
- **Interfaces Responsivas (Mobile-First):** Layout que se adapta perfeitamente a qualquer tamanho de tela. Inclui um menu "hambúrguer" inteligente para navegação em smartphones.
- **Componentização Modular:** Arquitetura baseada em componentes React independentes e reutilizáveis, como cartões de produto (`Card`), cabeçalho de navegação (`Navbar`) e formulários iterativos.
- **Otimização de Imagens:** Aplicação agressiva de otimizações de mídia usando `next/image` para *lazy loading*, redução de peso das imagens na web e melhoria nos Web Vitals (LCP/CLS).
- **Experiência Visual Premium:** Cartões de produto envolventes com efeitos de *hover* dinâmicos (`scale` e `translate`), sombras elegantes e uma navegação fluida com botões customizáveis.

---

## Tecnologias Utilizadas

Este projeto foi construído utilizando as ferramentas de ponta disponíveis no mercado de desenvolvimento Web:

### Ecossistema Web
- **[Next.js (v16.2)](https://nextjs.org/):** Framework React full-stack. Uso de Next.js App Router para roteamento otimizado, otimização de imagens, layout persistente (Server Components & Fetching).
- **[React (v19)](https://react.dev/):** Biblioteca subjacente para a construção estruturada das interfaces de usuário.
- **[TypeScript (v5)](https://www.typescriptlang.org/):** Confere tipagem estática rigorosa para garantir mais confiabilidade e segurança durante o processo de desenvolvimento e manutenção.

### Estilização e UI
- **[Tailwind CSS (v4)](https://tailwindcss.com/):** Framework utilitário de CSS com a integração PostCSS nativa (`@tailwindcss/postcss`), proporcionando estilização ultrarrápida diretamente no markup.
- **Variáveis de Design e Cores Customizadas:** Uso de variáveis CSS sofisticadas permitindo criar paletas de tema coesas de alta fidelidade visual (ex: `--color-dark-900`, `--color-primary-500`).

---

## Arquitetura do Projeto

A organização de pastas foi feita guiando-se estritamente pelas boas práticas de escalabilidade do Next.js App Router:

```bash
ecommerce_next
 ┣  app
 ┃ ┣ (auth)         # Rotas de Autenticação utilizando o conceito de "Route Groups"
 ┃ ┣ (root)         # Rotas e páginas principais visíveis aos usuários
 ┃ ┣ components     # Componentes modulares reutilizáveis em toda a aplicação (UI e Layout)
 ┃ ┣ globals.css    # Ponto de entrada do Tailwind e declaração de Design Tokens
 ┃ ┣ layout.tsx     # O Layout Root da aplicação, com injeção global do cabeçalho
 ┃ ┗ page.tsx       # A Homepage onde a lista paginada dos produtos é 
```

---

## Como Executar o Projeto 

Siga o passo-a-passo abaixo para visualizar o projeto funcionando no seu ambiente:

### Pré-requisitos
- Node.js versão **20.x** ou superior.
- Git para clonagem.

### Executando

1. **Clone este repositório para o seu dispositivo:**
   ```bash
   git clone https://github.com/SeuUsuario/Nome-do-Repositorio.git
   ```

2. **Navegue até a pasta raiz:**
   ```bash
   cd ecommerce_next
   ```

3. **Inicie a instalação das dependências (npm, yarn ou pnpm):**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento do Next:**
   ```bash
   npm run dev
   ```



