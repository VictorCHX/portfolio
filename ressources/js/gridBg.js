const tileSize = 40

class Circle {
    tileSize = 40
    pos = {
        x:0,
        y:0
    } 
    size = 10
    speed = 10
    constructor(pos) {
        this.pos = pos
        this.setRandomDirection()
    }

    move() {
        this.pos.x += this.speed;
        this.pos.y += this.speed;
        if(this.pos.x % tileSize == 1 || this.pos.y % tileSize == 1)
        {
            this.setRandomDirection()
            //console.log(this);
        }
    }

    setRandomDirection()
    {
        this.speed = Math.floor(-1 + Math.random() * 3)*30
    }
}

document.addEventListener('DOMContentLoaded', ()=> {



    let canvas =  document.querySelector("#grid-canvas")
    
    // ...then set the internal size to match
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    let circles = [new Circle({x:0,y:0})]
    
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
    
    setInterval(draw, 100);
})

function getRandomInt(min, max) {
    return Math.floor(min + Math.random() * (max - min +1));
}

