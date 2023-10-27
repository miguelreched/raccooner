# RACCOONER

## (https://miguelreched.github.io/raccooner/)

(./images/Logotipo_raccooner.png)


# Description

- This game is based on Frogger, an arcade game. The player is a raccoon who has to cross a road without being hit by cars and cross a river over some trunks without touching the water. The player moves using the arrows

# Main Functionalities

- player movement
- movement of obstacles and logs
- collision with obstacles
- crossing over the trunks

# Backlog Functionalities

- In the future I will change the backgrounds and types of obstacles, also changing the sounds and levels.

# Technologies used

- HTML, CSS, Javascript, DOM Manipulation

# States

- My game has only one screen right now. and in each level, increase the difficulty by increasing the speed of the obstacles

# Proyect Structure

## main.js

- startGame(){}
- reStartGame(){}
- audioGeneral(){}
- reLoad(){}

## Game.js

- Game () {
    this.mapache = new Mapache();
    this.timer = 0;
    this.isGameOn = true;
    this.cochesArr = [];
    this.troncoArrLeft = [];
    this.troncoArrRight = [];
    this.score = 0;
    this.dificultyCarSpeed = 2.5;
    this.audio = new Audio();
  }

- troncosAppearLeft()
- troncosAppearRight()
- troncosDisappLeft()
- troncosDisappRight()
- isMapacheDrowning()
- cochesAppear()
- mapacheTronco()
- colisionCar()
- cochesDisapp()
- volverAEmpezar()
- gameOver()
- gameLoop()

## Player.js 

- Player () {
    - this.isOnTronco = false;
    - this.node = document.createElement("img");
    - this.node.src = "./images/player-cross.png";
    - gameBox.append(this.node);

    - this.w = 40;
    - this.h = 45;

    - this.x = 275;
    - this.y = 350;

    - this.node.style.width = `${this.w}px`;
    - this.node.style.height = `${this.h}px`;
    - this.node.style.position = "absolute";
    - this.node.style.top = `${this.y}px`;
    - this.node.style.left = `${this.x}px`;

    - this.saltoMap = 20;
    - this.giroMap = 20;
    - this.node.style.zIndex = 1;
}
- jump () {}
- movLeft () {}
- movRight () {}
- movDown () {}

## Obstacle.js

- Coche (type, altura, difSpeed) {

    - this.node = document.createElement("img");
    - if (type === 0) {
      this.node.src = "./images/coche1.png";}
    - else if (type === 1) {
      this.node.src = "./images/coche2.png";}
    - else if (type === 2) {
      this.node.src = "./images/coche3.png";}
    
    - this.y = altura;

    - this.newSpeed = difSpeed;
 
    - gameBox.append(this.node);

    - this.w = 70;
    - this.h = 40;

    - this.x = -80;
 
    - this.node.style.width = `${this.w}px`;
    - this.node.style.height = `${this.h}px`;
    - this.node.style.position = "absolute";
    - this.node.style.left = `${this.x}px`;
    - this.node.style.top = `${this.y}px`;
}

## Troncos.js

- this.type = type;
- this.node = document.createElement("img");
- this.node.src = "./images/tronco.png";
- if (this.type === "left") {
      this.x = -150;
      this.troncoSpeed = 2;
      this.y = 50;}
- else if (this.type === "right") {
      this.x = 800;
      this.troncoSpeed = -2;
      this.y = 90;}

- gameBox.append(this.node);

- this.w = 120;
- this.h = 40;
- this.node.style.width = `${this.w}px`;
- this.node.style.height = `${this.h}px`;
- this.node.style.position = "absolute";
- this.node.style.left = `${this.x}px`;
- this.node.style.top = `${this.y}px`;

# Extra Links 

### Trello
[Link](https://trello.com/b/TyRWAx0F/proyecto-m%C3%B3dulo-1)

