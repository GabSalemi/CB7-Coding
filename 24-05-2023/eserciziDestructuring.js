import { elementGen } from "./utility/functions.js";
import { firstAuthor, secondAuthor, thirdAuthor, fourthAuthor, fifthAuthor, firstBook, secondBook, thirdBook, fifthBook } from "./utility/data.js";


export const destrFunction = () => {
    // ESERCIZIO 1

    const [firstName1, lastName1, country1] = firstAuthor 
    const [firstName2, lastName2, country2] = secondAuthor
    console.log(lastName1)

    // ESERCIZIO 2

    let {titolo, autore, anno} = secondBook 

    if (firstName2 + " " + lastName2 === autore) {console.log(titolo)} 

    // Prove Destructuring

    let [, lastName4, country4] = fourthAuthor 
    console.log(lastName4)

    let [one, two, three, four, , six] = "Andrea"; 
    console.log(one + two + three + four + six)

    let [firstName5, , lastName5, country5, ...rest] = fifthAuthor
    let countryInfo = rest[0] + ", " + country5 + " (" + rest[1] + ")"
    console.log(countryInfo)

    let { titolo : bookTitle,  anno : bookYear } = firstBook
    let bookInfo = bookTitle + ", " + bookYear 
    console.log(bookInfo)

    let {title, ...other} = thirdBook 
    console.log(title)
    console.log(other.author)

    // ESERCIZIO 3 

    let [firstName3, lastName3, country3 = "Non specificato"] = thirdAuthor
    console.log(lastName3 + ", " + firstName3 + " (Luogo: " + country3 + ")")

    let {titulo, autor, ano = "non specificato"} = fifthBook
    console.log(titulo)
    console.log("La raccolta di racconti '" + titulo + "', di " + autor + ", fu scritta in un periodo " + ano)

}