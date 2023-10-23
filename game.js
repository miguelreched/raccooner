class Game {
    constructor(){
    this.cochesArr = []
    this.mapache = new Mapache()
    this.timer = 0;
    this.isGameOn = true;
    this.obstacle = new Coche()
}

cochesAppear = () => {
    if (this.timer % 60 === 0) {

        let randomPosition = Math.random()* -100;
        let cocheLeft = new Coche ("left", randomPosition);
        this.cochesArr.push(cocheLeft);
    }

}

cochesDisapp = () => {
    if(this.cochesArr[0].x < 0){
        this.cochesArr[0].car.remove()
        this.cochesArr.shift()
    }
}
winMap = () => {
if (this.mapache.exeY < 0){
    this.isGameOn = false;
    winScreen.style.display = "flex"
    gameScreen.style.display = "none"
} 
}
gameOver (){
this.isGameOn = false;
gameScreen.style.display = "none"
gameOverScreen.style.display = "flex"
}

gameLoop = () => {


    this.cochesArr.forEach((eachCoche)=>{
        eachCoche.automaticMovement() 
    })
    this.cochesAppear();
    
    this.timer++;
    if (this.isGameOn === true){
        requestAnimationFrame(this.gameLoop);
    };
    this.cochesDisapp();

}

}