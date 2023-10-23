class Troncos {
  constructor(position) {
    this.tronco = document.createElement("img");
    this.tronco.src = "/images/tronco.png";
    
    this.y = position;
    
    gameBox.append(this.tronco);
    
    this.w = 120;
    this.h = 40;
    this.x = 0;
    
    this.tronco.style.width = `${this.w}px`;
    this.tronco.style.height = `${this.h}px`;
    this.tronco.style.position = "absolute";
    this.tronco.style.left = `${this.x}px`;
    this.tronco.style.top = `${this.y}px`;

    this.troncoSpeed = 2;
  }
  troncoMov = () => {
    this.x += this.troncoSpeed;
    this.tronco.style.left = `${this.x}px`;
  };
}
