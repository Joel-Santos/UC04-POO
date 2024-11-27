# Herança em Programação Orientada a Objetos com JavaScript

Este projeto tem como objetivo ensinar o conceito de **herança** em Programação Orientada a Objetos (POO) utilizando JavaScript. Serão apresentados exemplos práticos e atividades para consolidar o aprendizado sobre como reutilizar e estender funcionalidades através da herança.

## Índice

1. [O que é Herança?](##o-que-é-herança)
2. [Estrutura do Projeto](##estrutura-do-projeto)
3. [Implementação das Classes](##implementação-das-classes)
    - [Classe Base: `Pessoa`](##classe-base-pessoa)
    - [Subclasse: `Aluno`](##subclasse-aluno)
    - [Subclasse: `Professor`](##subclasse-professor)
4. [Exemplo de Uso](##exemplo-de-uso)
5. [Polimorfismo](##polimorfismo)
6. [Atividades de Fixação](##atividades-de-fixação)
    - [Atividade 1: Classes `Veiculo` e `Carro`](##atividade-1-classes-veiculo-e-carro)
    - [Atividade 2: Sistema de Usuários com Diferentes Níveis de Acesso](##atividade-2-sistema-de-usuários-com-diferentes-níveis-de-acesso)
7. [Conclusão](##conclusão)

## O que é Herança?

**Herança** é um dos quatro pilares da Programação Orientada a Objetos (POO), junto com **Encapsulamento**, **Polimorfismo** e **Abstração**. Ela permite que uma classe (chamada de **subclasse** ou **classe derivada**) herde atributos e métodos de outra classe (chamada de **superclasse** ou **classe base**). Isso promove a **reutilização de código** e facilita a manutenção e expansão do sistema.

### Benefícios da Herança

- **Reutilização de Código**: Evita a duplicação de código ao permitir que subclasses compartilhem funcionalidades comuns.
- **Organização e Hierarquia**: Facilita a estruturação lógica das classes em uma hierarquia.
- **Facilidade de Manutenção**: Alterações na superclasse propagam-se para as subclasses, simplificando atualizações.

## Estrutura do Projeto

A seguir, apresentamos a estrutura de arquivos para o projeto que demonstra o conceito de herança:

```
/heranca-poo
│
├── Pessoa.js
├── Aluno.js
├── Professor.js
├── Usuario.js
├── UsuarioPadrao.js
├── UsuarioAdmin.js
├── index.js
└── package.json
```

## Implementação das Classes

### Classe Base: `Pessoa`

A classe `Pessoa` é a superclasse que contém atributos e métodos comuns a todas as pessoas.

```javascript
// Pessoa.js
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
  }
}

module.exports = Pessoa;
```

### Subclasse: `Aluno`

A classe `Aluno` herda de `Pessoa` e adiciona o atributo `curso` e o método `estudar`.

```javascript
// Aluno.js
const Pessoa = require('./Pessoa');

class Aluno extends Pessoa {
  constructor(nome, idade, curso) {
    super(nome, idade); // Chama o construtor da superclasse
    this.curso = curso;
  }

  estudar() {
    return `${this.nome} está estudando ${this.curso}.`;
  }
}

module.exports = Aluno;
```

### Subclasse: `Professor`

A classe `Professor` herda de `Pessoa` e adiciona o atributo `disciplina` e o método `ensinar`.

```javascript
// Professor.js
const Pessoa = require('./Pessoa');

class Professor extends Pessoa {
  constructor(nome, idade, disciplina) {
    super(nome, idade); // Chama o construtor da superclasse
    this.disciplina = disciplina;
  }

  ensinar() {
    return `${this.nome} está ensinando ${this.disciplina}.`;
  }
}

module.exports = Professor;
```

### Classe Base: `Usuario`

A classe `Usuario` é a superclasse para diferentes tipos de usuários no sistema.

```javascript
// Usuario.js
class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }

  acessarSistema() {
    return `${this.nome} acessou o sistema.`;
  }
}

module.exports = Usuario;
```

### Subclasse: `UsuarioPadrao`

A classe `UsuarioPadrao` herda de `Usuario` e adiciona o método `verPerfil`.

```javascript
// UsuarioPadrao.js
const Usuario = require('./Usuario');

class UsuarioPadrao extends Usuario {
  verPerfil() {
    return `Perfil de ${this.nome}: Email - ${this.email}`;
  }
}

module.exports = UsuarioPadrao;
```

### Subclasse: `UsuarioAdmin`

A classe `UsuarioAdmin` herda de `Usuario` e adiciona o método `excluirUsuario`.

```javascript
// UsuarioAdmin.js
const Usuario = require('./Usuario');

class UsuarioAdmin extends Usuario {
  excluirUsuario(nomeUsuario) {
    return `Usuário ${nomeUsuario} foi excluído pelo administrador ${this.nome}.`;
  }
}

module.exports = UsuarioAdmin;
```

## Exemplo de Uso

No arquivo `index.js`, vamos instanciar as classes e demonstrar a herança e o polimorfismo.

```javascript
// index.js
const Aluno = require('./Aluno');
const Professor = require('./Professor');
const UsuarioPadrao = require('./UsuarioPadrao');
const UsuarioAdmin = require('./UsuarioAdmin');

// Exemplo com Herança: Pessoa, Aluno e Professor
const aluno1 = new Aluno('João', 20, 'Matemática');
console.log(aluno1.apresentar()); // "Olá, meu nome é João e eu tenho 20 anos."
console.log(aluno1.estudar());    // "João está estudando Matemática."

const professor1 = new Professor('Carlos', 40, 'Física');
console.log(professor1.apresentar()); // "Olá, meu nome é Carlos e eu tenho 40 anos."
console.log(professor1.ensinar());    // "Carlos está ensinando Física."

// Exemplo com Herança e Polimorfismo: Usuario, UsuarioPadrao e UsuarioAdmin
const usuarioComum = new UsuarioPadrao('Maria', 'maria@email.com');
console.log(usuarioComum.acessarSistema()); // "Maria acessou o sistema."
console.log(usuarioComum.verPerfil());      // "Perfil de Maria: Email - maria@email.com"

const admin = new UsuarioAdmin('Pedro', 'pedro@admin.com');
console.log(admin.acessarSistema());        // "Pedro acessou o sistema."
console.log(admin.excluirUsuario('Maria')); // "Usuário Maria foi excluído pelo administrador Pedro."
```

### Saída Esperada

```
Olá, meu nome é João e eu tenho 20 anos.
João está estudando Matemática.
Olá, meu nome é Carlos e eu tenho 40 anos.
Carlos está ensinando Física.
Maria acessou o sistema.
Perfil de Maria: Email - maria@email.com
Pedro acessou o sistema.
Usuário Maria foi excluído pelo administrador Pedro.
```

## Polimorfismo

**Polimorfismo** é um conceito que permite que métodos com o mesmo nome se comportem de maneiras diferentes em classes diferentes. No contexto da herança, ele permite que uma subclasse sobrescreva métodos da superclasse para fornecer implementações específicas.

### Como Implementar Polimorfismo

No exemplo acima, o método `acessarSistema()` é definido na superclasse `Usuario` e pode ser sobrescrito nas subclasses para adaptar o comportamento conforme o tipo de usuário.

#### Sobrescrevendo o Método `acessarSistema()`

Vamos modificar as subclasses `UsuarioPadrao` e `UsuarioAdmin` para sobrescrever o método `acessarSistema()`.

```javascript
// UsuarioPadrao.js
const Usuario = require('./Usuario');

class UsuarioPadrao extends Usuario {
  acessarSistema() {
    return `${this.nome} (Usuário Padrão) acessou o sistema com permissões limitadas.`;
  }

  verPerfil() {
    return `Perfil de ${this.nome}: Email - ${this.email}`;
  }
}

module.exports = UsuarioPadrao;
```

```javascript
// UsuarioAdmin.js
const Usuario = require('./Usuario');

class UsuarioAdmin extends Usuario {
  acessarSistema() {
    return `${this.nome} (Administrador) acessou o sistema com permissões administrativas.`;
  }

  excluirUsuario(nomeUsuario) {
    return `Usuário ${nomeUsuario} foi excluído pelo administrador ${this.nome}.`;
  }
}

module.exports = UsuarioAdmin;
```

#### Atualizando o `index.js`

```javascript
// index.js
const UsuarioPadrao = require('./UsuarioPadrao');
const UsuarioAdmin = require('./UsuarioAdmin');

const usuarioComum = new UsuarioPadrao('Maria', 'maria@email.com');
console.log(usuarioComum.acessarSistema()); // "Maria (Usuário Padrão) acessou o sistema com permissões limitadas."
console.log(usuarioComum.verPerfil());      // "Perfil de Maria: Email - maria@email.com"

const admin = new UsuarioAdmin('Pedro', 'pedro@admin.com');
console.log(admin.acessarSistema());        // "Pedro (Administrador) acessou o sistema com permissões administrativas."
console.log(admin.excluirUsuario('Maria')); // "Usuário Maria foi excluído pelo administrador Pedro."
```

### Saída Atualizada

```
Maria (Usuário Padrão) acessou o sistema com permissões limitadas.
Perfil de Maria: Email - maria@email.com
Pedro (Administrador) acessou o sistema com permissões administrativas.
Usuário Maria foi excluído pelo administrador Pedro.
```

## Atividades de Fixação

### Atividade 1: Classes `Veiculo` e `Carro`

**Objetivo**: Reforçar o conceito de herança criando uma hierarquia de classes relacionada a veículos.

#### Instruções

1. **Crie a Classe Base `Veiculo`**:
    - **Atributos**:
        - `marca` (string)
        - `modelo` (string)
    - **Métodos**:
        - `mover()`: Retorna uma mensagem indicando que o veículo está se movendo.

2. **Crie a Subclasse `Carro` que Herda de `Veiculo`**:
    - **Atributos Adicionais**:
        - `numPortas` (número)
    - **Métodos Adicionais**:
        - `abrirPorta()`: Retorna uma mensagem indicando que uma porta foi aberta.
    - **Sobrescreva o Método `mover()`** para especificar que é um carro que está se movendo.

3. **Teste as Classes** no arquivo `index.js`.

#### Implementação Esperada

```javascript
// Veiculo.js
class Veiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  mover() {
    return `O veículo ${this.marca} ${this.modelo} está se movendo.`;
  }
}

module.exports = Veiculo;
```

```javascript
// Carro.js
const Veiculo = require('./Veiculo');

class Carro extends Veiculo {
  constructor(marca, modelo, numPortas) {
    super(marca, modelo); // Chama o construtor da superclasse
    this.numPortas = numPortas;
  }

  mover() {
    return `O carro ${this.marca} ${this.modelo} está acelerando.`;
  }

  abrirPorta(porta) {
    return `Porta ${porta} do ${this.modelo} está aberta.`;
  }
}

module.exports = Carro;
```

```javascript
// index.js
const Carro = require('./Carro');

const meuCarro = new Carro('Toyota', 'Corolla', 4);
console.log(meuCarro.mover());             // "O carro Toyota Corolla está acelerando."
console.log(meuCarro.abrirPorta(2));       // "Porta 2 do Corolla está aberta."
console.log(meuCarro.marca);               // "Toyota"
console.log(meuCarro.modelo);              // "Corolla"
console.log(meuCarro.numPortas);           // 4
```

#### Saída Esperada

```
O carro Toyota Corolla está acelerando.
Porta 2 do Corolla está aberta.
Toyota
Corolla
4
```

### Atividade 2: Sistema de Usuários com Diferentes Níveis de Acesso

**Objetivo**: Aplicar herança e polimorfismo criando um sistema que gerencia diferentes tipos de usuários com permissões variadas.

#### Instruções

1. **Crie a Classe Base `Usuario`**:
    - **Atributos**:
        - `nome` (string)
        - `email` (string)
    - **Métodos**:
        - `acessarSistema()`: Retorna uma mensagem genérica de acesso.

2. **Crie a Subclasse `UsuarioPadrao` que Herda de `Usuario`**:
    - **Métodos Adicionais**:
        - `verPerfil()`: Retorna uma mensagem com as informações do perfil.
    - **Sobrescreva o Método `acessarSistema()`** para especificar que é um usuário padrão.

3. **Crie a Subclasse `UsuarioAdmin` que Herda de `Usuario`**:
    - **Métodos Adicionais**:
        - `excluirUsuario(nomeUsuario)`: Retorna uma mensagem indicando que o administrador excluiu um usuário.
    - **Sobrescreva o Método `acessarSistema()`** para especificar que é um administrador com permissões extras.

4. **Teste as Classes** no arquivo `index.js`.

#### Implementação Esperada

```javascript
// Usuario.js
class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }

  acessarSistema() {
    return `${this.nome} acessou o sistema.`;
  }
}

module.exports = Usuario;
```

```javascript
// UsuarioPadrao.js
const Usuario = require('./Usuario');

class UsuarioPadrao extends Usuario {
  acessarSistema() {
    return `${this.nome} (Usuário Padrão) acessou o sistema com permissões limitadas.`;
  }

  verPerfil() {
    return `Perfil de ${this.nome}: Email - ${this.email}`;
  }
}

module.exports = UsuarioPadrao;
```

```javascript
// UsuarioAdmin.js
const Usuario = require('./Usuario');

class UsuarioAdmin extends Usuario {
  acessarSistema() {
    return `${this.nome} (Administrador) acessou o sistema com permissões administrativas.`;
  }

  excluirUsuario(nomeUsuario) {
    return `Usuário ${nomeUsuario} foi excluído pelo administrador ${this.nome}.`;
  }
}

module.exports = UsuarioAdmin;
```

```javascript
// index.js
const UsuarioPadrao = require('./UsuarioPadrao');
const UsuarioAdmin = require('./UsuarioAdmin');

// Testando UsuarioPadrao
const usuarioComum = new UsuarioPadrao('Maria', 'maria@email.com');
console.log(usuarioComum.acessarSistema()); // "Maria (Usuário Padrão) acessou o sistema com permissões limitadas."
console.log(usuarioComum.verPerfil());      // "Perfil de Maria: Email - maria@email.com"

// Testando UsuarioAdmin
const admin = new UsuarioAdmin('Pedro', 'pedro@admin.com');
console.log(admin.acessarSistema());        // "Pedro (Administrador) acessou o sistema com permissões administrativas."
console.log(admin.excluirUsuario('Maria')); // "Usuário Maria foi excluído pelo administrador Pedro."
```

#### Saída Esperada

```
Maria (Usuário Padrão) acessou o sistema com permissões limitadas.
Perfil de Maria: Email - maria@email.com
Pedro (Administrador) acessou o sistema com permissões administrativas.
Usuário Maria foi excluído pelo administrador Pedro.
```

## Conclusão

A herança é um conceito fundamental na Programação Orientada a Objetos que permite a criação de classes hierárquicas e a reutilização de código de maneira eficiente. Com a herança, podemos construir sistemas mais organizados, flexíveis e de fácil manutenção.

### Pontos-Chave

- **Superclasse e Subclasse**: A superclasse fornece atributos e métodos comuns, enquanto a subclasse herda e pode adicionar ou sobrescrever funcionalidades.
- **Reutilização de Código**: Evita a duplicação de código, tornando o desenvolvimento mais eficiente.
- **Polimorfismo**: Permite que métodos com o mesmo nome tenham comportamentos diferentes em classes diferentes, aumentando a flexibilidade do código.

### Próximos Passos

- **Explorar Polimorfismo**: Continuar estudando como o polimorfismo complementa a herança para criar sistemas ainda mais robustos.
- **Praticar com Mais Exemplos**: Implementar outras hierarquias de classes para solidificar o entendimento.
- **Integrar com Encapsulamento**: Combinar herança com encapsulamento para criar classes bem estruturadas e seguras.

---

Esperamos que este guia ajude a entender e aplicar o conceito de herança em seus projetos de Programação Orientada a Objetos com JavaScript. Bons estudos e codificação!

```

---

### Como Utilizar este `README.md`

1. **Criar a Estrutura do Projeto**:
    - Abra o **Prompt de Comando** ou **PowerShell** no Windows.
    - Navegue até o diretório onde deseja criar o projeto.
    - Execute os seguintes comandos:

        ```cmd
        mkdir heranca-poo
        cd heranca-poo
        npm init -y
        ```

2. **Criar os Arquivos Necessários**:
    - Utilize um editor de texto (como **Visual Studio Code**, **Notepad++** ou **Sublime Text**) para criar os arquivos listados na estrutura do projeto (`Pessoa.js`, `Aluno.js`, `Professor.js`, etc.) e copie o código correspondente em cada arquivo.

3. **Executar o Código**:
    - No terminal, dentro da pasta `heranca-poo`, execute:

        ```cmd
        node index.js
        ```

    - Observe a saída no console conforme os exemplos apresentados.

4. **Realizar as Atividades de Fixação**:
    - Siga as instruções das atividades 1 e 2 para praticar a criação de classes com herança e polimorfismo.
    - Teste os códigos e explore diferentes cenários para fortalecer o entendimento.



