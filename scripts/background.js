const backgroungGeneretor = limit => {
    const body = document.querySelector("body")
    let img = 0

    while(img <= 0) {
        img = Math.floor(Math.random() * limit)
    }
    
    body.style.backgroundImage = `url("../images/${img}.jpg")`
}

backgroungGeneretor(13)