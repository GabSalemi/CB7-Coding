// Esercizio 1 : programma di verifica numeri dispari/pari 

let firstNumber = parseInt(prompt("Inserisci un numero per verificare se è pari o dispari"))

if (isNaN(firstNumber)) {
    console.log("Non hai inserito un numero!")
}
else if ((firstNumber % 2) === 0) {
    console.log("Il numero " + firstNumber + " è pari!")
} 
else {
    console.log("Il numero " + firstNumber + " è dispari!")} 
 
// Esercizio 2: riproduzione del primo esercizio con un condizionale ternario

let secondNumber = parseInt(prompt("Inserisci un secondo numero"))

if (isNaN(secondNumber) === false) {let isEven = 
    (secondNumber % 2) === 0 
        ? console.log("Il numero " + secondNumber + " è pari!")
        : console.log("Il numero " + secondNumber + " è dispari!")
    } else {
        console.log("Non hai inserito un numero!")
    }


// Esercizio 3: simulare una calcolatrice con il costrutto switch

let operator = prompt("Inserisci uno dei seguenti operatori matematici: (+ - * / %) per scoprire le relazioni matematiche tra i due numeri")
switch (operator) {
    case '+':
        console.log(firstNumber + secondNumber);
        break
    case '-':
        console.log(firstNumber - secondNumber);
        break
    case '*':
        console.log(firstNumber * secondNumber);
        break
    case '/':
        console.log(firstNumber / secondNumber);
        break
    case '%':
        console.log(firstNumber % secondNumber);
        break
}