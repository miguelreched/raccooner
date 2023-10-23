class Troncos {
    constructor() {
  this.tronco = document.createElement("img");
  this.tronco.src = "/images/tronco.png"
  gameBox.append(this.tronco);
  
      this.w = 60;
      this.h = 10;
      this.y = 10;
      this.x = 50;
  
      this.car.style.width = `${this.w}px`;
      this.car.style.height = `${this.h}px`;
      this.car.style.position = "absolute";
      this.car.style.left = `${this.x}px`;
      this.car.style.top = `${this.y}px`;
  
    this.troncoSpeed = 2;
    }
    troncoMov = () => {
        this.x += this.troncoSpeed
        this.tronco.style.left = `${this.x}px`
    }
}