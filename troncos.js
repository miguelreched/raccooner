class Troncos {
  constructor(type) {
    this.type = type;
    this.node = document.createElement("img");
    this.node.src = "./images/tronco.png";
    if (this.type === "left") {
      this.x = -150;
      this.troncoSpeed = 2;
      this.y = 50;
    } else if (this.type === "right") {
      this.x = 800;
      this.troncoSpeed = -2;
      this.y = 90;
    }

    gameBox.append(this.node);

    this.w = 120;
    this.h = 40;
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
  }

  troncoMov = () => {
    this.x += this.troncoSpeed;
    this.node.style.left = `${this.x}px`;
  };
}
