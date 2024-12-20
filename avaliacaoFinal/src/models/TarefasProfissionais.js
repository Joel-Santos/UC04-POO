const {Tarefa} = require('./Tarefa');

class TarefasProfissionais extends Tarefa{
    #prioridade
    #data

    constructor(descricao, prioridade, data){
        super(descricao);
        this.#prioridade = prioridade;
        this.#data = data;
    }

    get getPrioridade(){
        return this.#prioridade;
    }
    set setPrioridade(prioridade){
        this.#prioridade = prioridade;
    }

    get getData(){
        return this.#data 
    }
    set setData(novaData){
        this.#data = novaData
    }
    getInfo(){
        console.log('=== Tarefas Profissionais ===')
        console.log(`Descrição: ${this.getDescricao} - Data: ${this.getData} - Prioridade: ${this.getPrioridade} - Status: ${this.getStatus}`);
    }


}
module.exports = {TarefasProfissionais};