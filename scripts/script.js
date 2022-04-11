const adviceId = document.querySelector("p.num")
const adviceSlip = document.querySelector("p.advice")

fetch("https://api.adviceslip.com/advice")
.then(response => {
    return response.json()
})
.then(data => {
    var advice = data.slip
    adviceId.innerHTML = `Advice ${advice.id}`
    
    var adviceRecv = advice.advice

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

