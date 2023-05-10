const qS = (element) => document.querySelector(element);
const cE = (element) => document.createElement(element);
const buttons = document.querySelectorAll(".num")
const operators = document.querySelectorAll(".operator")
const displayInput = document.querySelector(".display__input")
console.log(buttons)

const btn1 = qS(".btn1")
const btn2 = qS(".btn2")
const btn3 = qS(".btn3")
const btn4 = qS(".btn4")
const btn5 = qS(".btn5")
const btn6 = qS(".btn6")
const btn7 = qS(".btn7")
const btn8 = qS(".btn8")
const btn9 = qS(".btn9")
const btn0 = qS(".btn0")
const btnSum = qS(".btnSum")
const btnSub = qS(".btnSub")
const btnMult = qS(".btnMult")
const btnDiv = qS(".btnDiv")
/* const btnMod = qS(".btnMod").value;
const btnExp = qS(".btnExp").value;
const btnOpenBracklet = qS(".btnOpBr").value;
const btnCloseBracklet = qS(".btnClBr").value; */
const result = qS(".btnResult");
const cancel = qS(".btnCE"); 

let operatore;
let num1;
let num2; 

btn1.addEventListener("click", () => {
    if (operatore) {
        num2 = 1
        displayInput.textContent = 1
    } else {
        num1 = 1
        displayInput.textContent = 1
    }
})

btn2.addEventListener("click", () => {
    if (operatore) {
        displayInput.textContent = 2
        num2 = 2
    } else {
        num1 = 2
        displayInput.textContent = 2
    }
})

btn3.addEventListener("click", () => {
    if (operatore) {
        displayInput.textContent = 3
        num2 = 3
    } else {
        num1 = 3
        displayInput.textContent = 3
    }
})

btn4.addEventListener("click", () => {
    if (operatore) {
        num2 = 4
        displayInput.textContent = 4
    } else {
        num1 = 4
        displayInput.textContent = 4
    }
})

btn5.addEventListener("click", () => {
    if (operatore) {
        num2 = 5
        displayInput.textContent = 5
    } else {
        num1 = 5
        displayInput.textContent = 5
    }
})

btn6.addEventListener("click", () => {
    if (operatore) {
        num2 = 6
        displayInput.textContent = 6
    } else {
        num1 = 6
        displayInput.textContent = 6
    }
})

btn7.addEventListener("click", () => {
    if (operatore) {
        num2 = 7
        displayInput.textContent = 7
    } else {
        num1 = 7
        displayInput.textContent = 7
    }
})

btn8.addEventListener("click", () => {
    if (operatore) {
        num2 = 8
        displayInput.textContent = 8
    } else {
        num1 = 8
        displayInput.textContent = 8
    }
})

btn9.addEventListener("click", () => {
    if (operatore) {
        num2 = 9
        displayInput.textContent = 9
    } else {
        num1 = 9
        displayInput.textContent = 9
    }
})

btn0.addEventListener("click", () => {
    if (operatore) {
        num2 = 0
        displayInput.textContent = 0
    } else {
        num1 = 0
        displayInput.textContent = 0
    }
})


btnSum.addEventListener("click", () => {
    operatore = "sum";
}) 

btnSub.addEventListener("click", () => {
    operatore = "sub";
}) 

btnSub.addEventListener("click", () => {
    operatore = "mult";
}) 

btnSub.addEventListener("click", () => {
    operatore = "div";
}) 



/* function getValue() {
    let i = parseInt(buttons.value - 1)
    displayInput.textContent = (parseInt(btn.value)); 
}

btn4.addEventListener("click", getValue)


btnSum.addEventListener("click", sum) */

result.addEventListener("click", () => {
    switch (operatore) {
        case "sum": 
            displayInput.textContent = num1 + num2
            num1 = undefined
            num2 = undefined
            operatore = undefined
        case "sub": 
            displayInput.textContent = num1 - num2
            num1 = undefined
            num2 = undefined
            operatore = undefined
        case "mult": 
            displayInput.textContent = num1 * num2
            num1 = undefined
            num2 = undefined
            operatore = undefined
        case "div": 
            displayInput.textContent = num1 / num2
            num1 = undefined
            num2 = undefined
            operatore = undefined
        default :
            displayInput.textContent = ""
    } 
})









