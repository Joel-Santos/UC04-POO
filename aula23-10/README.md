
# Aula 01: Introdução à Programação Orientada a Objetos em JavaScript

## Descrição

Esta aula aborda os conceitos básicos da **Programação Orientada a Objetos (POO)** em JavaScript, com foco na criação de **classes**, **atributos** e **métodos**. O objetivo é demonstrar como criar e manipular objetos em JavaScript utilizando os conceitos fundamentais de POO.

### Tópicos abordados:
- Criação de uma classe
- Definição e inicialização de atributos
- Métodos de acesso (getters)
- Métodos de modificação (setters)
- Instanciação de objetos

## Estrutura do Código

Neste exemplo, criamos uma classe `Pessoa` com os seguintes atributos:
- **nome**: o nome da pessoa
- **rg**: o registro geral da pessoa
- **cpf**: o CPF da pessoa
- **idade**: a idade da pessoa
- **sexo**: o sexo da pessoa
- **nacionalidade**: a nacionalidade da pessoa
- **estadoCivil**: o estado civil da pessoa

### Métodos

A classe `Pessoa` possui métodos que permitem acessar e modificar os atributos:
- **getNome()**: retorna o nome da pessoa.
- **getRg()**: retorna o RG da pessoa.
- **getCpf()**: retorna o CPF da pessoa.
- **getIdade()**: retorna a idade da pessoa.
- **getSexo()**: retorna o sexo da pessoa.
- **getNacionalidade()**: retorna a nacionalidade da pessoa.
- **getEstadoCivil()**: retorna o estado civil da pessoa.
- **setNome(nome)**: altera o nome da pessoa.
- **exibirDados()**: exibe todos os dados da pessoa de forma organizada no console.

### Exemplo de Instanciação e Manipulação de Objetos

No código de exemplo, criamos uma instância de `Pessoa` chamada `pessoa01`, com os seguintes dados:

```javascript
let pessoa01 = new Pessoa("Joel", 8855, 559847, 18, "Indefinido", "Brasileira", "Sei lá");
```

Após a criação, podemos acessar e modificar os atributos utilizando os métodos definidos. Por exemplo, alteramos o nome da pessoa e exibimos os dados atualizados:

```javascript
pessoa01.setNome("Joelma");
pessoa01.exibirDados();
```

A saída esperada será:

```
Dados Pessoais:
Nome: Joelma,
RG: 8855,
CPF: 559847,
Idade: 18,
Sexo: Indefinido,
Nacionalidade: Brasileira,
Estado Civil: Sei lá
```

## Como Rodar o Código

Para rodar o código, siga os seguintes passos:

1. Salve o arquivo como `aula01.js`.
2. Abra o terminal ou prompt de comando.
3. Navegue até o diretório onde o arquivo foi salvo.
4. Execute o seguinte comando para rodar o arquivo:

   ```bash
   node aula01.js
   ```

### Pré-requisitos

- **Node.js** instalado na sua máquina para rodar JavaScript fora do navegador. Você pode baixar e instalar o Node.js [aqui](https://nodejs.org/).

## Tarefa da Aula

Você foi contratado para desenvolver um sistema de gerenciamento de jogos de videogame. A ideia é criar uma classe que represente um jogo, com atributos que armazenem informações sobre o título, o gênero e o ano de lançamento do jogo. Depois, você deverá criar instâncias dessa classe para representar diferentes jogos e exibir as informações no console.

### Tarefas:

1. Definir a Classe e seus atributos.
2. Criar Instâncias da Classe.
3. Crie pelo menos três objetos diferentes da classe Jogo.
4. Exibir Informações de cada jogo no console.


