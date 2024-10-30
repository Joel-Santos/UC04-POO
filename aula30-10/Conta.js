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