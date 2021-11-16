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
    let rightItem
    let n = 0;
    document.addEventListener('mousewheel', () => {
        activeItem  = document.querySelector('.active')
        topItem  = document.querySelector('.top')
        let item = items[index]
        if(item)
        {
            item.classList.remove('right')
            setTimeout(()=>{
                item.classList.add('active')
            }, 2000)
            item.style.transform = 'translateX(0px)'
            index++
        }
        if(activeItem) {
            activeItem.classList.remove('active')
            activeItem.classList.add('top')
            activeItem.style.transform = 'translateY(-'+decal+'px)'
        }
        // if(topItem) {
        //     topItem.classList.remove('top')
        //     topItem.classList.add('right')
        //     topItem.style.transform = 'translateX('+decal+'px)'
        //     topItem.style.transform = 'translateY(0px)'
        // }
    }, 2000);

    
})


