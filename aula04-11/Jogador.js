class Jogador{
    #nome;
    #aposta;
    constructor(nome, aposta){
        this.#nome = nome;
        this.#aposta = aposta;
        Object.freeze(this);
    }
    get getNome(){
        return this.#nome;
    }
    set setNome(nome){
        this.#nome = nome;
    }
    get getAposta(){
        return this.#aposta;
    }
    set setAposta(aposta){
        this.#aposta = aposta;
    }
    aprentarDados(){
        console.log(`Nome do jogador: ${this.getNome}, Aposta: ${this.getAposta}`);
    }
}
module.exports = {Jogador}
// let jogador01 = new Jogador('Jorel', 4);
// // console.log(jogador01.getNome);
// jogador01.aprentarDados();