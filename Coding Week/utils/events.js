// EVENTS

langEng.addEventListener("click", () => {
    selectText.textContent = "Choose a destination"
    langText.textContent = "Change language"
    langEng.classList.add("eng")
    langIt.classList.remove("it")
} )

langIt.addEventListener("click", (e) => {
    selectText.textContent = "Seleziona una destinazione"
    langText.textContent = "Cambia lingua"
    langIt.classList.add("it")
    langEng.classList.remove("eng")
} )



