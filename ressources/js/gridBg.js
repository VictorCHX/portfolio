const tileSize = 40

class Circle {
    directions = {
        HAUT: 0,
        BAS: 1,
        DROITE: 2,
        GAUCHE: 3,
    }
    tileSize = 40
    pos = {
        x:0,
        y:0
    }
    size = 10
    speed = 2
    direction = 0
    constructor(pos) {
        this.pos = pos
        this.setRandomDirection()
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
                console.log("change");
                this.avance()
            }
        }
        
        this.avance()

            
            console.log(this.pos.y % tileSize, this.pos.x % tileSize, this.direction)
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

document.addEventListener('DOMContentLoaded', ()=> {



    let canvas =  document.querySelector("#grid-canvas")
    
    // ...then set the internal size to match
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    let circles = [new Circle({x:12*tileSize,y:12*tileSize})]
    let ctx = canvas.getContext('2d');
        
    displayGrid(canvas, ctx)
    //after(canvas, ctx)

    function drawBalls() {
        for(let circle of circles) {
            ctx.beginPath();
            ctx.arc(circle.pos.x, circle.pos.y, circle.size, 0, Math.PI*2);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
            circle.move()
        }
    }
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        displayGrid()
        drawBalls();
        // console.log(circles)
    }

    function displayGrid()
    {
        ctx.beginPath();
        for(var x=-1;x<canvas.width;x+=tileSize) {
            ctx.moveTo(x,0);
            ctx.lineTo(x,canvas.height);
        }

        for(var y=-1; y<canvas.height; y+=tileSize) {
            ctx.moveTo(0,y);
            ctx.lineTo(canvas.width,y);
        }
        
        ctx.strokeStyle='white';
        ctx.stroke();
        ctx.closePath();
    }

    canvas.addEventListener("mousemove", (e)=>{
        let pos = {
            x: Math.floor(e.offsetX),
            y: Math.floor(e.offsetY)
        }
        if(pos.x % tileSize == 1 || pos.y % tileSize == 1)
        {
            circles.push(new Circle(pos))
        }

    })
    
    setInterval(draw, 5);
})

function getRandomInt(min, max) {
    return Math.floor(min + Math.random() * (max - min +1));
}

