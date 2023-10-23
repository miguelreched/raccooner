class Coche {
  constructor(type, altura) {
    this.car = document.createElement("img");
    if (type === 0) {
      this.car.src = "./images/coche1.png";
    } else if (type === 1) {
      this.car.src = "./images/coche2.png";
    } else if (type === 2) {
      this.car.src = "./images/coche3.png";
    }

    this.y = altura;

    gameBox.append(this.car);

    this.w = 70;
    this.h = 40;

    this.x = 0;

    this.car.style.width = `${this.w}px`;
    this.car.style.height = `${this.h}px`;
    this.car.style.position = "absolute";
    this.car.style.left = `${this.x}px`;
    this.car.style.top = `${this.y}px`;

    this.carSpeed = 2;
  }

  automaticMovement = () => {
    this.x += this.carSpeed;
    this.car.style.left = `${this.x}px`;
  };

//   collisionCar = () => {
//     this.x -= this.carSpeed;
//     this.rac.style.top = `${this.y}px`;
//   };
}
