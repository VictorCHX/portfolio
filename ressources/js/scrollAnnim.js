
document.addEventListener('DOMContentLoaded', ()=> {
    if(window.innerWidth > 765)
    {
        const WaitTime = 800
        let items  = document.querySelectorAll('.item_content')
        const offset = items[0].clientWidth + 1000
        let directions = []
        let index = 0
        
        for (let item of items)
        {
            translateRandom(item, offset, directions, index)
            console.log(directions)
            item.classList.add('right')
            index++
        }
        index = 0
        let nbItems = items.length
        
        let inMotion = false;
        
        document.addEventListener('wheel', (e) => {
            if(!inMotion && (e.deltaY>20 || e.deltaY<-20))
            {
                inMotion=true
                
                if(e.wheelDeltaY < 0) {
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
                        translateRandom(activeItem, offset, directions, index-1)
                    }
                    setTimeout(()=>{
                        index = index>=nbItems+1 ? nbItems+1 : index+1
                        inMotion=false
                    }, WaitTime)
                } else {
                    console.log("scroll up")
                    let topItem = items[index-2]
                    let activeItem = items[index-1]
                    if(topItem)
                    {
                        topItem.style.transform = 'translateY(0px)'
                        
                    }
                    if(activeItem) {
                        translateRandom(activeItem, offset, directions, index-1)
                    }
                    index = index<1 ? 0 : index -1
                    if(index>0)
                    {
                        setTimeout(()=>{
                            
                            inMotion=false
                        }, WaitTime)
                    }
                    else inMotion=false
                }
            }
            
            
        });
    }

    
})

function translateRandom(item, offset, directions, index)
{
    directions[index] = getRandomInt(0, 3)

    while(directions[index-1] == directions[index] || directions[index+1] == directions[index])
        directions[index] = (directions[index]+1)%3

    if(directions[index] == 0) {
        item.style.transform = 'translateX('+offset+'px)'
    } else if(directions[index] == 1) {
        item.style.transform = 'translateY('+offset+'px)'
    } else if(directions[index] == 2) {
        item.style.transform = 'translateX(-'+offset+'px)'
    } else {
        item.style.transform = 'translateY(-'+offset+'px)'
    }
}

function getRandomInt(min, max) {
    return Math.floor(min + Math.random() * (max - min +1));
}