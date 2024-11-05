class Animal{

    #nome
    #idade
    #corPelo

    constructor(nome, idade, pelo){
        this.#nome = nome;
        this.#idade = idade;
        this.#corPelo = pelo;
    }
    
    get getNome(){
        return this.#nome
    }

    emitirSom(){
        console.log(`${this.#nome} emite um som!`)
    }

}
module.exports= {Animal}