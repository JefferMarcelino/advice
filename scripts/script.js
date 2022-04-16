const adviceapi = fetch("https://api.adviceslip.com/advice");
const container = document.querySelector("div.text");

const adviceId = document.createElement("p");
adviceId.setAttribute("class", "num");

const adviceSlip = document.createElement("p");
adviceSlip.setAttribute("class", "advice");

const image = document.querySelector("div img");



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

    textoArray.forEach(function (letra, i) {
      setTimeout(function () {
        adviceSlip.innerHTML += letra;
      }, 75 * i);
    });
  } catch (error) {
    console.log(doc);
  }
})();



