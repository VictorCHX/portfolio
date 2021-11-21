document.addEventListener('DOMContentLoaded', ()=> {
    let cursor = document.querySelector("#cursor");
    let cursorWidth = cursor.clientWidth
    window.addEventListener("mousemove", e => {
        let posX = e.pageX - cursor.clientWidth
        let posY = e.pageY - cursor.clientHeight
        cursor.style.left = posX + "px";
        cursor.style.top = posY+ "px";
    });
})