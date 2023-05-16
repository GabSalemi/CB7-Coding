import { cE, qS, qSA, addProducts, selectProduct} from "./utils/fn.js";



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



const productsCard = cE("div")
const productTitle = cE("h2");

productsCard.className = "products__cards"
productTitle.textContent = "Products for you!";

rootEl.append(productTitle, productsCard);

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.products.forEach((product) =>
      productsCard.append(addProducts(product))
    )
}) 
  .then(() => {
    const singleCards = qSA(".single__card");

    singleCards.forEach((product) =>
      product.addEventListener("click", () =>
        fetch(`https://dummyjson.com/products/${product.id}`)
          .then((res) => res.json())
          .then((data) => rootEl.append(selectProduct(data, rootEl)))
      )
    );
  });







