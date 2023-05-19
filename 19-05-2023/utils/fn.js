export const cE = (element) => document.createElement(element);
export const qS = (element) => document.querySelector(element);
export const qSA = (element) => document.querySelectorAll(element);

import {bodyEl, cartSection, cartItems, rootEl} from "../script.js"
import { userList } from "./credentials.js";


// Create menu content 
export const createMenuContent = () => {
  const hiddenMenu = qS(".hidden__menu")

  const menuCont = cE("div")
  const menuUl = cE("ul")
  const menuAbout = cE("li") 
  const menuProducts = cE("li") 
  const menuCart = cE("li") 
  const menuContact = cE("li") 

  menuCont.className = "menu__container"
  menuUl.className = "menu__elements"
  menuAbout.className = "menu__element"
  menuProducts.className = "menu__element"
  menuCart.className = "menu__element"
  menuContact.className = "menu__element"

  menuAbout.textContent = "About"
  menuProducts.textContent = "Products"
  menuCart.textContent = "Cart"
  menuContact.textContent = "Contact"

  menuCont.append(menuUl)
  menuUl.append(menuAbout, menuProducts, menuCart, menuContact)

  hiddenMenu.append(menuCont)

  menuCart.addEventListener("click", () => {
    
    rootEl.append(createCartSection(rootEl))
    if (cartItems.lenght >= 1) {
      cartSection.textContent = "Your cart is empty!"}

    hiddenMenu.classList.remove("visible__menu")
    
    
    
  });

  return menuCont
}

 // Funzione di prova creazione elemento con classe e attributo

 const nuovoElemento = (elemName, className, content ) => {
  let elem = document.createElement(elemName)
  elem.className = className
  elem.textContent = content

  return elem
}


// Product card generator

export const addProducts = (product) => {
    const cardSection = cE("div") // Card Section
    cardSection.className = "card__section"
    
    const singleCard = cE("div")
    singleCard.className = "single__card"

      const cardText = cE("div")
      const productTitle = cE("h2")
      const productRate = cE("p")
      // const productDesc = cE("p")
      const productImg = cE("img")
      const productPrice = cE("h3") 
      const productButton = cE("button")
  
      singleCard.setAttribute("id", product.id);
      cardText.className = "card__text-cont"
      productTitle.className = "product__title"
      productRate.className = "product__rate"
      // productDesc.className = "product__description"
      productImg.className = "product__img"
      productImg.src = product.thumbnail
      productImg.alt = product.title
      productPrice.className = "product__price"
      productButton.className = "addToCart__button"
    
      if (product.rating > 4.8) {
        productRate.textContent = "★★★★★"
    } else if (product.rating < 4.8 && product.rating > 4.6) {
        productRate.textContent = "★★★★"
    } else if (product.rating < 4.6 && product.rating > 4.4) {
        productRate.textContent = "★★★"
    } else if (product.rating < 4.4 && product.rating > 4.2) {
        productRate.textContent = "★★"
    } else {productRate.textContent = "★"}
    


      productTitle.textContent = product.title
      //productRate.textContent = product.rating
      // productDesc.textContent = product.description
      productPrice.textContent = product.price + "$"
      productButton.textContent = "Add to cart"
    
    
      cardSection.append(singleCard)
      singleCard.append(productImg, cardText)
      cardText.append(productRate, productTitle, productPrice, productButton)
      
        return cardSection
  }

  // Selezion prodotto 

  export const selectProduct = (product, parent = null) => {
    const selectedCard = cE("div"); //card
    const overlayBg = cE("div");

    const galleryCont = cE("div"); // Galleria immagine
        const mainImg = cE("img");
        const otherImgs = cE("div")
        const secondImg = cE("img")
        const thirdImg = cE("img")
    
    const textCont = cE("div");
    
        const textContTitle = cE("h1");
        const textContDescription = cE("p");
    
    const buyBtn = cE("button");
    const seeOthersBtn = cE("button");
  
    selectedCard.className = "selected__card";
    overlayBg.className = "overlay__bg";
    galleryCont.className = "selected-card__gallery";
    mainImg.className = "main__img";
    mainImg.src = product.thumbnail;
    mainImg.alt = product.title;

    otherImgs.className = "other__images"
    secondImg.src = product.thumbnail;
    thirdImg.src = product.thumbnail;
    secondImg.alt = product.title;
    thirdImg.alt = product.title;
    secondImg.className = "second__img";
    thirdImg.className = "third__img";

    textCont.className = "selected-card__text";
    textContTitle.className = "text-cont__title";
    textContDescription.className = "text-cont__description";
    textContTitle.textContent = product.title;
    textContDescription.textContent = product.description;

    buyBtn.className = "buy__button";
    seeOthersBtn.className = "see-others__button"
  
    buyBtn.textContent = "Buy now";
    seeOthersBtn.textContent = "Find out more";

    selectedCard.append(overlayBg)
    selectedCard.append(galleryCont, textCont);
    textCont.append(textContTitle, textContDescription, buyBtn, seeOthersBtn);
    galleryCont.append(mainImg, otherImgs);
    otherImgs.append(secondImg, thirdImg);
    
    

  
    if (parent) {
      overlayBg.addEventListener("click", () => parent.removeChild(selectedCard));
    }

    seeOthersBtn.addEventListener("click", () => {
      parent.removeChild(selectedCard)
    })
    buyBtn.addEventListener("click", () => {
      
      buyBtn.textContent = "Added!"
      buyBtn.style.backgroundColor = "lightgreen"
      cartItems.push(product)
      createCartSection()
      if (cartItems.lenght >= 1) {
        cartSection.classList.add("n-empty__cart")
      }


    })
  
    return selectedCard;
  };

  // Cart modal/function  
 
 export const createCartSection = () => {
    const cartSection = cE("div")
    const cartInfo = cE("div")
    const cartItemsNum = cE("h3")
    const closeButton = cE("div")

    cartSection.className = "cart__section"
    cartInfo.className = "cart__info"
    cartItemsNum.className = "items__number"
    closeButton.className = "close__button"

    cartItemsNum.textContent = `Hai selezionato ${cartItems.length} prodotti`
    
    if (cartItems.length >= 1) {
      closeButton.textContent = "<"
    } else {closeButton.textContent = ">" }

    rootEl.append(cartSection)
    cartSection.append(cartInfo)
    cartInfo.append(cartItemsNum, closeButton)

    cartItems.forEach((product) => {
        cartSection.append(cartItemsNum, addProducts(product))
      
    });

    closeButton.addEventListener("click", () => {
      parent.removeChild(cartSection);
    });
  
    return cartSection
  }

// Access Form 



  export const createLogIn = () => {
        const formEl = cE("form")
        const usernameInput = cE("input") 
        const passwordInput = cE("input")
        const submitButton = cE("input")

        formEl.className = "login__form"
        usernameInput.type = "text"
        usernameInput.placeholder = "Inserisci: 'nomeutente'"
        passwordInput.type = "password"
        passwordInput.placeholder = "Inserisci: 'password'"
        submitButton.type = "submit"
        
        const accessText = nuovoElemento("h2", "access__text", "Login")

        formEl.append(accessText, usernameInput, passwordInput, submitButton)

        formEl.addEventListener("submit", (e) => {
          e.preventDefault()
          
          if (userList.find(
            (user) =>
              user.username === e.srcElement[0].value &&
              user.password === e.srcElement[1].value
           )) {
            bodyEl.removeChild(formEl)
            rootEl.classList.remove("none")
           } else {
              bodyEl.removeChild(formEl)
              const messageDiv = nuovoElemento("div", "error-message__div", "")
              const message = nuovoElemento("h2", "error__message", "Dati non corretti")
              rootEl.append(messageDiv)
              messageDiv.append(message)
            setTimeout(() => {
              rootEl.textContent = ""
              rootEl.append(formEl)
            }, 5000)
            
           } 
          
          })

        return formEl
  }


  // Funzione di prova creazione elemento con classe e attributo

  
    

  



