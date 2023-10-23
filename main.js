let startButton = document.querySelector("#start-btn")
let firstScreen = document.querySelector("#first-screen")
let gameScreen = document.querySelector("#game-screen")
let gameBox = document.querySelector("#game-box")
let gameOverScreen = document.querySelector("#gameover-screen")
let winScreen = document.querySelector("#win-screen")


let gameObject;

const startGame = () => {
    firstScreen.style.display = "none"
    gameScreen.style.display = "flex"

    gameObject = new Game()
    gameObject.gameLoop()
}

startButton.addEventListener("click", startGame)

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        console.log("intentando salto")
        gameObject.rac.jump()
    }

    else if (event.code === "ArrowLeft") {
        console.log("intentando izquierda")
        gameObject.rac.movLeft()
    }

    else if (event.code === "ArrowRight") {
        console.log("intentando derecha")
        gameObject.rac.movRight()
    }
})