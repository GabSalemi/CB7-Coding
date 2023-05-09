// toggle menu

const menuButton = document.querySelector(".menu__icon");
const menuDiv = document.querySelector(".menu__div")

menuButton.addEventListener("click", () => {
    menuDiv.classList.toggle("active");
})

// Esercizio 1 : pulsante saluto 

const beginButton = document.querySelector(".begin__button")
const greetContainer = document.querySelector(".text__container")
beginButton.addEventListener("click", addGreet); 

function addGreet(event) {
    event.preventDefault();
    greetContainer.textContent = "Benevenuto/a reader, scorri in basso per inserire i tuoi libri!"
}

// Esercizio 2 : evento submit

const submitText = document.querySelector(".submit__text")
const btnBook = document.querySelector(".bookform")

btnBook.addEventListener("submit", e => {
      e.preventDefault();
      submitText.textContent = (e.target[0].value + " - " + e.target[1].value)


// Esercizio 3 : aggiungi elemento 

        const addElement = document.querySelector(".add__element")
        const booksList = document.querySelector(".books__list")
        const listElement = document.createElement("li")
        const textContent = document.createTextNode(e.target[0].value + " - " + e.target[1].value)

        addElement.addEventListener("click", e => {
            e.preventDefault();
            booksList.appendChild(listElement);
            listElement.appendChild(textContent)
        });
});


// Tentativo scroll

const header = document.querySelector(".right__header")

window.addEventListener("scroll", () => {
    if (scrollY > 400) {
    header.classList.add("hide")
    } else if (scrollY < 400) {
        header.classList.remove("hide")
    }
})
