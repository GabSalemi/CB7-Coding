export const elementGen = (elemType, className, textCont, ...attrs) => {
    const element = document.createElement(elemType)
    element.className = className
    element.textContent = textCont
    attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value))

    return element
}

export const createLogin = (appendEl) => {
    const loginForm = elementGen("form", "login__form", "", "")
    const formText = elementGen("h2", "form__text", "Accedi per visualizzare i tuoi prodotti", "")
        const mailLabel= elementGen("label", "mail__label", "Inserisci la tua e-mail", {name: "for", value: "emailInput" })  
        const mailInput = elementGen("input", "mail_input", "", {name: "type", value: "email"})
        const passLabel= elementGen("label", "pass__label", "Inserisci la tua password", {name: "for", value: "passInput" }) 
        const passInput = elementGen("input", "pass__input", "", {name: "type", value: "password"})
    const inputButton = elementGen("input", "submit__button", "Accedi", {name: "type", value: "submit"})

    
    loginForm.append(formText, mailLabel, mailInput, passLabel, passInput, inputButton)
    appendEl.append(loginForm)
    
}

export const BASE_URL = "https://dummyjson.com"

export const GET = async(endpoint) => {
    const res = await fetch(BASE_URL + endpoint)
    const data = await res.json()

    return data
}

export const DELETE = async (endpoint) => {
    const res = await fetch(BASE_URL + endpoint, {
        method: "DELETE"
    })
    const data =  await res.json();
    
    return data
}

export const POST = async(endpoint, body) => {
    const res = await fetch(BASE_URL + endpoint, {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        }, 
        body: JSON.stringify(body)
    })

    const data = await res.json()
    return data
}