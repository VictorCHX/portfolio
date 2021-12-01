document.addEventListener('DOMContentLoaded', ()=> {

    //handle cursor div
    let cursor = document.querySelector("#cursor");
    let cursorWidth = cursor.clientWidth/2
    window.addEventListener("mousemove", e => {
        let posX = e.pageX - cursorWidth
        let posY = e.pageY - cursorWidth
        cursor.style.left = posX + "px";
        cursor.style.top = posY+ "px";
    });

    document.addEventListener("touchstart", ()=>{
        cursor.style.display = "none";
    })

    
    //handle skill bars
    let values = document.querySelectorAll(".value")
    let bars = document.querySelectorAll(".bar_skill")
    for(i in values) {
        if(values[i].textContent)
        bars[i].style.width = values[i].textContent +"%"
    }

    let copiedMsg = document.querySelector('#copied-msg');
    let inconMail = document.querySelector("#mailIcon")
    
    inconMail.addEventListener("click", ()=>{
        //------------Code récupéré pour copier(Surement améliorable)-----
        let fromElement = document.querySelector("#mail");
        let range = document.createRange();
        let selection = window.getSelection();
        range.selectNode(fromElement);
        selection.removeAllRanges();
        selection.addRange(range);
        var result = document.execCommand('copy');
        //------------------------------
        if (result) {
            // Affichage et disparition d'un message quand on arrive bien à copier le texte
            copiedMsg.classList.remove("display-none")
            setTimeout(()=>{
                copiedMsg.classList.add("display-none")
            }, 3000)
        }
    })

})
