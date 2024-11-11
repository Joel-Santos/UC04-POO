class Pessoa{
    #nome
    constructor(nome){
        this.#nome = nome
    }

    getNome(){
        return this.#nome;
    }
}
module.exports ={Pessoa}

const joao = new Pessoa('João');
console.log(joao.getNome());