import { rootEl, selectEl, langEng, langIt, selectText, langText, selectionInfo } from "../script.js"

export const elementGen = (type, className, content, ...attrs) => {
    const element = document.createElement(type)
    element.className = className
    element.textContent = content
    attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value))

    return element
}


/* export const renderInfo = () => { selectionInfo.remove()
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

    return rootEl
   } */

let APIkey = `cfaf916e973424b09674a8559bd7b7cf`


export const getWheaterData = async (cityName) => {
   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=it&appid=${APIkey}`)
    const data = await response.json()

    return data
}

