const container = document.querySelector("div.text")

const adviceId = document.createElement("p")
adviceId.setAttribute("class", "num")

const adviceSlip = document.createElement("p")
adviceSlip.setAttribute("class", "advice")

const image = document.querySelector("div img")


fetch("https://api.adviceslip.com/advice")
.then(response => {
    return response.json()
})
.then(data => {
    var advice = data.slip
    adviceId.innerHTML = `Advice ${advice.id}`
    
    container.appendChild(adviceId)
    container.appendChild(adviceSlip)
    var adviceRecv = advice.advice

    image.style.display = "none"
    image.style.opacity = "0"

    const textoArray = adviceRecv.split('');
    adviceSlip.innerHTML = ' ';

    textoArray.forEach(function(letra, i){   
    setTimeout(function(){
        adviceSlip.innerHTML += letra;
    }, 75 * i)
  });
})
.catch(err => {
    adviceSlip.innerHTML = `Failed to fetch data`
})

