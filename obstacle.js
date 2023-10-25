class Coche {
  constructor(type, altura, difSpeed) {
    this.node = document.createElement("img");
    if (type === 0) {
      this.node.src = "./images/coche1.png";
    } else if (type === 1) {
      this.node.src = "./images/coche2.png";
    } else if (type === 2) {
      this.node.src = "./images/coche3.png";
    }

    this.y = altura;

    this.difSpeed = difSpeed;

    gameBox.append(this.node);

    this.w = 70;
    this.h = 40;

    this.x = 0;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;

    this.carSpeed = 2.5;

  }

  automaticMovement = () => {
    this.x += this.carSpeed;
    this.node.style.left = `${this.x}px`;
  };

//   collisionCar = () => {
//     this.x -= this.carSpeed;
//     this.rac.style.top = `${this.y}px`;
//   };
}
