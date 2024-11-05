class Dado{
    #face;
    constructor(){
        this.#face = Math.floor(Math.random()*6 + 1)
        Object.freeze(this);
    }
    get getFace(){
        return this.#face;
    }

    set setFace(face){
        this.#face = face;
    }

}
module.exports = {Dado}
// let dado01 = new Dado();
// console.log(dado01.getFace)