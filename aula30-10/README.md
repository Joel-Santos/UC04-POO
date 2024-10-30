# Encapsulamento - Aula de Programação Orientada a Objetos

Este repositório contém material e exemplos para a aula sobre o conceito de **Encapsulamento**, um dos pilares da Programação Orientada a Objetos (POO).

## O que é Encapsulamento?

Encapsulamento é uma técnica utilizada em POO para proteger os dados internos de uma classe, permitindo que apenas métodos específicos possam acessar ou modificar esses dados. Isso melhora a segurança, a organização e a manutenção do código.

### Objetivos do Encapsulamento

- **Proteger dados internos** de acesso direto
- **Permitir controle de acesso** aos dados, garantindo que sejam modificados apenas por meio de métodos definidos
- **Manter a integridade dos dados** e a consistência das operações da classe

## Benefícios do Encapsulamento

1. **Segurança**: Protege os dados de modificações indevidas.
2. **Manutenção**: Facilita a atualização do código sem impactar outras partes do sistema.
3. **Controle de Acesso**: Controla como os dados são manipulados com métodos específicos (getters e setters).
4. **Reutilização de Código**: Objetos encapsulados são mais independentes e fáceis de reutilizar em outros projetos.

## Exemplo Prático

Imagine uma classe `ContaBancaria` que possui uma propriedade `saldo`. Em vez de permitir acesso direto ao `saldo`, a classe disponibiliza métodos para depositar e sacar valores, garantindo que o `saldo` seja atualizado corretamente.

```javascript
class ContaBancaria {
  #saldo; // Propriedade privada

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    }
  }

  sacar(valor) {
    if (valor > 0 && valor <= this.#saldo) {
      this.#saldo -= valor;
    }
  }

  getSaldo() {
    return this.#saldo;
  }
}

const conta = new ContaBancaria(1000);
conta.depositar(500);
console.log(conta.getSaldo()); // 1500
conta.sacar(200);
console.log(conta.saldo); // undefined
