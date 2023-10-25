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

let gameObject;

const startGame = () => {
  firstScreen.style.display = "none";
  gameScreen.style.display = "flex";
  instruction.style.display = "flex";
  winScreen.style.display = "none"



  gameObject = new Game();
  gameObject.gameLoop();
};

const reStartGame = () => {
  firstScreen.style.display = "none";
  gameScreen.style.display = "flex";
  instruction.style.display = "none";
  gameOverScreen.style.display ="none";
  gameBox.innerHTML = "";
  gameObject = new Game();
  gameObject.gameLoop();
  scoreNumber.innerHTML = 0


  
//   // scoreNode.style.display = "flex"
//   // scoreNumber.style.display = "flex"
};

const reLoad = () => {
  gameScreen.style.display = "flex";
  gameBox.innerHTML = "";
  gameObject = new Game();
  gameObject.gameLoop();
}


reStartButton.addEventListener("click", reStartGame);
startButton.addEventListener("click", startGame);
// scoreNumber.addEventListener("click", reStartGame)


document.addEventListener("keydown", (event) => {
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
});
