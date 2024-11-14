const Cliente = require('./Cliente');

class ClientePF extends Cliente {
    #cpf;
    constructor(nome, dataNascimento, telefone, email, cpf) {
        super(nome, dataNascimento, telefone, email);
        this.#cpf = cpf;
    }

    get getCpf() {
        return this.#cpf;
    }

    set setCpf(cpf) {
        this.#cpf = cpf;
    }
}

module.exports = ClientePF;