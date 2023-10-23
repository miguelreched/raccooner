class Game {
  constructor() {
    this.mapache = new Mapache();
    this.timer = 0;
    this.isGameOn = true;
    this.obstacle = new Coche()
    this.cochesArr = [];
  }

  

  cochesAppear = () => {
    if (this.timer % 60 === 0) {
      // if ()
    //   let type0 = this.x = 185;
    //   let type1 = this.x = 235;
    //   let type2 = this.x = 285;
    const alturaArr = [185, 235, 285];
    let alturaRandom = alturaArr[Math.floor(Math.random() * alturaArr.length)];
    
    if (alturaRandom === alturaArr[0]){
    return type === 1}

    else if (alturaRandom === alturaArr[1]){
    return type ===2}  
    
    else {
        return type ===3
    }
}

    //   let randomPosition = Math.floor(Math.random()*3) ;
    //   console.log(randomPosition)
      let cocheLeft = new Coche(alturaRandom);
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

