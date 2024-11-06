class Conta {
    #saldo = 0;
    #titular;
    constructor(titular) {
        this.#titular = titular;
        Object.freeze(this);
    }
    get getSaldo() {
        return this.#saldo;
    }
    set setSaldo(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        } else {
            console.log('Deposito não realizado');
        }
    }
    get getTitular() {
        return this.#titular;
    }
    set setTitular(titular) {
        this.#titular = titular;
    }
    sacar(valor) {
        if (valor > this.getSaldo) {
            console.log('Saldo insuficiente');
        } else {
            this.#saldo -= valor;
            console.log(`${valor} sacado. Saldo restante: ${this.getSaldo}`);
        }
    }

}
module.exports = { Conta };