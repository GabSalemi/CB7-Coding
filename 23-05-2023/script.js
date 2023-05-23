
import { elementGen, GET, DELETE, POST, createLogin} from "/utils/function.js"
import { userList } from "./credentials.js"

// script.js

const rootEl = document.getElementById("root")
const firstRoot = document.querySelector(".root__first-child")
const secondRoot = document.querySelector(".root__second-child")
const siteName = elementGen("h1", "site__name", "EUSTOMA")
firstRoot.append(siteName)

const loginForm = createLogin(firstRoot)
const formEl = document.querySelector(".login__form")
    
formEl.addEventListener("submit", (e) => {
        e.preventDefault()
        
        if (userList.find(
            (user) =>
             user.email === e.srcElement[0].value &&
            user.password === e.srcElement[1].value)) 
            {  
                let x = userList.find(
                (user) =>
                   user.email === e.srcElement[0].value &&
                   user.password === e.srcElement[1].value)
                    
                   let xId = x.id
               firstRoot.textContent = ""
               secondRoot.textContent = ""
                    const profileText = elementGen("h2", "profile__text", "Ciao " + x.firstName + "!", "")
                    firstRoot.append(profileText)
                    const pageTitle = elementGen("h1", "site__name", "EUSTOMA")
                    rootEl.append(pageTitle)


                    GET(`/carts/${xId}`).then((data) => {
                        const heroImg = elementGen("img", "hero__img", "", {name: "src", value: "https://cdn.pixabay.com/photo/2017/10/30/21/25/flower-2903559_960_720.png"})
                        rootEl.append(heroImg)
                        firstRoot.className = "credential__div"
                        secondRoot.className = "cart__div"
                        const cartTitle = elementGen("h2", "cart__text", "", "")
                        secondRoot.append(cartTitle)

                    if (data.products.length > 0) {
                    data.products.forEach((product) => {
                        
                        cartTitle.textContent = "Ecco i tuoi prodotti!"
                        const cartProductDiv = elementGen("div", "product__div", "", "")
                        const productTitle = elementGen("h3", "product__title", product.title, "")
                        const productPrice = elementGen("p", "product__price", product.price + "$", "")
                        
                        secondRoot.append(cartProductDiv)
                        cartProductDiv.append(productTitle, productPrice)
                        
                        //cartProductDiv.addEventListener("click", () =>
                        //DELETE("/1")
                        //)
                    
                    })} else {
                        const emptyCartTitle = ("h2", "cart__text", "Non hai ancora scelto alcun prodotto", "")
                        secondRoot.append(emptyCartTitle)
                    }

        })} else {
            firstRoot.textContent = ""
            const productAdvice = elementGen("h2", "cart__text", "Non sei registrato, ma ecco per te alcuni dei nostri prodotti!", "")
            firstRoot.append(productAdvice)

            POST("/add", {
                titolo: "Nuovo prodotto"
                
            })
        }})




