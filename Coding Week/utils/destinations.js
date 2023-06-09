import { rootEl, selectEl } from "../script.js";
import { elementGen } from "./fn.js";
import { wheaterPlaces } from "./placeData.js";



export const destPageGen = () => {
    let links = document.querySelector(".menu__div")
    links.classList.remove("flex")
    const destinationsDiv = elementGen("div", "dest__field")
    rootEl.append(destinationsDiv)
    let homeLogo = document.querySelector(".loader__img")
    destinationsDiv.classList.toggle("show")
    
    const DestTitle = elementGen("h2", "dest__title", "Destinations")
    const searchInput = elementGen("input", "search__input", "", {name: "type", value: "text"})
    const destsContainer = elementGen("div", "dests__container")
    destinationsDiv.append(DestTitle, searchInput, destsContainer)
    

    searchInput.addEventListener("input", (e) => {
        destsContainer.textContent = ""
        let searchValue = e.target.value
        let searchValLower = searchValue.toLowerCase()
     
        wheaterPlaces.forEach((place) => {
            if(place.value.includes(searchValLower)) {

                const destCard = elementGen("div", "dest__card")
                const destInfo = elementGen("div", "dest-info__cont")
                const destName = elementGen("h3", "dest__name")
                const destPop = elementGen("p", "dest__population")
                const destImgCont = elementGen("div", "dest-img__cont")
                const destImg = elementGen("img", "dest__img")

                destInfo.append(destName, destPop)
                destImgCont.append(destImg)
                destName.textContent = place.name + ", Province of Palermo"
                destPop.textContent = "Residents: " + place.residents
                destImg.src = place.img
                destCard.append(destInfo, destImgCont)
                destsContainer.appendChild(destCard)
                rootEl.style.overflow = "scroll"

        }})
       })

    homeLogo.addEventListener("click", () => {
        destinationsDiv.classList.remove("show")
        rootEl.style.overflow = "hidden"
        destinationsDiv.textContent = ""
        rootEl.style.overflowX = "hidden"
    })
}
    