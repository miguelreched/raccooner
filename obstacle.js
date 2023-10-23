class Coche{
    constructor(yPos){
        this.car = document.createElement("img")
        if (this.yPos === "245") {
            this.car.src = "/images/coche1.png"
        }
        else if (this.yPos === "220") {
            this.car.src = "images/coche2.png"
        }
        else if (this.yPos === "200") {
            this.car.src ="images/coche3.png"
        }
        gameBox.append(this.car)

        this.w = 1;
        this.y = 1;
        this.x = 0;
        this.y = yPos;

        this.car.style.width = `${this.w}px`
        this.car.style.height = `${this.h}px`
        this.car.style.position = "absolute"
        this.car.style.left = `${this.x}px`
        this.car.style.top = `${this.y}px`


    }

    automaticMovement = () => {

        this.x -= this.salto
        this.car.style.left = `${this.x}px`;

    }

    collisionCar = () => {
        this.x -= this.speed
        this.rac.style.top = `${this.y}px`
    }
}