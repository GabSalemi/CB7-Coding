import { renderOptions, wheaterPlaces} from "./utils/placeData.js";
import { getWheaterData, elementGen} from "./utils/fn.js";
import { loadingPageScript} from "./utils/loadingPage.js";
import { graphicGen } from "./utils/graphic.js";
import { destPageGen } from "./utils/destinations.js";

loadingPageScript()

export const rootEl = document.querySelector("#root")
export const selectEl = document.querySelector("#pa__places")
export const langEng = document.querySelector(".lang__eng")
export const langIt = document.querySelector(".lang__it")
export const selectText = document.querySelector(".select__text")
export const langText = document.querySelector(".lang__text")
export const selectionInfo = elementGen("div")
const optionPh = document.querySelector(".option__ph")

renderOptions()

const showData = (somewhere, someimg) => {
    // renderInfo()
    selectionInfo.remove()
    langEng.remove()
    langIt.remove()
    selectText.remove()
    langText.remove()
    selectionInfo.className = "selection-info__container"

    const choiceSel = document.querySelector(".input__field")
    choiceSel.classList.add("chosed")
    const wheaterInfo = elementGen("div", "wheater-info__field")
    const mapField = elementGen("div", "map__field")
    const graphicDiv = elementGen("div", "graphic__div")
    const localMap = elementGen("div", "", "", {name: "id", value: "map"})

    mapField.append(localMap)

    const dailyWheater = elementGen("h3", "daily__wheater")
    const currentWheater = elementGen("img", "current-weather__icon")
    const currentTemp = elementGen("h3", "current__temp")
    const placeCoord = elementGen("p", "place__coord")
    
    wheaterInfo.append(dailyWheater, currentWheater, currentTemp, placeCoord)
    selectionInfo.append(wheaterInfo, mapField, graphicDiv)
    rootEl.append(selectionInfo)

    let lang = ""
        if (langEng.classList.contains("eng")) {
            lang = "eng"
        } else if (langIt.classList.contains("it")) {
            lang = "it"
        } else {lang = "eng"}

    
    
    getWheaterData(somewhere, lang, someimg)
    .then((data) => {
        
        console.log("point")
        console.log(data)
        const relativeCelsiusTemp = Math.floor(data.main.temp - 273.5) + "°"
        const relativeIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        const relativeCoord = data.coord.lon + " / " + data.coord.lat
        const relativeWheater = data.weather[0].description
        let slicedIcon = data.weather[0].icon.slice(0, -1)

        graphicDiv.append(graphicGen(data.weather[0].main, slicedIcon))
        const localTitle = elementGen("h2", "local__title", data.name)
        mapField.append(localTitle)

        dailyWheater.textContent = relativeWheater
        currentWheater.src = relativeIcon
        currentTemp.textContent = relativeCelsiusTemp
        placeCoord.textContent = relativeCoord
        console.log(somewhere)
        if (somewhere === "palermo") {
            mapboxgl.accessToken = 'pk.eyJ1IjoiZ2Fic2FsZW1pIiwiYSI6ImNsaWx5dzExeDA5ZHEza3FycHl2b2kyNWgifQ.7ilyS2KBW9bGQBoVnrlDbg';
            const map = new mapboxgl.Map({
            container: 'map', 
            style: 'mapbox://styles/mapbox/streets-v8', 
            center: [13.3548, 38.1093],
            zoom: 10,
        })} else {

        mapboxgl.accessToken = 'pk.eyJ1IjoiZ2Fic2FsZW1pIiwiYSI6ImNsaWx5dzExeDA5ZHEza3FycHl2b2kyNWgifQ.7ilyS2KBW9bGQBoVnrlDbg';
        const map = new mapboxgl.Map({
        container: 'map', 
        style: 'mapbox://styles/mapbox/streets-v12', 
        center: [data.coord.lon, data.coord.lat],
        zoom: 13,}
        
        
    )};
    
    localTitle.addEventListener("click", () => {
        
        localTitle.classList.add("link")
        mapField.textContent = ""
        rootEl.style.overflow = "hidden"
        const localImg = elementGen("img", "local__img", "", {name: "src", value: someimg})
        mapField.append(localImg, localTitle)
        localTitle.addEventListener("click", () => {
            destPageGen()
            let searchInput = document.querySelector(".search__input")
            searchInput.setAttribute("placeholder", localTitle.textContent)
            wheaterPlaces.find(place => {
                if(place.value === somewhere){
                    const destsContainer = document.querySelector(".dests__container")
                    destsContainer.textContent = ""
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
                    destsContainer.append(destCard)
                    rootEl.style.overflow = "scroll"
                    let homeLogo = document.querySelector(".loader__img")
                    let destinationsDiv = document.querySelector(".dest__field")

                    homeLogo.addEventListener("click", () => {
                        destsContainer.textContent = ""
                        destinationsDiv.classList.remove("show")
                        rootEl.style.overflow = "hidden"
                        rootEl.style.overflowX = "hidden"
                    })
            }})        
            })      
        })
    })
    
}


selectEl.addEventListener("change", (e) => {
    let foundElement = wheaterPlaces.find(element => element.name === e.target.value)
    selectionInfo.textContent = ""
    optionPh.style.display = "none"
    showData(foundElement.value, foundElement.img)
})

