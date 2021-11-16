document.addEventListener('DOMContentLoaded', ()=> {

    let allLetter  = document.querySelectorAll('.letter');
    let header  = document.querySelector('header');
    let n = 0;

    setInterval(() => {
        if(n<allLetter.length)
            allLetter[n].classList.add('change_color_load')
        n++
    }, 100);

    setTimeout(() => {
        header.classList.remove('headerOnLoad')
        for(letter of allLetter)
        {
            letter.classList.remove('letter')
            letter.classList.add('letterDone')
        }
           
    },100 * allLetter.length + 200)

    setTimeout(() => {
        header.classList.remove('headerOnChange')
        header.classList.add('headerDone')
    },100 * allLetter.length + 2200)
})


