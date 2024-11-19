const {Tarefa} = require('../models/Tarefa');
const {TarefasPessoais} = require('../models/TarefasPessoais');
const {TarefasProfissionais} = require('../models/TarefasProfissionais');
const {tarefas} = require('../config/banco');

class TarefaController {

    adicionarTarefa(dadosTarefa, tipo){
        try{
            if(tipo.toLowerCase() === 'pessoal'){
                const tarefaPessoal = new TarefasPessoais(dadosTarefa.descricao, dadosTarefa.prioridade, dadosTarefa.data);
                tarefas.push(tarefaPessoal);
            }else if(tipo.toLowerCase() === 'profissional'){
                const tarefaProfissional = new TarefasProfissionais(dadosTarefa.descricao, dadosTarefa.prioridade, dadosTarefa.data);
                tarefas.push(tarefaProfissional);
            }else if(tipo.toLowerCase() === 'comum'){
                const tarefa = new TarefasProfissionais(dadosTarefa.descricao);
                tarefas.push(tarefa);
            }else{
                console.log('Não foi possivel criar a tarefa.')
            }
        }catch(error){
            console.error('Erro ao criar tarefa', error.message);
        }      
    }
    listarTarefas(){
        try{
            if(tarefas.length>0){
                tarefas.forEach(tarefa =>{
                    tarefa.getInfo();
                })
            }else{
                console.log('Nenhuma tarefa registrada.');
            }
        }catch(error){
            console.error('Erro ao listar as tarefas.')
        }
    }
    listarTarefasPessoais(){
        try{
            
        }catch(error){

        }
    }
}
module.exports = {TarefaController}