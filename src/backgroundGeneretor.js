const backgroungGeneretor = (limit=13) => {
    const body = document.querySelector("main")
    let img = 0
    
    while(img <= 0) {
        img = Math.floor(Math.random() * limit)
    }
    
    body.style.backgroundImage = `url("../images/${img}.jpg")`
}

export default backgroungGeneretor