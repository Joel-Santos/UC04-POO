const {Animal} = require('./Animal')
const {Cachorro} = require('./Cachorro')

let a1 = new Animal('Joel');
let c1 = new Cachorro('Joelison','SRD')

a1.emitirSom();
c1.emitirSom();
console.log(c1.getNome);