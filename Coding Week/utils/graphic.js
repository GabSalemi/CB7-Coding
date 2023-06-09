import { elementGen } from "./fn.js"

const graphicField = elementGen("div", "graphic__field")

const sunGraphicGen = () => {
    graphicField.classList.add("sunny")
    const sunGraphicEl = elementGen("div", "sun-graphic__el")
    graphicField.append(sunGraphicEl)
}

const cloudGraphicGen = () => {
    graphicField.classList.add("cloudy")
    const firstCloudGraphicEl = elementGen("div", "first-cloud__el")
    const secondCloudGraphicEl = elementGen("div", "second-cloud__el")
    graphicField.append(firstCloudGraphicEl, secondCloudGraphicEl)
}

const rainGraphicGen = () => {
    graphicField.classList.add("rainy")
    const firstRainGraphicEl = elementGen("div", "first-rain__el")
    const secondRainGraphicEl = elementGen("div", "second-rain__el")
    graphicField.append(firstRainGraphicEl, secondRainGraphicEl)
}

const mistGraphicGen = () => {
    graphicField.classList.add("misty")
    const firstMistGraphicEl = elementGen("div", "first-mist__el")
    const secondMistGraphicEl = elementGen("div", "second-mist__el")
    graphicField.append(firstMistGraphicEl, secondMistGraphicEl)
}

export const graphicGen = (relativeData, relativeIcon) => {
    switch(relativeIcon) {
        case "01":
            graphicField.textContent = ""
            sunGraphicGen()
          break;
        case "02":
            graphicField.textContent = ""
            sunGraphicGen()
          break;
        case "03":
          graphicField.textContent = ""
            cloudGraphicGen()
          break;
        case "04":
          graphicField.textContent = ""
            cloudGraphicGen()
          break;
        case "09":
          graphicField.textContent = ""
            rainGraphicGen()
          break;
        case "10":
          graphicField.textContent = ""
            rainGraphicGen()
          break;
        case "11":
          graphicField.textContent = ""
            rainGraphicGen()
          break;
        case "13":
          graphicField.textContent = ""
            mistGraphicGen()
          break;
        case "50":
          graphicField.textContent = ""  
            mistGraphicGen()
          break;
        default:
          graphicField.textContent = ""
      }

    
    return graphicField
}   

