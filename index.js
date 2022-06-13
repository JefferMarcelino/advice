const main = document.querySelector("main")
let lastMother = document.querySelector(".mother:last-child")

const observerLast = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadBasicStructure()
            observerLast.unobserve(lastMother)
            lastMother = document.querySelector(".mother:last-child")
            observerLast.observe(lastMother)
        }
    })
}, {
    rootMargin: "-300px"
})


const loadBasicStructure = () => {
    console.log("Hey2")
    const divMother = document.createElement("div")
    divMother.setAttribute("id", `${document.querySelectorAll("section").length}`)
    divMother.classList.add("mother")

    const sectionContainer = document.createElement("section")
    sectionContainer.classList.add("container")
    
    const divProfile = document.createElement("div")
    divProfile.classList.add("profile")

    const img = document.createElement("img")
    img.setAttribute("src", "./images/avatar.svg")

    const paragraph = document.createElement("p")
    paragraph.innerText = "@Unknow"
    
    const divText = document.createElement("div")
    divText.classList.add("text")

    sectionContainer.appendChild(divProfile)
    divProfile.appendChild(img)
    divProfile.appendChild(paragraph)
    sectionContainer.appendChild(divText)
    divMother.appendChild(sectionContainer)
    
    const adviceSlip = document.createElement("p");
    adviceSlip.classList.add("advice")
    divText.appendChild(adviceSlip)
    
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
        adviceSlip.innerHTML = `${data.slip.advice}`
    })
    
    backgroungGeneretor(13, Number(document.querySelectorAll("section").length))
    
    main.appendChild(divMother)
}

const backgroungGeneretor = (limit=13, id) => {
    const sections = document.querySelectorAll(".mother")
    console.log(sections)
    let img = 0
    
    while(img <= 0) {
        img = Math.floor(Math.random() * limit)
    }
    
    sections[id-1].style.backgroundImage = `url("./images/${img}.jpg")`
}

observerLast.observe(lastMother)