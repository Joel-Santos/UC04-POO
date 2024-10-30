const {Produto} = require('./Produto');
const {Pedido} = require('./Pedido');

const produto01 = new Produto('Camiseta', 60);
const produto02 = new Produto('Bermuda', 600);
const produto03 = new Produto('Tênis', 5000);

const pedido = new Pedido();
pedido.adicionarProduto(produto01);
pedido.adicionarProduto(produto03);

pedido.mostrarPedido();
