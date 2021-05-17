<h3 align="center">
  Desafio SOMAPAY.
</h3>

<p>Esse desafio foi feito a partir dos requisitos pedidos pela a empresa baseado na api <a href="https://developer.marvel.com/">
  https://developer.marvel.com/</a></p>

<blockquote align="center">“Aprender é a única coisa de que a mente nunca se cansa, nunca tem medo e nunca se arrepende”!</blockquote>

<p align="center">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361" />

</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://somapay.netlify.app">Link do deploy</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/Sauloleocadio/challenge-somapay#-demonstra%C3%A7%C3%A3o">Demonstração</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/Sauloleocadio/challenge-somapay#-pr%C3%A9-requisitos">Pré-requisito</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/Sauloleocadio/challenge-somapay#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/Sauloleocadio/challenge-somapay#-licen%C3%A7a">Licença</a>
</p>

## 🏆 Sobre o desafio

O teste que consiste em desenvolver uma aplicação React.js que consome a API da Marvel (https://developer.marvel.com) para listar os quadrinhos (comics). Ao clicar em um quadrinho, deve ser exibido o detalhe do quadrinho. Dentro da tela do detalhe do quadrinho, também deve ser exibido o detalhe do personagem principal do quadrinho. O layout do site fica por sua conta.

Também é necessário consumir uma api de autenticação (Github por exemplo) e tanto a listagem quanto os detalhes dos quadrinhos só podem ser acessados uma vez que esteja logado, então deve haver uma tela de login também.

Seu Projeto deve ser em React

- Você deve usar o React Router (Use Rotas protegidas de acesso não autenticado)
- Use hooks customizados (onde fizer sentido - Bônus)
- Use a API Context (onde fizer sentido - Bônus)
- Use o Redux
- Você deve usar algum sistema de autenticação (Github, Facebook, Google, etc)
- Exiba o nome e o email do usuário em algum lugar da página, ex. no header

## Informações importantes

1. Segue o link de acesso ao deploy [DESAFIO SOMAPAY](https://somapay.netlify.app).

## ✅ Demonstração

<img src="https://github.com/Sauloleocadio/challenge-somapay/blob/master/src/assets/systemone.png" />
<img src="https://github.com/Sauloleocadio/challenge-somapay/blob/master/src/assets/systemtwo.png" />
<img src="https://github.com/Sauloleocadio/challenge-somapay/blob/master/src/assets/systemthree.png" />

## ⚙ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e/ou [Yarn](https://yarnpkg.com/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

- Possuir contas na [Netlify](https://app.netlify.com/) para deploys de front

## 📗 Rodando a Aplicação (web)

```bash
# Clone este repositório
$ git clone https://github.com/Sauloleocadio/challenge-somapay.git

# Navegue até a pasta
$ cd challenge-somapay

# Instale as dependências
$ criar um arquivo .env no diretório com as variáveis de ambiente com as key do firebase e da api da marvel

# Instale as dependências
$ yarn

# Execute a aplicação
$ yarn start
```

## 📎 Features

- [x] Login de usuário
- [x] Listagem de quadrinhos
- [x] Detalhamento completo dos quadrinhos e personagens principais
- [x] Conexao com github e gmail com firebase

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- React
- React-Redux
- Redux
- Javascript

## 📕 Bibliotecas

Esse projeto foi utilizou das seguintes lib:

- react-redux
- react-router-dom
- axios
- react-icons
- firebase

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by SAULO LEOCÁDIO :wave: , qualquer dúvida [SÓ CHAMAR](https://linktr.ee/sauloleocadio)
