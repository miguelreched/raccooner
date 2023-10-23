class Coche {
  constructor(type) {
    this.car = document.createElement("img");
    if (this.type === "0") {
      this.car.src = "/images/coche1.png";
    } else if (this.type === "1") {
      this.car.src = "images/coche2.png";
    } else if (this.type === "2") {
      this.car.src = "images/coche3.png";
    }
    gameBox.append(this.car);

    this.w = 1;
    this.y = 1;
    this.x = 0;

    this.car.style.width = `${this.w}px`;
    this.car.style.height = `${this.h}px`;
    this.car.style.position = "absolute";
    this.car.style.left = `${this.x}px`;
    this.car.style.top = `${this.y}px`;

    this.carSpeed = 2;
  }

  automaticMovement = () => {
    this.x -= this.carSpeed;
    this.car.style.left = `${this.x}px`;
  };

  collisionCar = () => {
    this.x -= this.carSpeed;
    this.rac.style.top = `${this.y}px`;
  };
}
