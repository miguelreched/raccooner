class Mapache {
    constructor (){
    this.raccoon = document.createElement("img");
    this.raccoon.src = "/images/player-cross.png"
    gameBox.append(this.raccoon);
// tamaño
    this.w = 1;
    this.h = 1;
// posicion 1
    this.x = 275;
    this.y = 350;
// DOM pos
    this.raccoon.style.width = `${this.w}px!important`
    this.raccoon.style.height = `${this.h}px!important`
    this.raccoon.style.position = "absolute";
    this.raccoon.style.top = `${this.y}px`
    this.raccoon.style.left = `${this.x}px`
// salto raccoon
    this.saltoMap = 20;
    this.giroMapLeft = 20;
    this.giroMapRight = 20;
    }
    jump = () => {

        this.y -= this.saltoMap
        this.node.style.top = `${this.y}px`
}

movLeft = () =>{
    if (this.x > this.giroMapLeft){
        this.x -= this.giroMapLeft
    }
}

movRight = () =>{
    if (this.x < this.giroMapRight){
        this.x -= this.giroMapRight
    }
}
}