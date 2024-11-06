class Animal{
    #nome
    constructor(nome){
        this.#nome = nome; 
    }
    get getNome(){
        return this.#nome
    }
    set setNome(nome){
        this.#nome = nome;
    }
    emitirSom(){
        console.log(`${this.#nome} emite um som!`)
    }
    
}
module.exports= {Animal}