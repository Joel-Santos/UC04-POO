const {Animal} = require('./Animal')
const {Cachorro} = require('./Cachorro')

let a1 = new Animal('Joel', 14, 'marrom');
let c1 = new Cachorro('Joel', 14, 'marrom', 'SRD')

a1.emitirSom();
c1.emitirSom();