const {Animal} = require('./Animal');

class Cachorro extends Animal{
    #raca
    constructor(nome, idade, pelo, raca){
        super(nome, idade, pelo)
        this.#raca = raca;
    }

    emitirSom(){
        console.log(`${this.getNome} Faz au au!`)
    }
}
module.exports = {Cachorro}