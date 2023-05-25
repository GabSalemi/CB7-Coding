import { rootEl } from "../script.js"

export let todoDivs = []


export const elementGen = (elemType, className, textCont, ...attrs) => {
    const element = document.createElement(elemType)
    element.className = className
    element.textContent = textCont
    attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value))

    return element
}

export const firstPageGen = () => {
    const pageDiv = elementGen("div", "main__div")
    const pageTitle = elementGen("h1", "main__title", "To-Day List")
    const breakLine = elementGen("hr", "break__line")
    const pageDescr = elementGen("h3", "page__descr", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, sed.")

    pageDiv.append(pageTitle, breakLine, pageDescr)

    return pageDiv

}


const BASE_URL = "https://dummyjson.com/todos"

const GET = async(endpoint) => {
    const res = await fetch(BASE_URL + endpoint)
    const data = await res.json()

    return data
}

const DELETE = async (endpoint) => {
    const res = await fetch(BASE_URL + endpoint, {
        method: "DELETE"
    })
    try {
        if (res.status >= 300 && res.status <= 599) {
            console.log("risposta non idonea")
            throw new Error("Errore!") 
        }
        return res.json();

    } catch(error) { 
        console.log(error)
    } finally {
        console.log("Andiamo avanti")

    }
    const data =  await res.json();
    return data
}

const POST = async (endpoint, bodyAdd) => {
    const res = await fetch(`https://dummyjson.com/todos${endpoint}`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(bodyAdd)
})

try {
    if (res.status >= 300 && res.status <= 599) {
        const errorModal = elementGen("div", "modal__error")
        const errorMex = elementGen("h2", "error__message", "Il server non risponde, non possiamo aggiungere questa task alla lista")

        errorMex.append(errorModal)
        rootEl.append(errorModal)
        throw new Error("Errore Server") 
    }
    return res.json();

} catch(error) { 
    console.log(error)
} finally {
    console.log("Andiamo avanti")
    listDiv.textContent = ""
    todoListGen()
}
const data = await res.json()
return data
            
}






export const todoListGen = () => {
    const titleDiv = elementGen("div", "title__div")
    const listDiv = elementGen("div", "list__div")
    const pageTitle = elementGen("h1", "list__title", "To-Day List")
    const breakRule = elementGen("hr", "break__rule")
    const inputDiv = elementGen("form", "input__form")
    const addLabel = elementGen("label","add__label", "Add some daily Task:", {name : "for", value: "add__text"})
    const addInput = elementGen("input", "add__text", "", {name: "type", value: "text"}, {name: "id", value: "add__button"})
    const addButton = elementGen("input", "add__button", "Add Task", {name: "type", value: "submit"})

    inputDiv.append(addLabel, addInput, addButton)
    titleDiv.append(pageTitle, inputDiv, breakRule)
    rootEl.append(titleDiv)

    const tempText = elementGen("h2", "temp__text", "We are processing yours Daily To-do List")
                listDiv.append(tempText)
                rootEl.append(listDiv)
    
   for (let i = 0; i <= 10; i++) {
            GET("/random").then((data) => {
                todoDivs.push(data.todo)
            }, 
            ).then(() => {
                if (todoDivs.length === 9) {
                    listDiv.textContent = ""
                    todoDivs.forEach((element) => {
                    const todoDiv = elementGen("div", "todo__div", "")
                    let todoPar = elementGen("p", "todo__element", element)
               
                    todoDiv.append(todoPar)
                    listDiv.append(todoDiv)

                    addButton.addEventListener("submit", (event) => {
                        POST("add", {
                            todo: event.target[0],
                            completed: false,
                            userId: 5,
                          })
                    })
                    
                    todoDiv.addEventListener("click", (element) => {
                        let selectedTask = element.srcElement
                        console.log(selectedTask)
                        selectedTask.classList.add("done")
                    })

                    todoPar.addEventListener("click", (element) => {
                        let selectedTask = element.srcElement
                        console.log(element)
                        selectedTask.classList.add("cancel")
                        DELETE("/1")
                        setTimeout (() => {
                            let elementIndex = todoDivs.find(element => element === selectedTask.textContent)
                            let index = todoDivs.indexOf(elementIndex)
                            delete todoDivs[index]

                            listDiv.textContent = ""
                            todoDivs.forEach((element) => {
                                const todoDiv = elementGen("div", "todo__div", "")
                                let todoPar = elementGen("p", "todo__element", element)
                           
                                todoDiv.append(todoPar)
                                listDiv.append(todoDiv)})
                        }, 1000)
                    })

                    
                }
                
                )}
            })
            
        }
    return 
}

