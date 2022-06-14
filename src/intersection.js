let mothers = document.querySelectorAll(".mother")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry.target)
            //loadAdvice()
            observer.unobserve(entry.target)
            
            mothers = document.querySelectorAll(".mother")

            mothers.forEach(mother => {
                observer.observe(mother)
            })
        }
    })
})

mothers.forEach(mother => {
    observer.observe(mother)
})

const loadAdvice = (divText) => {
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