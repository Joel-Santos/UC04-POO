# Projeto de Pedido e Produto com Encapsulamento

Este projeto em Node.js simula um sistema de **pedido e produtos**, demonstrando conceitos de **encapsulamento** em Orientação a Objetos. O usuário pode inserir produtos em um pedido, visualizar o resumo e o valor total dos produtos adicionados.

## Pré-requisitos

Para executar este projeto, é necessário ter o **Node.js** instalado. Se não tiver o Node.js, faça o download e instale-o a partir de [nodejs.org](https://nodejs.org/).

## Passo a Passo para Configuração do Projeto

### 1. Configurando a Estrutura do Projeto

1. **Abra o terminal** (Prompt de Comando ou PowerShell).
2. Navegue até o local onde deseja criar a pasta do projeto.
3. Execute os seguintes comandos para criar a pasta e inicializar o projeto Node.js:

    ```cmd
    mkdir projeto
    cd projeto
    npm init -y
    ```

   O comando `npm init -y` cria um arquivo `package.json` com as configurações iniciais do projeto.

4. Em seguida, crie os arquivos necessários para o projeto:

    ```cmd
    echo.> Produto.js
    echo.> Pedido.js
    echo.> index.js
    ```

### 2. Instalando a Biblioteca `prompt-sync`

Para capturar a entrada do usuário no terminal, usaremos a biblioteca `prompt-sync`. Para instalá-la, execute o seguinte comando na pasta do projeto:

```cmd
npm install prompt-sync
```

### 3. Estrutura de Arquivos

Após os passos anteriores, a estrutura do projeto será a seguinte:

```
/projeto
│
├── Produto.js      # Classe Produto com encapsulamento
├── Pedido.js       # Classe Pedido com encapsulamento e lista de produtos
├── index.js        # Arquivo principal para executar o projeto
└── package.json    # Configuração do projeto Node.js
```

### 4. Implementação das Classes e Lógica do Sistema

#### `Produto.js`

A classe `Produto` representa um produto com `nome` e `preco`. Esses atributos são encapsulados com `#` para que sejam acessíveis apenas dentro da classe.

```javascript
// Produto.js
class Produto {
  #nome;
  #preco;

  constructor(nome, preco) {
    this.#nome = nome;
    this.#preco = preco;
  }

  get nome() {
    return this.#nome;
  }

  get preco() {
    return this.#preco;
  }

  getInfoProduto() {
    return `${this.nome} - R$ ${this.preco.toFixed(2)}`;
  }
}

module.exports = Produto;
```

#### `Pedido.js`

A classe `Pedido` gerencia uma lista de produtos, com métodos para adicionar produtos, calcular o valor total e exibir um resumo do pedido.

```javascript
// Pedido.js
const Produto = require('./Produto');

class Pedido {
  #produtos;

  constructor() {
    this.#produtos = [];
  }

  adicionarProduto(produto) {
    if (produto instanceof Produto) {
      this.#produtos.push(produto);
    } else {
      console.log("Somente objetos da classe Produto podem ser adicionados.");
    }
  }

  calcularTotal() {
    return this.#produtos.reduce((total, produto) => total + produto.preco, 0);
  }

  mostrarPedido() {
    console.log("Resumo do Pedido:");
    this.#produtos.forEach(produto => {
      console.log(produto.getInfoProduto());
    });
    console.log(`Total: R$ ${this.calcularTotal().toFixed(2)}`);
  }
}

module.exports = Pedido;
```

#### `index.js`

Este é o arquivo principal, que utiliza `prompt-sync` para solicitar informações do usuário e interage com as classes `Produto` e `Pedido`.

```javascript
// index.js
const Produto = require('./Produto');
const Pedido = require('./Pedido');
const prompt = require('prompt-sync')();

function adicionarProdutosAoPedido() {
  const pedido = new Pedido();

  while (true) {
    const nome = prompt("Digite o nome do produto (ou 'sair' para finalizar): ");
    if (nome.toLowerCase() === 'sair') break;

    const preco = parseFloat(prompt("Digite o preço do produto: "));
    if (isNaN(preco) || preco < 0) {
      console.log("Preço inválido. Tente novamente.");
      continue;
    }

    const produto = new Produto(nome, preco);
    pedido.adicionarProduto(produto);
    console.log(`Produto "${nome}" adicionado com sucesso!`);
  }

  pedido.mostrarPedido();
}

adicionarProdutosAoPedido();
```

## Executando o Projeto

Para rodar o projeto e interagir com o sistema de pedido e produtos, execute o seguinte comando no terminal:

```cmd
node index.js
```

## Funcionalidade

1. **Adição de Produtos**: Ao executar o programa, o usuário poderá inserir o nome e o preço de cada produto.
2. **Visualização do Pedido**: Ao digitar `sair`, o programa exibirá um resumo com todos os produtos adicionados e o valor total.

## Exemplo de Saída

Ao rodar o projeto, a saída será semelhante a:

```
Digite o nome do produto (ou 'sair' para finalizar): Camiseta
Digite o preço do produto: 29.99
Produto "Camiseta" adicionado com sucesso!

Digite o nome do produto (ou 'sair' para finalizar): Calça Jeans
Digite o preço do produto: 89.90
Produto "Calça Jeans" adicionado com sucesso!

Digite o nome do produto (ou 'sair' para finalizar): sair
Resumo do Pedido:
Camiseta - R$ 29.99
Calça Jeans - R$ 89.90
Total: R$ 119.89
```

---

