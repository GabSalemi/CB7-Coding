// FUNZIONI 

const elementGen = (elemType, className, textCont, ...attrs) => {
    const element = document.createElement(elemType)
    element.className = className
    element.textContent = textCont
    attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value))
    return element
}



    



const todoItem = (todoData) => {
    const todoEl = elementGen("li", "todo__element", todoData.content)

    todoEl.addEventListener("click", () => {
        setTimeout(() => {todoArray = todoArray.filter((todo) => todo.id !== todoData.id);
            console.log(todoArray)
            addListItem();},2000)    
      });

    return todoEl
}

const addListItem = () => {
    todoInput.value = ""
    todoList.textContent = ""
    if (todoArray.length <= 10) {
    todoArray.forEach((todo) => todoList.append(todoItem(todo)))
    localStorage.setItem("todoArray", JSON.stringify(todoArray))
} else {
    todoArray = []
}
}

const BASE_URL = "https://dummyjson.com/todos"

const GET = async (endpoint) => {
    
    try {
        const res = await fetch(BASE_URL + endpoint)
        if (res.status >= 300 && res.status <= 599) {
            
            throw new Error("Server problem") 
        } else {
            const data = res.json()
            return data
        }
        } catch(error) { 
            setTimeout(() => {
                const errorModal = elementGen("div", "error__modal")
                const errorModalText = elementGen("h2", "modal__text", "It is not possible to generate a random list now")
                const errorMessage = elementGen("h3", "error__message", error)

                errorModal.append(errorModalText, errorMessage)
                mainSection.append(errorModal)

            }, 3000)
        
    } 
    
}

// ELEMENTI DELLA PAGINA

const rootEl = document.querySelector("#root")
const headerSection = document.querySelector("#header__section")
const mainSection = document.querySelector("#main__section")

const pageTitle = elementGen("h1", "main__title", "To-Day List")
const breakLine = elementGen("hr", "break__line")
const pageDescr = elementGen("h3", "page__descr", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, sed.")

headerSection.append(pageTitle, breakLine)
mainSection.append(pageDescr)



headerSection.textContent = ""
mainSection.textContent = ""

    

    const titleInputDiv = elementGen("div", "title__div")
    const timerRandomDiv = elementGen("div", "timer__div")
    const timerText = elementGen("h3", "timer__text", "00.00")
    const randomButton = elementGen("button", "random__button", "Get some random task", {name: "type", value: "button"})
    const headerTitle = elementGen("h1", "header__title", "To-Day List")
    const formDiv = elementGen("form", "add__form")
    const labelInput = elementGen("label", "label__input", "Add yours daily task:", {name: "for", value: "todo"})
    const todoInput = elementGen("input", "text__input", "", {name: "type", value: "text"}, {name: "name", value: "todo"}, {name: "minlenght", value:"3"}, {name: "required", value: true} )
    const submitInput = elementGen("input", "submit__input", "Add Todo", {name: "type", value: "submit"} )
    const todoList = elementGen("ul", "todo__list", "")
    const todoLoad = elementGen("hr", "todo__load")

    formDiv.append(labelInput, todoInput, submitInput)
    titleInputDiv.append(headerTitle,formDiv)
    timerRandomDiv.append(timerText, randomButton)

    headerSection.append(titleInputDiv, timerRandomDiv)
    mainSection.append(todoLoad, todoList)

    let todoArray =  JSON.parse(localStorage.getItem("todoArray")) || []
    addListItem()

    formDiv.addEventListener("submit", (e) => {
        e.preventDefault()
        todoArray.push({ id: Date.now(), content: e.target[0].value });
        addListItem();
    })
    
    randomButton.addEventListener("click", (e) => {
        e.preventDefault()
        todoArray = []
        for (let i = 0; i < 10; i++) {
        GET("/random").then((data) => {
            todoArray.push(data.todo)}).then(() => {
                if (todoArray.length === 10) {
                    todoArray.forEach((todo) => {
                        const randomList = elementGen("li", "random__el", todo)
                        todoList.append(randomList)
    
                        randomList.addEventListener("click", () => {
                        })
                    })
                }
                
                
            })

        
            
           
    }})

    const timer = setInterval(() => {})






