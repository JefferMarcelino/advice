
document.getElementById("btn-next").addEventListener("click", async (e) => {
  document.getElementById("btn-next").classList.add("hide")
  const adviceapi = fetch("https://api.adviceslip.com/advice");
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
          document.getElementById("btn-next").classList.remove("hide")
        }
      }, 75 * i);
    });
  } catch (error) {
    console.log(doc);
  }
  });
