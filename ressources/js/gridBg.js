const tileSize = 40
document.addEventListener('DOMContentLoaded', ()=> {



    let canvas =  document.querySelector("#grid-canvas")
    
    // ...then set the internal size to match
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    let ctx = canvas.getContext('2d');
    ctx.lineWidth = 1;
        
    displayGrid(canvas, ctx)
    after(canvas, ctx)

        
})

function displayGrid(canvas, ctx)
{
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
}

function after(canvas, ctx)
{
    canvas.addEventListener("mousemove", (e)=>{
        let pos = {
            x:e.offsetX,
            y:e.offsetY
        } 
        console.log("Left? : " + pos.x + " ; Top? : " + pos.y + ".");
        ctx.moveTo(pos.x, pos.y)
        ctx.lineTo(500,pos.y);
        ctx.fillStyle ='pink';
        ctx.stroke();

    })
}