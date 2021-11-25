document.addEventListener('DOMContentLoaded', ()=> {
    if(window.innerWidth > 765)
    {

        let cursor = document.querySelector("#cursor");
        let cursorWidth = cursor.clientWidth
        window.addEventListener("mousemove", e => {
            let posX = e.pageX - cursor.clientWidth
            let posY = e.pageY - cursor.clientHeight
            cursor.style.left = posX + "px";
            cursor.style.top = posY+ "px";
        });
    }
    let values = document.querySelectorAll(".value")
    let bars = document.querySelectorAll(".bar_skill")
    for(i in values) {
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
