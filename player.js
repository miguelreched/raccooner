class Mapache {
  constructor() {
    this.isOnTronco = false;
    this.node = document.createElement("img");
    this.node.src = "./images/player-cross.png";
    gameBox.append(this.node);
    // tamaño
    this.w = 40;
    this.h = 45;
    this.wMov = 70;
    this.hMov = 45;
    // posicion 1
    this.x = 275;
    this.y = 350;
    // DOM pos

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
    // salto node
    this.saltoMap = 20;
    this.giroMap = 20;
    this.node.style.zIndex = 1;
  }
  jump = () => {
    this.node.src = "./images/player-cross.png";
    this.y -= this.saltoMap;
    this.node.style.top = `${this.y}px`;
    this.w = 40;
    this.h = 45;
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
  };

  movLeft = () => {
    // if (this.x > this.giroMapLeft){
    this.node.src = "./images/player-left.png";
    this.x -= this.giroMap;
    this.node.style.left = `${this.x}px`;

    this.w = 60;
    this.h = 35;
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;

    // }
  };

  movRight = () => {
    // if (this.x < this.giroMapRight){
    this.node.src = "./images/player-rigth.png";
    this.x += this.giroMap;
    this.node.style.left = `${this.x}px`;

    this.w = 60;
    this.h = 35;
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;

    // }
  };
  movDown = () => {
    this.node.src = "./images/player-cross.png";
    this.y += this.saltoMap;
    this.node.style.top = `${this.y}px`;
    this.w = 40;
    this.h = 45;
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
  };
}
