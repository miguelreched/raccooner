let startButton = document.querySelector("#start-btn");
let reStartButton = document.querySelector("#restart-btn");
let firstScreen = document.querySelector("#first-screen");
let gameScreen = document.querySelector("#game-screen");
let gameBox = document.querySelector("#game-box");
let gameOverScreen = document.querySelector("#gameover-screen");
let winScreen = document.querySelector("#win-screen");
let instruction = document.querySelector("#instructions")
let scoreNode = document.querySelector("#score")
let scoreNumber = document.querySelector("#score-number")
let botonVol = document.querySelector("#volumen")
let sonidoTrafico = document.querySelector("#sonido")
let isMusicOn = true;
let mapSound = document.querySelector("#sonidoMap")

let gameObject;

const startGame = () => {
  firstScreen.style.display = "none";
  gameScreen.style.display = "flex";
  instruction.style.display = "flex";
  winScreen.style.display = "none"
  


  gameObject = new Game();
  // audioGeneral();
  sonidoTrafico.play();
  sonidoTrafico.volume = 0.1;
  gameObject.gameLoop();
};

const reStartGame = () => {
  firstScreen.style.display = "none";
  gameScreen.style.display = "flex";
  instruction.style.display = "none";
  gameOverScreen.style.display ="none";
  gameBox.innerHTML = "";

  gameObject = new Game();
  // audioGeneral();
  // sonidoTrafico.play();
  // sonidoTrafico.volume = 0.1;
  gameObject.gameLoop();
  scoreNumber.innerHTML = 0


  
//   // scoreNode.style.display = "flex"
//   // scoreNumber.style.display = "flex"
};

const audioGeneral = () => {
  if (isMusicOn === false){
  sonidoTrafico.volume = 0.1;
  sonidoTrafico.play();
  isMusicOn = true;
  }
  else {
    isMusicOn = false
    sonidoTrafico.currentTime = 0;
    sonidoTrafico.pause();
  }

}

// const sonidoMapache = () => {
//   if (this.mapache.y > 550)
//   this.mapSound.play()
//   this.mapSound.volume = 0.1

// }

const reLoad = () => {
  gameScreen.style.display = "flex";
  gameBox.innerHTML = "";
  gameObject = new Game();
  gameObject.gameLoop();
}


reStartButton.addEventListener("click", reStartGame);
startButton.addEventListener("click", startGame);
botonVol.addEventListener("click", audioGeneral);

// scoreNumber.addEventListener("click", reStartGame)


document.addEventListener("keydown", (event) => {
if (gameObject.timer > 60 ){
  if (event.code === "ArrowUp") {

    gameObject.mapache.jump();
  } else if (event.code === "ArrowLeft") {


    gameObject.mapache.movLeft();
  } else if (event.code === "ArrowRight") {

    gameObject.mapache.movRight();
  }
  else if (event.code === "ArrowDown") {
    gameObject.mapache.movDown();
  }
}
});
//crear un condicional qe envuelva en todos los condicionales del addEventListener que solamente se ejecuta cuando el timer del juego sea mayor de un segundo