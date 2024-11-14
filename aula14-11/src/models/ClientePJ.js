const Cliente = require('./Cliente');

class ClientePJ extends Cliente {
    #cnpj;
    constructor(nome, dataNascimento, telefone, email, cnpj) {
        super(nome, dataNascimento, telefone, email);
        this.#cnpj = cnpj;
    }

    get getcnpj() {
        return this.#cnpj;
    }

    set setcnpj(cnpj) {
        this.#cnpj = cnpj;
    }
}

module.exports = ClientePJ;