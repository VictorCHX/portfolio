document.addEventListener('DOMContentLoaded', ()=> {
    if(window.innerWidth > 765)
    {
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
        let directions = []
        let index = 0
        
        for (let slide of slides)
        {
            translateRandom(slide, offset, directions, index)
            // console.log(directions)
            slide.classList.add('right')
            index++
        }
        index = 0
        let nbSlides = slides.length
        
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

        let inMotion = false;
        
        document.addEventListener('wheel', (e) => {
            if(!inMotion && (e.deltaY>20 || e.deltaY<-20))
            {
                if(!haveAlredyScroll)
                {
                    scrollIcon.style.transform = 'translateY('+50+'vh)'
                }
                haveAlredyScroll = true
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
    }
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