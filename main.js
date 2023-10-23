let startButton = document.querySelector("#start-btn");
let firstScreen = document.querySelector("#first-screen");
let gameScreen = document.querySelector("#game-screen");
let gameBox = document.querySelector("#game-box");
let gameOverScreen = document.querySelector("#gameover-screen");
let winScreen = document.querySelector("#win-screen");

let gameObject;

const startGame = () => {
  firstScreen.style.display = "none";
  gameScreen.style.display = "flex";

  gameObject = new Game();
  gameObject.gameLoop();
};

startButton.addEventListener("click", startGame);

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
