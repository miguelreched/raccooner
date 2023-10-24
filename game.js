class Game {
  constructor() {
    this.mapache = new Mapache();
    this.timer = 0;
    this.isGameOn = true;
    // this.obstacle = new Coche();
    this.cochesArr = [];
    // this.tronco = new Troncos();
    this.troncoArrLeft = [];
    this.troncoArrRight = [];
  }

  troncosAppearLeft = () => {

    if (this.timer % 100 === 0) {
      let troncosLeft = new Troncos("left");
      this.troncoArrLeft.push(troncosLeft);


    }
  };
  troncosAppearRight = () => {

    if (this.timer % 150 === 0) {
      let troncosRight = new Troncos("right");
      this.troncoArrLeft.push(troncosRight);


    }
  };

  

troncosDisapp = () => {
  if (this.cochesArr.x < 600) {
    this.cochesArr.car.remove();
    this.cochesArr.shift();
  }
};
cochesAppear = () => {
  if (this.timer % 80 === 0) {
    const alturaArr = [185, 235, 285];
    let alturaRandom = alturaArr[Math.floor(Math.random() * alturaArr.length)];

    let randomPosition = Math.floor(Math.random() * 3);

    let cocheLeft = new Coche(randomPosition, alturaRandom);
    this.cochesArr.push(cocheLeft);
  }
};

mapacheTronco = () => {
  if (this.tronco.y + 40 <= this.mapache){
      console.log("toca mapache")
  }

}

// colision
colisionCar = () => {
  this.cochesArr.forEach((eachObstacle) => {
    if (
      eachObstacle.x < this.mapache.x + this.mapache.w &&
      eachObstacle.x + eachObstacle.w > this.mapache.x &&
      eachObstacle.y < this.mapache.y + this.mapache.h &&
      eachObstacle.y + eachObstacle.h > this.mapache.y
    ) {
      console.log("estrellado");
      this.gameOver();
    }
  });
};

cochesDisapp = () => {
  if (this.cochesArr.x < 600) {
    this.cochesArr.car.remove();
    this.cochesArr.shift();
  }
};

winMap = () => {
  if (this.mapache.y < 0) {
    this.isGameOn = false;
    winScreen.style.display = "flex";
    gameScreen.style.display = "none";
    instruction.style.display = "none";

  }
};
gameOver = () => {
  this.isGameOn = false;
  gameScreen.style.display = "none";
  gameOverScreen.style.display = "flex";
};

gameLoop = () => {
  this.cochesAppear();
  this.cochesDisapp();
  this.troncosAppearRight();
  this.troncosAppearLeft();
  this.troncosDisapp();
  this.mapacheTronco();
  this.cochesArr.forEach((eachCoche) => {
    eachCoche.automaticMovement();
  });
  this.troncoArrLeft.forEach((eachTronco) => {
    eachTronco.troncoMov();
  });

  this.troncoArrRight.forEach((eachTronco2) => {
    eachTronco2.troncoMov();
  });

  this.colisionCar();
  this.winMap(reLoad);

  this.timer++;
  if (this.isGameOn === true) {
    requestAnimationFrame(this.gameLoop);
  }
};
}
