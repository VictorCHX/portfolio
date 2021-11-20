const tileSize = 40

document.addEventListener('DOMContentLoaded', ()=> {



    let canvas =  document.querySelector("#grid-canvas")
    
    // ...then set the internal size to match
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    let circles = []
    let ctx = canvas.getContext('2d');
        
    displayGrid(canvas, ctx)
    //after(canvas, ctx)

    function drawBalls() {
        for(let circle of circles) {
            if(circle.pos.x < 0 || circle.pos.y < 0 || circle.pos.x > canvas.width || circle.pos.y > canvas.height)
                circles.splice(circles.indexOf(circle),1)
            ctx.beginPath();
            ctx.arc(circle.pos.x, circle.pos.y, circle.size, 0, Math.PI*2);
            ctx.fillStyle = circle.color
            ctx.fill();
            ctx.closePath();
            circle.move()
        }
    }
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        displayGrid()
        drawBalls();
        console.log(circles)
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
        if(pos.x % tileSize < 3 || pos.y % tileSize < 3)
        {
            
                circles.push(new Circle(pos))
        }

    })
    
    setInterval(draw, 5);
})

function getRandomInt(min, max) {
    return Math.floor(min + Math.random() * (max - min +1));
}

