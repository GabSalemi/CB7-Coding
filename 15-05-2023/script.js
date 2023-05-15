//import { cE, qS } from "./utils/fn";

const cE = (element) => document.createElement(element);
const qS = (element) => document.querySelector(element);


const rootEl = qS("#root")


const headerSection = cE("div")

    const logoEl = cE("img")
    const menuList = cE("ul")
        const aboutListEl = cE("li")
        const productListEl = cE("li")
        const cartListEl = cE("li")
    const plusMenu = cE("div")
        const orizPlusMenu = cE("div")
        const vertPlusMenu = cE("div")

const heroSection = cE("div")

headerSection.className = "header"
heroSection.className = "hero"

logoEl.className = "header__logo" 
logoEl.src = "https://img.logoipsum.com/221.svg"
logoEl.alt = "Page logo"
menuList.className = "header__list"
aboutListEl.textContent = "About"
productListEl.textContent = "Products"
cartListEl.textContent = "Cart"
plusMenu.className = "header__plus-menu"
vertPlusMenu.classList.add("vert__menu")
orizPlusMenu.classList.add("oriz__menu")

rootEl.append(headerSection)
rootEl.append(heroSection)

headerSection.append(logoEl)
headerSection.append(menuList)
menuList.append(aboutListEl)
menuList.append(productListEl)
menuList.append(cartListEl)

headerSection.append(plusMenu)
plusMenu.append(orizPlusMenu)
plusMenu.append(vertPlusMenu)

const heroImg = cE("img")
heroImg.className = "hero__img"
heroImg.src = "https://picsum.photos/1600"
heroImg.alt = "casualProduct"
heroSection.append(heroImg)

const heroTextCont = cE("div")
heroTextCont.className = "hero__text-cont"
heroSection.append(heroTextCont)

const heroText = cE("h1")
heroText.className = "hero__text"
heroText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, amet."
heroTextCont.append(heroText)

const heroButton = cE("button")
heroButton.className = "hero__button"
heroButton.textContent = "Learn more"
heroTextCont.append(heroButton)

// PRODUCTS SECTION

//Product gen


const addProducts = (product) => {
    
   

    const productTitle = cE("h2")
    const productRate = cE("p")
    const productDesc = cE("p")
    const productImg = cE("img")
    const productPrice = cE("h3") 
    const productButton = cE("button")

    productTitle.className = "product__title"
    productRate.className = "product__rate"
    productDesc.className = "product__description"
    productImg.className = "product__img"
    productImg.src = product.thumbnail
    productImg.alt = product.title
    productPrice.className = "product__price"
    productButton.className = "addToCart__button"

    productTitle.textContent = product.title
    productRate.textContent = product.rating
    productDesc.textContent = product.description
    productPrice.textContent = product.price
    productButton.textContent = "Add to cart!"

    productCard.append(productImg, productRate, productTitle, productDesc, productPrice, productButton)
   
}


const productCard = cE("div")
productCard.className = "products__card"


const productSectionTitle = cE("h2");
productSectionTitle.textContent = "Let's find out our products!";

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) =>
    data.products.forEach((product) =>
      productCard.append(addProducts(product))
    )
  );

rootEl.append(productSectionTitle, productCard);




