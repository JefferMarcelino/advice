const showAdvice = advice => {
    const text = document.querySelector(".text")
    const adviceSlip = document.querySelector(".text p")
    adviceSlip.classList.add("advice")
    text.appendChild(adviceSlip)

    
    const arrayText = advice.split("");
    console.log(arrayText)
    
    arrayText.forEach(function (letter, i) {
        setTimeout(function () {
            adviceSlip.innerHTML += letter;
            if (i === (arrayText.length - 1)) {
                console.log("Finish")
            }    
        }, 75 * i);
    });
}

export default showAdvice