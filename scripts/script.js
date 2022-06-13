const adviceapi = fetch("https://api.adviceslip.com/advice");
const container = document.querySelector("div.text");

const adviceSlip = document.createElement("p");
adviceSlip.setAttribute("class", "advice");

const image = document.querySelector("div img.loading");

const generateAdvice = (divText) => {
  const adviceSlip = document.createElement("p");adviceSlip.classList.add("advice")
  divText.appendChild(adviceSlip)

  fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
        const slip = data.slip;

        console.log(slip)

        divText.appendChild(adviceSlip);
        var adviceRecv = slip.advice;

        image.style.display = "none";
        image.style.opacity = "0";

        const textoArray = adviceRecv.split("");
        adviceSlip.innerHTML = " ";
        
        textoArray.forEach(function (letter, i) {
          setTimeout(function () {
            adviceSlip.innerHTML += letter;
          }, 75 * i);
        });
    })
}

generateAdvice(container)