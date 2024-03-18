# Petshop Com O Melhor Preco

A aplicação calcula o melhor petshop para você com base no número de cachorros grandes e pequenos que você tem, considerando o valor e a distância dos diferentes petshops. Essa aplicação utiliza React para o frontend e Node para o backend.

[![NodeJs](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png)](https://nodejs.org/en/) [![React](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png)](https://reactjs.org/) 


## Tecnologias

- [node.js](https://nodejs.org/en/) - evented I/O for the backend

- [React](https://legacy.reactjs.org/) - React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.
## Setup

- Para rodar essa aplicação, antes é necessário instalar as dependências nos arquivos do backend e frontend. Vá em /Backend e execute o comando.
```sh
  command npm install
```
- Depois de instalar as dependências, rode a aplicação com o comando.
```sh
  command npm start
```
- A aplicação abrirá em:
```
http://localhost:3001
```
- Vá em /Frontend e rode o seguinte comando.
```sh
  command npm install
```
- Depois de instalar as dependências, rode a aplicação com o comando.
```sh
  command npm start
```
- A aplicação abrirá em: 
```
http://localhost:3000
```
- Verifique a implementação da navegação do seu endereço no seu navegador favorito.


## Uso

faca um GET request na URL (/) com os seguintes parametros:

    1. Coloque a data, o número de cachorros pequenos e o número de cachorros grandes.
    2. Click no botao de "submit".
    3. A aplicação vai mostrar o melhor petshop e o valor total.

## Exemplo solicitacao:

# Exemplo 1:

Entrada:


    Date: 2024-03-17
    Small Dogs: 2
    Large Dogs: 1

Saida:

    Best Petshop: Vai Rex
    Total Price: 80

# Exemplo 2:

Entrada:

    Date: 2024-03-17
    Small Dogs: 1
    Large Dogs: 2

Saida:

    Best Petshop: ChowChawgas
    Total Price: 135

# Exemplo 3:

Entrada:

    Date: 2024-03-17
    Small Dogs: 3
    Large Dogs: 3
Saida:

    Best Petshop: Meu Canino Feliz
    Total Price: 240

# Para eviar uma solicitacao direto para o servidor backend 
```
  GET http://localhost:3001/?date=2024-03-17&smallDogs=2&largeDogs=1
```
  Resposta de Exemplo:
```
  {
    "bestPetshop": "Vai Rex",
    "totalPrice": 80
  }
```


  
