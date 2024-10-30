const {Produto} = require('./Produto');

class Pedido{
    #produtos
    constructor(){
        this.#produtos = [];
        Object.freeze(this)

    }
    adicionarProduto(novoProduto){
        if(novoProduto instanceof Produto){
            this.#produtos.push(novoProduto)
        }else{
            console.log('Somente objetos do tipo Produto podem ser adicionados!')
        }
    }
    mostrarPedido(){
        console.log('Resumo do Pedido:')
        this.#produtos.forEach(produto =>{
            console.log(produto.getInfoProduto());
        })
    }
}

module.exports = {Pedido};