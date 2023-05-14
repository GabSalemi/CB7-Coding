const cE = (element) => document.createElement(element);
const qS = (element) => document.querySelector(element);
const rootEl = document.getElementById("root") //Root div

// Creazione pagina

const imgChanger = cE("div") // slider container
imgChanger.classList.add("img__changer")
rootEl.append(imgChanger)

const imgElement = cE("img") // Immagine
imgElement.classList.add("img__element")
imgChanger.append(imgElement)

const logo = cE("h1") //Logo 
logo.classList.add("fixed__logo")
imgChanger.append(logo)
logo.textContent = "^"

const leftButton = cE("div") // Cambio sinista
leftButton.classList.add("left__button")
imgChanger.append(leftButton)

const rightButton = cE("div") // Cambio destra
rightButton.classList.add("right__button")
imgChanger.append(rightButton)

const buttonsDiv = cE("div") // Container btns navigazione
buttonsDiv.classList.add("changer__div")
imgChanger.append(buttonsDiv)

const firstBtn = cE("div") // Btn prima img
firstBtn.classList.add("changer__button")
buttonsDiv.append(firstBtn)

const secondBtn = cE("div") // Btn seconda img
secondBtn.classList.add("changer__button")
buttonsDiv.append(secondBtn)

const thirdBtn = cE("div") // Btn terza img
thirdBtn.classList.add("changer__button")
buttonsDiv.append(thirdBtn)


const pageTitle = cE("h1") // Single Page Title
pageTitle.classList.add("page__title")
imgChanger.append(pageTitle)
pageTitle.textContent = "Damasco"

// Slider

let pageImages = [{
    id: 1,
    url: "damasco_moschea.jpg",
    url2: "damasco_moschea.jpg",
    titolo: "Moschea degli Ommayadi",
    descrizione: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, cum."
}, {
    id: 2,
    url: "damasco_citta2.jpg",
    url2: "damasco_citta.jpg",
    titolo: "Strade di Damasco",
    descrizione: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ipsam!"
}, {
    id: 3,
    url: "afamia_syria.jpg",
    url2: "fuori_syria.jpg",
    titolo: "Oltre la città",
    descrizione: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, cum."

}]

let pageImgsIndex = 0
imgElement.src = pageImages[pageImgsIndex].url

// Set interval 

setInterval(() => {
    if (window.scrollY < 100) { // Scroll Y - Interrompi SetInterval
        if (pageImgsIndex === pageImages.length -1) {
            pageImgsIndex = 0
            imgElement.src = pageImages[pageImgsIndex].url
        }
        
        pageImgsIndex++
        imgElement.src = pageImages[pageImgsIndex].url
    } 
}, 5000) 

// cambio img laterale

leftButton.addEventListener("click", () => {
    if (pageImgsIndex <= 0) {
        pageImgsIndex = pageImages.length -1
        imgElement.src = pageImages[pageImgsIndex].url 
    } else {
    pageImgsIndex--
    imgElement.src = pageImages[pageImgsIndex].url
    }}) 

rightButton.addEventListener("click", () => {
    if (pageImgsIndex >= pageImages.length -1) {
        pageImgsIndex = 0
        imgElement.src = pageImages[pageImgsIndex].url  
    } else {
    pageImgsIndex++
    imgElement.src = pageImages[pageImgsIndex].url
}}) 

// Selezione img 

firstBtn.addEventListener("click", () => {
    imgElement.src = pageImages[0].url
})

secondBtn.addEventListener("click", () => {
    imgElement.src = pageImages[1].url
})

thirdBtn.addEventListener("click", () => {
    imgElement.src = pageImages[2].url
})

// parti successive pagina


        const generalDiv = cE("div")
        generalDiv.classList.add("general__div")
        rootEl.append(generalDiv)

            const imagesContainer = cE("div")
            imagesContainer.classList.add("images__container")
            generalDiv.append(imagesContainer)

            const textContainer = cE("div")
            textContainer.classList.add("text__container")
            generalDiv.append(textContainer)

            const sectionTitle = cE("h2")
            sectionTitle.classList.add("section__title")
            textContainer.append(sectionTitle)

            const sectionText = cE("p")
            sectionText.classList.add("section__text")
            textContainer.append(sectionText)

            const nextButton = cE("div")
            nextButton.classList.add("next__button")
            textContainer.append(nextButton)

            const bigImageCont = cE("div")
            bigImageCont.classList.add("big-image__container")
            imagesContainer.append(bigImageCont)

            const bigImgEl = cE("img")
            bigImgEl.classList.add("big-image__element")
            bigImageCont.append(bigImgEl)

            const smallImagesCont = cE("div")
            smallImagesCont.classList.add("small-images__container")
            imagesContainer.append(smallImagesCont)

            const firstSImg = cE("div")
            firstSImg.classList.add("first-img__element")
            smallImagesCont.append(firstSImg)

            const secondSImg = cE("div")
            secondSImg.classList.add("second-img__element")
            smallImagesCont.append(secondSImg)

            const firstSImgEl = cE("img")
            firstSImgEl.classList.add("big-image__element")
            firstSImg.append(firstSImgEl)

            const secondSImgEl = cE("img")
            secondSImgEl.classList.add("big-image__element")
            secondSImg.append(secondSImgEl)


            window.addEventListener("scroll", () => {
              
                if (pageImgsIndex === 0) {
                    bigImgEl.src = pageImages[pageImgsIndex].url2
                    firstSImgEl.src = pageImages[1].url2
                    secondSImgEl.src = pageImages[2].url2
                    sectionTitle.textContent = pageImages[pageImgsIndex].titolo
                    sectionText.textContent = pageImages[pageImgsIndex].descrizione
                    

                } else if (pageImgsIndex === 1) {
                    bigImgEl.src = pageImages[pageImgsIndex].url2
                    firstSImgEl.src = pageImages[0].url2
                    secondSImgEl.src = pageImages[2].url2
                    sectionTitle.textContent = pageImages[pageImgsIndex].titolo
                    sectionText.textContent = pageImages[pageImgsIndex].descrizione
                    
                } else {
                    bigImgEl.src = pageImages[pageImgsIndex].url2
                    firstSImgEl.src = pageImages[1].url2
                    secondSImgEl.src = pageImages[0].url2
                    sectionTitle.textContent = pageImages[pageImgsIndex].titolo
                    sectionText.textContent = pageImages[pageImgsIndex].descrizione
                }

            })

let changeDirection = function() {
    if (generalDiv.classList.contains("general__div")) {
        generalDiv.classList.remove("general__div")
        generalDiv.classList.add("general-inv__div")
        nextButton.remove()
    } else {
        generalDiv.classList.remove("general-inv__div")
        generalDiv.classList.add("general__div")
        nextButton.remove()
    }
}

let changeSection = () => {
        if (pageImgsIndex === 0) {
            bigImgEl.src = pageImages[2].url2
            firstSImgEl.src = pageImages[1].url2
            secondSImgEl.src = pageImages[0].url2
            sectionTitle.textContent = pageImages[2].titolo
                    sectionText.textContent = pageImages[2].descrizione

        } else if (pageImgsIndex === 1) {
            bigImgEl.src = pageImages[0].url2
            firstSImgEl.src = pageImages[1].url2
            secondSImgEl.src = pageImages[2].url2
            sectionTitle.textContent = pageImages[0].titolo
                    sectionText.textContent = pageImages[0].descrizione

            } else {
            bigImgEl.src = pageImages[1].url2
            firstSImgEl.src = pageImages[0].url2
            secondSImgEl.src = pageImages[2].url2
            sectionTitle.textContent = pageImages[1].titolo
                    sectionText.textContent = pageImages[1].descrizione
        }
}


nextButton.addEventListener("click", changeDirection)
nextButton.addEventListener("click", changeSection)



