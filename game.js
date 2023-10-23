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

  troncosAppear = () => {
      if (this.timer % 60 === 0) {
        const alturaTroncoArr = [50, 90];
        let alturaTroncoRandom =
        alturaTroncoArr[Math.floor(Math.random() * alturaTroncoArr.length)];

        let troncosIzq = new Troncos (alturaTroncoRandom);
        this.troncoArr.push(troncosIzq);
  
      }
  };
  troncosDisapp = () => {
    if (this.cochesArr.x < 600) {
      this.cochesArr.car.remove();
      this.cochesArr.shift();
  }
}
  cochesAppear = () => {
    if (this.timer % 80 === 0) {
      const alturaArr = [185, 235, 285];
      let alturaRandom =
        alturaArr[Math.floor(Math.random() * alturaArr.length)];

      let randomPosition = Math.floor(Math.random() * 3);

      let cocheLeft = new Coche(randomPosition, alturaRandom);
      this.cochesArr.push(cocheLeft);
    }
  };

  cochesDisapp = () => {
    if (this.cochesArr.x < 600) {
      this.cochesArr.car.remove();
      this.cochesArr.shift();
    }
  };

  winMap = () => {
    if (this.mapache.exeY < 0) {
      this.isGameOn = false;
      winScreen.style.display = "flex";
      gameScreen.style.display = "none";
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
    this.troncosAppear();
    this.cochesArr.forEach((eachCoche) => {
      eachCoche.automaticMovement();
    });
    this.troncoArr.forEach((eachTronco) => {
      eachTronco.troncoMov();
    })
  

    this.timer++;
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
