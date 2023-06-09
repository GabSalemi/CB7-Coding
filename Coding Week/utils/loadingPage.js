import { elementGen } from "./fn.js"
import { destPageGen } from "./destinations.js"


const rootEl = document.querySelector("#root")
const mainTitle = document.querySelector(".main__title")
const inputField = document.querySelector(".input__field")

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
                        loaderImg.classList.add("filter")
                            setTimeout(() => {
                                loaderImg.style.position = "fixed"
                                loaderImg.style.width = "40px"
                                loaderImg.style.height = "40px"
                                setTimeout(() => {                                    
                                    loaderImg.style.left = "10%"
                                    loaderDiv.style.width = "0"
                                    setTimeout(() => {
                                         loaderDiv.style.height = "20vh"
                                            const menuDiv = elementGen("div", "menu__div")
                                            const homeLink = elementGen("span", "home__link", "Home")
                                            const aboutLink = elementGen("span", "about__link", "About") 
                                            const destLink = elementGen("span", "destination__link", "Destinations")
                                            menuDiv.append(homeLink, aboutLink, destLink)
                                            loaderDiv.append(menuDiv)

                                            loaderImg.addEventListener("click", () => {
                                                menuDiv.classList.toggle("flex")
                                                if (inputField.classList.contains("chosed")) {
                                            mainTitle.classList.toggle("none")
                                            inputField.classList.toggle("down")
                                            }
                                            destLink.addEventListener("click", () => {
                                                destPageGen()
                                            })
                                         })
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