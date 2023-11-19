document.getElementById('card-container').onmousemove = e => {
    for(const card of document.getElementsByClassName("card")){
        const rectangle = card.getBoundingClientRect(),
        x = e.clientX - rectangle.left,
        y = e.clientY - rectangle.top;
        card.style.setProperty("--mouse-x",`${x}px`);
        card.style.setProperty("--mouse-y",`${y}px`);
       
    }
}