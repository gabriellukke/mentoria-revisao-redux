# Revisão-redux-bloco-16
Repositório para o Plantão de Revisão do Bloco de Redux, o código original sem o uso do Redux está na branch **main**.

E a resolução vai ser feita na branch **frontendstore-with-redux-turma-X**.

---

## Código pronto

Nosso objetivo é refatorar a aplicação utilizando o Redux.

O código já está pronto, e nele temos uma aplicação semelhante ao projeto **Front End Online Store**, contando com:

- Página de login
  - Uma página simples, com um formulário onde o usuário insere o nome e realiza o login.
  - ao realizar o login o usuário é redirecionado a página de listagem

- Página de listagem de produtos
  - exibe uma lista de computadores, utilizando o endpoint <br/> `https://api.mercadolibre.com/sites/MLB/search?q=computador` do mercado livre
  - é possível adicionar um produto ao carrinho nessa página

- Página de detalhes do produto
  - exibe toda informação do produto
  - é possível adicionar um produto ao carrinho nessa página

- Página do carrinho
  - exibe todos produtos adicionado no carrinho
  - é possível remover um produto do carrinho nessa página

---
# Checklist do react-redux

*Antes de começar*
- [ ] pensar como será o *formato* do seu estado global
- [ ] pensar quais actions serão necessárias na sua aplicação

*Criar dentro do diretório src:*
- [ ] diretório actions;
- [ ] diretório reducers;
- [ ] diretório store.

*Criar dentro do diretório actions:*
- [ ] arquivo index.js.

*Criar dentro do diretório reducers:*
- [ ] arquivo index.js.

*Criar dentro do diretório store:*
- [ ] arquivo index.js.

*No arquivo App.js:*
- [ ] definir o Provider, `<Provider store={ store }>`, para fornecer os estados à todos os componentes encapsulados em `<App />`.

*No arquivo store/index.js:*
- [ ] criar a store
- [ ] configurar o [Redux DevTools](https://github.com/reduxjs/redux-devtools)

*Na pasta reducers:*
- [ ] criar os reducers necessários em arquivos separados
- [ ] importar o rootReducer no arquivo index e utilizar os reducers criados

*Na pasta actions:*
- [ ] criar os actionTypes, por exemplo: `const ADD_TO_CART = 'ADD_TO_CART';`
- [ ] criar os actions creators necessários

*Nos componentes:*
- [ ] criar a função mapStateToProps
- [ ] criar a função mapDispatchToProps
- [ ] fazer o connect

---

## Requisitos

1. Inicie a estruturação do Redux.
  - crie as pastas reducers, actions e store
  - 
