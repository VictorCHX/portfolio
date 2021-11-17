console.log("Script scroll chargé")
document.addEventListener('DOMContentLoaded', ()=> {
    const decal = 1500
    let items  = document.querySelectorAll('.item')
    for (let item of items)
    {
        item.style.transform = 'translateX('+decal+'px)'
        item.classList.add('right')
    }
    let index = 0
    let nbItems = items.length
    console.log(nbItems);
    
    let inMotion = false;

    document.addEventListener('wheel', (e) => {
        if(!inMotion)
        {
            inMotion=true
            
            if(e.wheelDeltaY < 0)
            {
                console.log("scroll down")
                let item = items[index]
                let activeItem = items[index-1]
                
                if(item)
                {
                    item.classList.remove('right')
                    item.classList.add('active')
                    item.style.transform = 'translateX(0px)'
                    
                }
                if(activeItem) {
                    activeItem.classList.remove('active')
                    activeItem.classList.add('top')
                    activeItem.style.transform = 'translateY(-'+decal+'px)'
                }
                setTimeout(()=>{
                    index++
                    inMotion=false
                }, 1000)
            }
            else
            {
                console.log("scroll up")
                let topItem = items[index-2]
                let activeItem = items[index-1]
                if(topItem)
                {
                    topItem.style.transform = 'translateY(0px)'
                    
                }
                if(activeItem) {
                    activeItem.style.transform = 'translateX('+decal+'px)'
                }
                setTimeout(()=>{
                    index = index<1 ? 0 : index-1
                    inMotion=false
                }, 1000)
            }
            console.log(index)
        }
        
        
        // if(topItem) {
        //     topItem.classList.remove('top')
        //     topItem.classList.add('right')
        //     topItem.style.transform = 'translateX('+decal+'px)'
        //     topItem.style.transform = 'translateY(0px)'
        // }
    }, 2000);

    
})


