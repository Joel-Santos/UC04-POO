const {Animal} = require('./Animal');

class Cachorro extends Animal{
    #raca
    constructor(nome,raca){
        super(nome) // NESSA LINHA ESTOU ACIONANDO O MÉTODO CONSTRUTOR DA MINHA CLASSE PAI
        this.#raca = raca;
    }
    emitirSom(){// novo comportamento de cachoro
        console.log(`Meu nome é ${this.getNome}, sou da Raça ${this.#raca} e emito um som au au!`);
    }
}
module.exports = {Cachorro}