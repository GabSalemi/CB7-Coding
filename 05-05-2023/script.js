// Esercizio 1: Documentazione online sull'argomento `scope`

// Esercizio 3: costruire un oggetto e stamparne in console le proprietà 


let owner = {
    name: 'Gabriele',
    age: 29,
    from: 'Palermo',
    interest: ['libri', 'videogiochi', 'architettura']
}

alert("Ciao! Sono " + owner.name + " , ho " + owner.age + " e vivo a " + owner.from + ". Ora parlami un po' di te!");

let user = {
    name: "",
    age: "",
    from: "",
    interest: "",
}

user.name = prompt("Come ti chiami?")
user.age = prompt("Quanti anni hai?")
user.interest = prompt("Dove vivi?")

alert("Bene " + user.name + "!" + " Iniziamo a calcolare")

// Esercizio 2: riprogrammare una calcolatrice utilizzando le funzioni

function operation(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            return result = num1 + num2;
            break
        case '-':
            return result = num1 - num2;
            break
        case '*':
            return result = num1 * num2;;
            break
        case '/':
            return result = num1 / num2;;
            break
        case '%':
            return result = num1 % num2;;
            break
        default:
            console.log("Non hai scelto un'operazione")
    }
}

let num1 = parseInt(prompt("Inserisci un primo numero"));
let num2 = parseInt(prompt("Inserisci un secondo numero"));
let operator = prompt("Scegli l'operazione che vuoi eseguire (+ - * / %)")
alert("Ciao " + user.name + " risultato della tua operazione è " + operation(num1, num2, operator));
console.log("Il risultato è " + operation(num1, num2, operator))

// Esercizio avanzato 

function newOperations(x, y) {

    function sum() {
        return (x + y)
    }

    function sub() {
        return (x - y)
    }

    function pro() {
        return (x * y)
    }

    function div() {
        return (x / y)
    }

    function res() {
        return (x % y)
    }

}

newOperations(2, 5, sum()) // 



