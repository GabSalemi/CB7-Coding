import { rootEl } from "../script.js"

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



export const todoListGen = () => {
    const listDiv = elementGen("div", "list__div")
    const pageTitle = elementGen("h1", "list__title", "To-Day List")
    const breakRule = elementGen("hr", "break__rule")

    listDiv.append(pageTitle, breakRule)
    
   for (let i = 0; i <= 10; i++) {
            GET("/random").then((data) => {
                
                const todoDiv = elementGen("div", "todo__div", "")
                
                let todoPar = elementGen("p", "todo__element", data.todo)
                
                todoDiv.append(todoPar)
                
                listDiv.append(todoDiv)
                
            })
        }
        

    return listDiv
}


