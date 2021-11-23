document.addEventListener('DOMContentLoaded', ()=> {
    const waitTime = 600
    let scrollIcon = document.querySelector('#scroll-img');
    scrollIcon.style.transform = 'translateY('+50+'vh)'
    let haveAlredyScroll = false
    setTimeout(()=>{
        if(!haveAlredyScroll)
        {
            scrollIcon.style.transform = 'translateY('+0+'vh)'
            let isDown = true
            setInterval(() => {
                if(!haveAlredyScroll)
                {
                    scrollIcon.style.transform = 'translateY('+(isDown ?5:0)+'vh)'
                    isDown = !isDown
                }
            }, 2000);
        }
        
    },6000)
    
    let slides  = document.querySelectorAll('.slide_content')
    const offset = slides[0].clientWidth + 1000
    let nbSlides = slides.length
    let inMotion = false;

    let index = 0

    let about_me_btn = document.querySelector('#about-me-btn')
    let projects_btn = document.querySelector('#projects-btn')

    about_me_btn.addEventListener("click", (e)=>{
        e.preventDefault()
        if( !inMotion)
        {
            inMotion=true
            setTimeout(()=>{
                inMotion=false
            }, waitTime)
            let activeSlide = slides[index-1]
            if(activeSlide) {
                translateRandom(activeSlide, offset, directions, index-1)
            }
            index = 0
            advance()
        }
    })
    projects_btn.addEventListener("click", (e)=>{
        e.preventDefault()
        if(!inMotion)
        {
            inMotion=true
            setTimeout(()=>{
                inMotion=false
            }, waitTime)
            let activeSlide = slides[index-1]
            if(activeSlide) {
                translateRandom(activeSlide, offset, directions, index-1)
            }
            index = 4
            advance()
        }
    })

    let directions = []

    //(telephone)
    if(window.innerWidth > 765)
    {
        //-------------------Placement des slides en aleatoire sur grand ecran
        
        for (let slide of slides)
        {
            translateRandom(slide, offset, directions, index)
            // console.log(directions)
            slide.classList.add('right')
            index++
        }
        index = 0

    } else {
        //Placement des divs sur petit ecran (ex:tel)
        let index = 0
        
        for (let slide of slides)
        {
            slide.style.transform = 'translateY('+offset+'px)'
            // console.log(directions)
            index++
        }
        index = 0

    }

    //----------------------------------Gestion deplacement scroll souris-----------------
    document.addEventListener('wheel', (e) => {
        if(!inMotion && (e.deltaY>20 || e.deltaY<-20))
        {
            if(!haveAlredyScroll)
            {
                scrollIcon.style.transform = 'translateY('+50+'vh)'
                haveAlredyScroll = true
            }
            inMotion=true
            setTimeout(()=>{
                inMotion=false
            }, waitTime)
            if(e.wheelDeltaY < 0) {
                advance()
            } else {
                backOff()
            }
            
        }
    });
    function advance() {
        let slide = slides[index]
        let activeSlide = slides[index-1]
        
        if(slide)
        {
            slide.style.transform = 'translateX(0px)'
            
        }
        if(activeSlide) {
            translateRandom(activeSlide, offset, directions, index-1)
        }
        index = index>=nbSlides+1 ? nbSlides+1 : index+1   
    }

    function backOff(){ 
        let topSlide = slides[index-2]
        let activeSlide = slides[index-1]
        if(topSlide)
        {
            topSlide.style.transform = 'translateY(0px)'
            
        }
        if(activeSlide) {
            translateRandom(activeSlide, offset, directions, index-1)
        }
        index = index<1 ? 0 : index -1 
    } 
    //---------------------------------------------------------------------------------------
    //--------------------------------------Gestion deplacement tactile----------------------
    
    let lastTouchY
    let firstEvent = true
    document.addEventListener('touchmove', (e)=> {
        if(firstEvent) {
            firstEvent = false
        } else {
            
            if(!haveAlredyScroll)
            {
                scrollIcon.style.transform = 'translateY('+50+'vh)'
                haveAlredyScroll = true
            } 
            if(!inMotion) {
                inMotion=true
                setTimeout(()=>{
                    inMotion=false
                    firstEvent = true
                }, waitTime)
                if(lastTouchY > e.targetTouches[0].clientY) {
                    console.log("scroll up");
                    advanceTactile()
                } else {
                    console.log("scroll down");
                    backOffTactile()
                }
            }
        }
        lastTouchY = e.targetTouches[0].clientY
    }, false);
    
    function advanceTactile() {
        let nextSlide = slides[index]
        let activeSlide = slides[index-1]
        
        if(nextSlide)
        {
            nextSlide.style.transform = 'translateY(0px)'
            
        }
        if(activeSlide) {
            activeSlide.style.transform = 'translateY(-'+offset+'px)'
        }
        index = index>=nbSlides+1 ? nbSlides+1 : index+1
        
    }
    function backOffTactile(){ 
        let outSlide = slides[index-2]
        let activeSlide = slides[index-1]
        if(outSlide)
        {
            outSlide.style.transform = 'translateY(0px)'
            
        }
        if(activeSlide) {
            activeSlide.style.transform = 'translateY('+offset+'px)'
        }
        index = index<1 ? 0 : index -1
    }
    
    //---------------------------------------------------------------------------------------
})


function translateRandom(slide, offset, directions, index)
{
    directions[index] = getRandomInt(0, 3)
    
    while(directions[index-1] == directions[index] || directions[index+1] == directions[index])
        directions[index] = (directions[index]+1)%3
        
        if(directions[index] == 0) {
            slide.style.transform = 'translateX('+offset+'px)'
        } else if(directions[index] == 1) {
        slide.style.transform = 'translateY('+offset+'px)'
    } else if(directions[index] == 2) {
        slide.style.transform = 'translateX(-'+offset+'px)'
    } else {
        slide.style.transform = 'translateY(-'+offset+'px)'
    }
}

function getRandomInt(min, max) {
    return Math.floor(min + Math.random() * (max - min +1));
}