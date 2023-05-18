import { cE, qS, qSA, createMenuContent, addProducts, selectProduct} from "./utils/fn.js";



export const rootEl = qS("#root")



const headerSection = cE("div")

    const hiddenMenu = cE("div")
    const logoEl = cE("img")
    const menuList = cE("ul")
        const aboutListEl = cE("li")
        const productListEl = cE("li")
        const cartListEl = cE("li")
    const plusMenu = cE("div")
        const orizPlusMenu = cE("div")
        const vertPlusMenu = cE("div")

const heroSection = cE("div")
export const cartSection = cE("div")


headerSection.className = "header"
hiddenMenu.className = "hidden__menu"
heroSection.className = "hero"
cartSection.className = "cart__container"


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
rootEl.append(hiddenMenu)



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
heroText.textContent = "Lorem ipsum dolor sit amet"
heroTextCont.append(heroText)

const heroButton = cE("button")
heroButton.className = "hero__button"
heroButton.textContent = "Learn more"
heroTextCont.append(heroButton)

// search section

const filterDiv = cE("div")
const searchDiv = cE("div")
const filterBtnAll = cE("button")
const filterBtnCheap = cE("button")
const filterBtnExp = cE("button")
const filterBtnCategory = cE("select")
const searchInput = cE("input")

filterDiv.className = "filter__nav"
searchDiv.className = "search__div"
searchInput.className = "search__input"
filterBtnAll.className = "filter__button"
filterBtnCheap.className = "filter__button"
filterBtnExp.className = "filter__button"
filterBtnCategory.className = "filter__button"

filterBtnAll.textContent= "All"
filterBtnCheap.textContent = "Cheaper"
filterBtnExp.textContent = "Expensive"
filterBtnCategory.textContent = "Category"

rootEl.append(searchDiv)
searchDiv.append(filterDiv, searchInput)
filterDiv.append(filterBtnAll, filterBtnCheap, filterBtnExp, filterBtnCategory)



// PRODUCTS SECTION / ASYNC



const productsCard = cE("div")
productsCard.className = "products__container"
rootEl.append(productsCard);

let productsArray = []
export let cartItems = []

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    
    productsArray = data.products  
    productsArray.forEach((product) =>
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

  // EVENTS 

  // Toggle Menu 

  plusMenu.addEventListener("click", () => {
      hiddenMenu.textContent = ""
      vertPlusMenu.classList.toggle("minus__menu")
      hiddenMenu.classList.toggle("visible__menu")
      logoEl.classList.toggle("menu__logo")
      createMenuContent()
  }) 

  

 
  // Search input

  searchInput.addEventListener("input", (evt) => {

    productsCard.textContent = "";
  
  
  productsArray
  .filter((product) =>
        product.description.toLowerCase().includes(evt.target.value.toLowerCase())
      )
      .forEach((obj) => productsCard.append(addProducts(obj)));

  });

  // filter buttons

  filterBtnExp.addEventListener("click", () => {
    
    productsCard.textContent = "";
    
  productsArray
  .filter((product) =>
        product.price > 200)
      .forEach((obj) => productsCard.append(addProducts(obj)));

  });

  filterBtnCheap.addEventListener("click", () => {
    
    productsCard.textContent = "";
    
  productsArray
  .filter((product) =>
        product.price < 200)
      .forEach((obj) => productsCard.append(addProducts(obj)));

  });

  filterBtnCategory.addEventListener("click", () => {
    
    productsCard.textContent = "";
    //Incompleto

  });

  filterBtnAll.addEventListener("click", () => {
    
    productsCard.textContent = "";
    
  productsArray
  .filter((product) =>
        product.price > 0)
      .forEach((obj) => productsCard.append(addProducts(obj)));
  
  

  });


// CART SECTION 












