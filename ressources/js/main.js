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


    let inconMail = document.querySelector("#mailIcon")
    
    inconMail.addEventListener("click", ()=>{
        let fromElement = document.querySelector("#mail");
        let range = document.createRange();
        let selection = window.getSelection();
        range.selectNode(fromElement);
        selection.removeAllRanges();
        selection.addRange(range);

        try {
            // Exécution de la commande de copie
            var result = document.execCommand('copy');
            if (result) {
                // La copie a réussi
                alert('Copié !');
            }
        } catch(err) {
            // Une erreur est surevnue lors de la tentative de copie
            alert(err);
        }
    })

    


})

function create(tag, parent, content=null, classs=null, id=null) {

    let element = document.createElement(tag)

    if (content)
        element.appendChild(document.createTextNode(content))
    if (id)
        element.id = id
    if (classs)
        element.classList.add(classs)

    parent.appendChild(element)

    return element
}
