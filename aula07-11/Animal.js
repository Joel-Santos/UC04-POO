class Animal{
    #nome;
    #idade;

    constructor(nome, idade){
        this.#nome = nome;
        this.#idade = idade;
        Object.freeze(this);
    }
    get getNome(){
        return this;
    }




}