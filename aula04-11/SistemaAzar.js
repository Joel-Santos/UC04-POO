const {Dado} = require('./Dado');
const {Jogador} = require('./Jogador');
class SistemaAzar{
    #dado;
    #jogador;
    constructor(dado, jogador){
        if(dado instanceof Dado && jogador instanceof Jogador){//verificando se os paramêtros são do mesmo tipo (Jogador e Dado)
            this.#dado = dado;
            this.#jogador = jogador;
        }else{
            console.log('Os dados fornecidos não são do Tipo Jogador ou Dado');
        }
        Object.freeze(this); //Bloqueando a criação de novos atributos 
    }
    get getDado(){
        return this.#dado;
    }
    set setDado(dado){
        this.#dado = dado;
    }
    get getJogador(){
        return this.#jogador;
    }
    set setJogador(jogador){
        this.#jogador = jogador;
    }
    verificarGanhador(){
            if(this.#dado.getFace === this.#jogador.getAposta){
            console.log(`Parabéns Você ganhou! Resultado do SistemaAzar: ${this.#dado.getFace}`);
            this.#jogador.aprentarDados();
        }else{
            console.log(`Que Pena! Aposte novamente. Resultado do SistemaAzar: ${this.#dado.getFace}`);
            this.#jogador.aprentarDados();    
        }
    }

}
module.exports = {SistemaAzar}
