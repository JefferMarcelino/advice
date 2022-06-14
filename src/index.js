import backgroungGeneretor from "./backgroundGeneretor.js"
import fetchAdvice from "./fetchAdvice.js"

const start = async () => {
    backgroungGeneretor()
    fetchAdvice()
}

const image = document.querySelector(".profile .img")
image.addEventListener("click", start)

start()