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
                console.log('Tarefa pessoal adicionada com sucesso!');
                tarefaPessoal.getInfo();
            }else if(tipo.toLowerCase() === 'profissional'){
                const tarefaProfissional = new TarefasProfissionais(dadosTarefa.descricao, dadosTarefa.prioridade, dadosTarefa.data);
                tarefas.push(tarefaProfissional);
                console.log('Tarefa profissional adicionada com sucesso!');
                tarefaProfissional.getInfo();
            }else if(tipo.toLowerCase() === 'comum'){
                const tarefa = new Tarefa(dadosTarefa.descricao);
                tarefas.push(tarefa);
                console.log('Tarefa comum adicionada com sucesso!');
                tarefa.getInfo();
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
          const tarefasPessoais = tarefas.filter((tarefa) => tarefa instanceof TarefasPessoais);
          if(tarefasPessoais.length > 0){
            tarefasPessoais.forEach(tarefa =>{
                tarefa.getInfo();
            });
          }else{
            console.log('Nenhuma tarefa Pessoal');
          }
            
        }catch(error){
            console.error('Erro ao listar tarefas pessoais', error.message);
        }
    }
    listarTarefasProfissionais(){
        try{
            const tarefasProfissionais = tarefas.filter((tarefa) => tarefa instanceof TarefasProfissionais);
            if(tarefasProfissionais.length > 0){
              tarefasProfissionais.forEach(tarefa =>{
                  tarefa.getInfo();
              });
            }else{
              console.log('Nenhuma tarefa Profissional');
            }
              
          }catch(error){
              console.error('Erro ao listar tarefas profissionais', error.message);
          }

    }
}
module.exports = {TarefaController}