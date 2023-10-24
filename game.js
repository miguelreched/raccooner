class Game {
  constructor() {
    this.mapache = new Mapache();
    this.timer = 0;
    this.isGameOn = true;
    this.obstacle = new Coche();
    this.cochesArr = [];
    this.tronco = new Troncos();
    this.troncoArr = [];
  }

  troncosAppearLeft = () => {
      if (this.timer % 100 === 0) {
        posicionArr ["left", "right"]




        let posicionArray = posicionArr[Math.floor(Math.random() * posicionArr.length)];

        let troncosLeft = new Troncos (posicionArray);
        this.troncoArr.push(troncosLeft);



  
      }
    }
      troncosAppearRight = () => {
        if (this.timer % 150 === 0){
          posicionArr2 ["right", "left"]



          let posicionArray2 = posicionArr2[Math.floor(Math.random() * posicionArr2)];
  
          let troncosRight = new Troncos (posicionArray2);
          this.troncoArr.push(troncosRight);

        }
      }
  };
  troncosDisapp = () => {
    if (this.cochesArr.x < 600) {
      this.cochesArr.car.remove();
      this.cochesArr.shift();
  }
}
  cochesAppear = () => {
    if (this.timer % 70 === 0) {
      const alturaArr = [185, 235, 285];
      let alturaRandom =
        alturaArr[Math.floor(Math.random() * alturaArr.length)];

      let randomPosition = Math.floor(Math.random() * 3);

      let cocheLeft = new Coche(randomPosition, alturaRandom);
      this.cochesArr.push(cocheLeft);
    }
  };

  // colision
  colisionCar = () => {
    this.cochesArr.forEach((eachObstacle)=> {
      if (
        eachObstacle.x < this.mapache.x + this.mapache.w &&
        eachObstacle.x + eachObstacle.w > this.mapache.x &&
        eachObstacle.y < this.mapache.y + this.mapache.h &&
        eachObstacle.y + eachObstacle.h > this.mapache.y
      ){
        console.log("estrellado")
        this.gameOver()
      }

    })


  }

  cochesDisapp = () => {
    if (this.cochesArr.x < 600) {
      this.cochesArr.car.remove();
      this.cochesArr.shift();
    }
  };

  winMap = () => {
    if (this.mapache.y <= 0) {
      this.isGameOn = false;
      winScreen.style.display = "flex";
      gameScreen.style.display = "none";
      instruction.style.display = "none"
      startButton.style.display = "flex"
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
    this.cochesArr.forEach((eachCoche) => {
      eachCoche.automaticMovement();
    });
    this.troncoArr.forEach((eachTronco) => {
      eachTronco.troncoMov();
    });
    this.colisionCar()
    this.winMap()

  

    this.timer++;
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };

