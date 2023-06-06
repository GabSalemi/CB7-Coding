import { elementGen } from "./fn.js"

const rootEl = document.querySelector("#root")

export const loadingPageScript = () => {
    
    const loaderDiv = elementGen("div", "loader__div")
    const loaderImg = elementGen("img", "loader__img")
    loaderImg.src = "https://openweathermap.org/img/wn/01d@2x.png"
    loaderDiv.append(loaderImg)
    rootEl.append(loaderDiv)

    setTimeout(() => {
        loaderImg.src = "https://openweathermap.org/img/wn/01d@2x.png"
        setTimeout(() => {
            loaderImg.src = "https://openweathermap.org/img/wn/03d@2x.png"
            setTimeout(() => {
                loaderImg.src = "https://openweathermap.org/img/wn/10d@2x.png"
                setTimeout(() => {
                    loaderImg.src = "https://openweathermap.org/img/wn/50d@2x.png"
                    setTimeout(() => {
                        loaderImg.src = "https://img.logoipsum.com/298.svg"
                        
                            setTimeout(() => {
                                loaderImg.style.position = "fixed"
                                loaderImg.style.width = "40px"
                                loaderImg.style.height = "40px"
                                setTimeout(() => {
                                    loaderImg.style.left = "90%"
                                    loaderDiv.style.width = "0"
                                    setTimeout(() => {
                                         loaderDiv.style.height = "20vh"
                                            // loaderDiv.remove()
                                      }, 2000)
                                }, 500)
                            }, 500)
                    }, 300)
                }, 600)
            }, 600)
        }, 600)
    }, 400)
}