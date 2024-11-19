class  Tarefa{
    #descricao
    #status

    constructor(descricao){
        this.#descricao = descricao;
        this.#status = 'Não finalizada.';
        Object.freeze(this);
    }

    get getDescricao(){
        return this.#descricao;
    }
    set setDescricao(novaDescricao){
        this.#descricao = novaDescricao;
    }

    get getStatus(){
        return this.#status;
    }

    finalizarTarefa(){
        this.#status = 'Finalizada.'
    }
    getInfo(){
        console.log(`Descrição: ${this.getDescricao} - Status ${this.getStatus}`);
    }
}
module.exports = {Tarefa};