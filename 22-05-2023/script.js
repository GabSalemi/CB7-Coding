import { getWeather, createElement, getflag } from "./utils/fn.js";
import { countryInfo } from "./country.js";

const rootEl = document.querySelector("#root")
const modalDiv = createElement("div", "modal__weather", "")
const titleDiv = createElement("h1", "page__title", "Current Random Weather")
const labelInput = createElement("label", "input__label", "Chose your city:")
const inputEl = createElement("input", "input__city", "")
const resultDiv = createElement("h2", "city__name", "")




modalDiv.append(titleDiv, labelInput, inputEl)
rootEl.append(modalDiv)



inputEl.addEventListener("change", (e) => {
    getWeather(e.target.value).then((data) => {
       console.log(data)
        const resultCity = createElement("h2", "city__name", data.location.name + ", " + data.location.country)
        const resultTemp = createElement("h3", "city__temp", data.current.temp_c)
        const imgTemp = createElement("img", "temp__img", "")
        imgTemp.src = data.current.condition.icon
        
        modalDiv.append(resultCity, resultTemp, imgTemp)
        let nationName = data.location.country
        console.log(nationName)

            function isNation(nation) {
                return nation.name === nationName;
            }
            let countryName = countryInfo.find(isNation)
            let countryCode = countryName.code
                getflag(countryCode).then ((dataFlag) => {
                    const flagImg = createElement("img", "flag__img", dataFlag)
                    modalDiv.append(flagImg)
                    
                })
        
        });
            
        }
    )

 