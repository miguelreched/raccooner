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
    this.score = 0;
    // this.lives = 3;
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

  
//tronco dispa derecho
troncosDisappLeft = () => {
  if (this.troncoArrLeft.x < 600) {
    this.troncoArrLeft.tronco.remove();
    this.troncoArrLeft.shift();
}
};


troncosDisappRight = () => {
  if (this.troncoArrRight.x <0) {
    this.troncoArrRight.tronco.remove();
    this.troncoArrRight.shift();
}
};
isMapacheDrowning = () => {

  // if (this.mapache.y >= 20 && this.mapache.y <= 120 && this.mapache.isOnTronco === true){
  //   this.mapache.isOnTronco = true;
  // }
   if (this.mapache.y >= 20 && this.mapache.y <= 120 && this.mapache.isOnTronco === false){
    this.gameOver();
  }

}

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
  this.mapache.isOnTronco = false; //asumimos que el mapache no esta colisionando 
  this.troncoArrLeft.forEach((eachTronco)=> {
    if (
      eachTronco.x < this.mapache.x + this.mapache.w &&
      eachTronco.x + eachTronco.w > this.mapache.x &&
      eachTronco.y < this.mapache.y + this.mapache.h &&
      eachTronco.y + eachTronco.h > this.mapache.y
    ) {
      this.mapache.isOnTronco = true;

    }
   

  })
// console.log(this.mapache.isOnTronco)
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

volverAEmpezar = () => {
  if (this.mapache.y <= 0) {
    this.cochesArr = []
    this.troncoArrLeft = []
    this.troncoArrRight = [];
    this.mapache.x = 275;
    this.mapache.y = 350;
    this.mapache.style.top = `${this.mapache.y}px`;
    this.mapache.style.left = `${this.mapache.x}px`;
    this.score++;
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
  this.troncosDisappLeft();
  this.troncosDisappRight
  this.mapacheTronco();
  this.isMapacheDrowning();
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
  // this.winMap(reLoad);

  this.timer++;
  if (this.isGameOn === true) {
    requestAnimationFrame(this.gameLoop);
  }
};
}
