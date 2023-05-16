export const cE = (element) => document.createElement(element);
export const qS = (element) => document.querySelector(element);
export const qSA = (element) => document.querySelectorAll(element);

// Product card generator

export const addProducts = (product) => {
    const cardSection = cE("div") // Card Section
    cardSection.className = "card__section"
    
    const singleCard = cE("div")
    singleCard.className = "single__card"
  
      const productTitle = cE("h2")
      const productRate = cE("p")
      // const productDesc = cE("p")
      const productImg = cE("img")
      const productPrice = cE("h3") 
      const productButton = cE("button")
  
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
      productButton.textContent = "Add to cart!"
    
    
      cardSection.append(singleCard)
      singleCard.append(productImg, productRate, productTitle, productPrice, productButton)
  
        return cardSection
  }

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
    selectedCard.setAttribute("id", product.id);
    overlayBg.className = "overlay__bg";
    galleryCont.className = "selected-card__gallery";
    mainImg.src = product.thumbnail;
    mainImg.alt = product.title;

    otherImgs.className = "other__images"
    secondImg.src = product.thumbnail;
    thirdImg.src = product.thumbnail;
    secondImg.alt = product.title;
    thirdImg.alt = product.title;

    textCont.className = "selected-card__text";
    textContTitle.className = "text-cont__title";
    textContDescription.className = "text-cont__description"
    textContTitle.textContent = product.title;
    textContDescription.textContent = product.description;

  
    buyBtn.className = "buy__button";
    seeOthersBtn.className = "see-others__button"
  
    buyBtn.textContent = "Buy now";
    seeOthersBtn.textContent = "Find out more";
  
    // productData.images.forEach(image => )
  
    textCont.append(textContTitle, textContDescription, buyBtn, seeOthersBtn);
  
    galleryCont.append(mainImg, otherImgs);
    otherImgs.append(secondImg, thirdImg);
    selectedCard.append(overlayBg, galleryCont, textCont);
  
    if (parent) {
      overlayBg.addEventListener("click", () => parent.removeChild(selectedCard));
    }
  
    return selectedCard;
  };



