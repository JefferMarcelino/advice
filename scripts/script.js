const adviceapi = fetch("https://api.adviceslip.com/advice");
const container = document.querySelector("div.text");

const adviceId = document.createElement("p");
adviceId.setAttribute("class", "num");

const adviceSlip = document.createElement("p");
adviceSlip.setAttribute("class", "advice");

const image = document.querySelector("div img");

const nextButton = document.querySelector("#btn-next")

const showAdvice = (async function () {
  const doc = await (await adviceapi).json();
  try {
    const slip = doc.slip;

    adviceId.innerHTML = `Advice ${slip.id}`;

    container.appendChild(adviceId);
    container.appendChild(adviceSlip);
    var adviceRecv = slip.advice;

    image.style.display = "none";
    image.style.opacity = "0";

    const textoArray = adviceRecv.split("");
    adviceSlip.innerHTML = " ";
    
    textoArray.forEach(function (letter, i) {
      setTimeout(function () {
        adviceSlip.innerHTML += letter;
        if (i === (textoArray.length - 1)) {
          nextButton.classList.remove("hide")
        }
      }, 75 * i);
    });


  } catch (error) {
    console.log(doc);
  }
})();