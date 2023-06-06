import { renderOptions, wheaterPlaces} from "./utils/PAdata.js";
import { getWheaterData, elementGen } from "./utils/fn.js";
import { loadingPageScript} from "./utils/loadingPage.js";

loadingPageScript()

export const rootEl = document.querySelector("#root")
export const selectEl = document.querySelector("#pa__places")
export const langEng = document.querySelector(".lang__eng")
export const langIt = document.querySelector(".lang__it")
export const selectText = document.querySelector(".select__text")
export const langText = document.querySelector(".lang__text")
export const selectionInfo = elementGen("div")

renderOptions()

const showData = (somewhere) => {
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

    const dailyWheater = elementGen("h3", "dayly__wheater")
    const currentWheater = elementGen("img", "current-weather__icon")
    const currentTemp = elementGen("h3", "current__temp")
    const placeCoord = elementGen("p", "place__coord")
    
    wheaterInfo.append(dailyWheater, currentWheater, currentTemp, placeCoord)
    selectionInfo.append(wheaterInfo, mapField, graphicDiv)
    rootEl.append(selectionInfo)

    getWheaterData(somewhere)
    .then((data) => {
        
        console.log("point")
        console.log(data)
        const relativeCelsiusTemp = Math.floor(data.main.temp - 273.5) + "°"
        const relativeIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        const relativeCoord = data.coord.lon + " / " + data.coord.lat
        const relativeWheater = data.weather[0].description
        
        dailyWheater.textContent = relativeWheater
        currentWheater.src = relativeIcon
        currentTemp.textContent = relativeCelsiusTemp
        placeCoord.textContent = relativeCoord
    })
    
    

}

// EVENTS

langEng.addEventListener("click", () => {
    selectText.textContent = "Choose a place"
    langText.textContent = "Change language"
} )

langIt.addEventListener("click", (e) => {
    selectText.textContent = "Scegli un luogo"
    langText.textContent = "Cambia lingua"
    console.log(e)
} )



selectEl.addEventListener("change", (e) => {
    let foundElement = wheaterPlaces.find(element => element.name === e.target.value)
    selectionInfo.textContent = ""
    showData(foundElement.value)
})
