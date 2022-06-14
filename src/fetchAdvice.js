import showAdvice from "./showAdvice.js"

const fetchAdvice = () => {
    const loadingImg = document.querySelector("img.loading")
    const adviceSlip = document.querySelector(".text p")
    adviceSlip.innerHTML = " "
    loadingImg.classList.remove("hide")

    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
        const slip = data.slip;
        var adviceRecv = slip.advice;

        loadingImg.classList.add("hide")

        showAdvice(adviceRecv)
    })
}

export default fetchAdvice