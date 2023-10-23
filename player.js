class Mapache {
  constructor() {
    this.mapache = document.createElement("img");
    this.mapache.src = "/images/player-cross.png";
    gameBox.append(this.mapache);
    // tamaño
    this.w = 40;
    this.h = 45;
    // posicion 1
    this.x = 275;
    this.y = 350;
    // DOM pos
    this.mapache.style.width = `${this.w}px`;
    this.mapache.style.height = `${this.h}px`;
    this.mapache.style.position = "absolute";
    this.mapache.style.top = `${this.y}px`;
    this.mapache.style.left = `${this.x}px`;
    // salto Mapache
    this.saltoMap = 20;
    this.giroMap = 20;
  }
  jump = () => {
    if (this.y > this.saltoMap) {
      this.y -= this.saltoMap;
      this.mapache.style.top = `${this.y}px`;
    }
  };

  movLeft = () => {
    // if (this.x > this.giroMapLeft){
    this.x -= this.giroMap;
    this.mapache.style.left = `${this.x}px`;
    // }
  };

  movRight = () => {
    // if (this.x < this.giroMapRight){
    this.x += this.giroMap;
    this.mapache.style.left = `${this.x}px`;
    // }
  };
}
