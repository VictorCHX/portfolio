class Circle {
    directions = {
        HAUT: 0,
        BAS: 1,
        DROITE: 2,
        GAUCHE: 3,
    }
    tileSize
    pos = [{
        x:0,
        y:0
    }]
    size = 3
    speed = 2
    direction = 0
    color = '#80b2ed'
    constructor(pos, tileSize = 40) {
        this.pos = pos
        this.tileSize = tileSize
        this.setRandomDirection()
        //this.color = 'rgb('+getRandomInt(0,255)+','+getRandomInt(0,255)+','+getRandomInt(155,255)+')'
    }

    move() {
        if(this.direction >= 2)
        {
            if(this.pos.x % tileSize == 1 ||this.pos.x % tileSize == 2)
            {
                this.setRandomDirection()
                this.avance()
            }
        } else {
            if(this.pos.y % tileSize == 1 ||this.pos.y % tileSize == 2)
            {
                this.setRandomDirection()
                this.avance()
            }
        }
        
        this.avance()
    }

    avance() {
        if(this.direction == 0) {
            this.pos.y -= this.speed
        } else if(this.direction == 1)
        {
            this.pos.y += this.speed
        } else if(this.direction == 2)
        {
            this.pos.x += this.speed
        } else {
            this.pos.x -= this.speed
        }
    }

    setRandomDirection()
    {
        let lastDir = this.direction 
        this.direction = getRandomInt(0,3)
        if(lastDir == 0) {
            while(this.direction == 1)
                this.direction = getRandomInt(0,3)
        } else if(lastDir == 1) {
            while(this.direction == 0)
                this.direction = getRandomInt(0,3)
        } else if(lastDir == 2) {
            while(this.direction == 3)
                this.direction = getRandomInt(0,3)
        } else {
            while(this.direction == 2)
                this.direction = getRandomInt(0,3)
        }
    }
}