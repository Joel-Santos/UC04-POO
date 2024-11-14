const { databaseNotebook } = require('../config/databaseNotebook');
const { Notebook } = require('../models/Notebook');

class ControllerNotebook{
    adicionarNotebook(numeroDeSerie, marca, modelo, cor, preco){
        try {
            const novoNotebook = new Notebook(numeroDeSerie, marca, modelo, cor, preco);
            databaseNotebook.push(novoNotebook);
            console.log("Notebook adicionado com sucesso!");
            return novoNotebook
        } catch (error) {
            console.error("Erro ao adicionar notebook", error.message);
        }
    }
    listarNotebooks(){
        try {
            const notebooks = databaseNotebook.map( notebook => ({
                numeroDeSerie: notebook.getNumeroDeSerie,
                marca: notebook.marca,
                modelo: notebook.modelo,
                cor: notebook.cor,
                preco: notebook.getPreco
            }))
            console.table(notebooks);
        } catch (error) {
            console.error("Erro ao listar notebooks", error.message);
        }
    }
    buscarNotebook(numeroDeSerie){
        try{
            const notebook =  databaseNotebook.find(n=> n.getNumeroDeSerie === numeroDeSerie);


            if(!notebook){
                console.log("Notebook não encontrado.", numeroDeSerie);
                return;
            }
            console.log('Notebook encontrado:');
            console.table([notebook]);
            return notebook;
        }catch(error){
            console.error("Erro ao buscar notebook:", error.message);
        }
    }

    editarNotebook(numeroDeSerie, novaMarca, novoModelo, novaCor, novoPreco){
        try {
            const notebook = this.buscarNotebook(numeroDeSerie);
            if(notebook){
                notebook.marca = novaMarca;
                notebook.modelo = novoModelo;
                notebook.cor = novaCor;
                notebook.setPreco = novoPreco;
                return notebook;
            }
        } catch (error) {
            console.error("Erro ao atualizar notebook:", error.message);
        }
    }
    excluirNotebook(numeroDeSerie){
        try {
            const notebook = this.buscarNotebook(numeroDeSerie);
            if(notebook){
                const index = databaseNotebook.findIndex(n => n.getNumeroSerie === numeroDeSerie);
                const notebookRemovido = databaseNotebook.splice(index, 1);
                console.log("Notebook removido com sucesso!");
                return notebookRemovido
            }
        } catch (error) {
            console.error("Erro ao remover o notebook", error.message);
        }
    }
    excluirTodosNotebook(){
        try {
           if(databaseNotebook.length>0){
                databaseNotebook.length = 0;
           }
        } catch (error) {
            console.error("Erro ao excluir o banco.", error.message);
        }
    }
}

module.exports = { ControllerNotebook };

