document.addEventListener('DOMContentLoaded', ()=> {

    let cursor = document.querySelector("#cursor");
    let cursorWidth = cursor.clientWidth/2
    window.addEventListener("mousemove", e => {
        let posX = e.pageX - cursorWidth
        let posY = e.pageY - cursorWidth
        cursor.style.left = posX + "px";
        cursor.style.top = posY+ "px";
    });

    let values = document.querySelectorAll(".value")
    let bars = document.querySelectorAll(".bar_skill")
    for(i in values) {
        if(values[i].width)
            bars[i].style.width = values[i].textContent +"%"
    }


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
