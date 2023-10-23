class Game {
  constructor() {
    this.mapache = new Mapache();
    this.timer = 0;
    this.isGameOn = true;
    this.obstacle = new Coche()
    this.cochesArr = [];
  }

  cochesAppear = () => {
    if (this.timer === 0) {
      // if ()

      let randomPosition = Math.random(Math.floor) * 2;
      let cocheLeft = new Coche("left", randomPosition);
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
    this.obstacle.automaticMovement()

    this.timer++;
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
