import { destrFunction } from "./eserciziDestructuring.js";
import { elementGen, firstPageGen, todoListGen } from "./utility/functions.js";

export const rootEl = document.querySelector("#root")

rootEl.append(firstPageGen())

setTimeout(() => {
    rootEl.textContent = ""
    rootEl.append(todoListGen())
}, 5000)