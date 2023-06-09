import { rootEl, selectEl, langEng, langIt, selectText, langText, selectionInfo } from "../script.js"

export const elementGen = (type, className, content, ...attrs) => {
    const element = document.createElement(type)
    element.className = className
    element.textContent = content
    attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value))

    return element
}

let APIkey = `cfaf916e973424b09674a8559bd7b7cf`


export const getWheaterData = async (cityName, lang) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=${lang}&appid=${APIkey}`)
    try {
        if (response.status >= 300 && response.status <= 599 && langEng.classList.contains("eng")) {
            console.log("Server down")
            throw new Error("Errore") 
        } else if (response.status >= 300 && response.status <= 599 && langIt.classList.contains("it")) {
            console.log("Il server non risponde")
            throw new Error("Error") 
        }
        return response.json();
    
    } catch(error) { 
        console.log(error)
    } 
    const data = await response.json()

    return data
}



