class Troncos {
  constructor(type) {

    this.tronco = document.createElement("img");
    this.tronco.src = "/images/tronco.png";
    if (type === "left") {
      this.x = 0;
      this.troncoSpeed = 2;
      this.y = 50;
    } else if (type === "right") {
      this.x = 600;
      this.troncoSpeed = -3;
      this.y = 90;
    }

    this.y = 90;

    gameBox.append(this.tronco);

    this.w = 120;
    this.h = 40;


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

//   troncoMovRight = () => {
//     this.x += this.troncoSpeed;
//     this.tronco.style.left = `${this.x}px`;
//   };

//   troncoMovLeft = () => {
//     this.x -= this.troncoSpeed;
//     this.tronco.style.left = `${this.x}px`;
//   };
}
