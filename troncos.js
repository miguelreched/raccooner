class Troncos {
    constructor() {
  this.tronco = document.createElement("img");
  this.tronco.src = "/images/tronco.png"
  gameBox.append(this.tronco);
  
      this.w = 70;
      this.h = 10;
      this.y = 50;
      this.x = 50;
  
      this.car.style.width = `${this.w}px`;
      this.car.style.height = `${this.h}px`;
      this.car.style.position = "absolute";
      this.car.style.left = `${this.x}px`;
      this.car.style.top = `${this.y}px`;
  

    }
}