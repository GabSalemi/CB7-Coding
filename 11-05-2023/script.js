const cE = (element) => document.createElement(element);
const qS = (element) => document.querySelector(element);


// Stile generale ed elementi titolo

document.body.style.backgroundColor = "#093634"

const PageTitle = cE("h1")
PageTitle.className = "section__title"
PageTitle.textContent = "To-Do Travel"
document.body.append(PageTitle)

const FirstSectionDiv = cE("div") // Prima sezione
document.body.append(FirstSectionDiv)

const FirstSubTitle = cE("h2")
FirstSubTitle.className = "sub__title"
FirstSubTitle.textContent = "Europe places"
FirstSectionDiv.append(FirstSubTitle)


const SecondSectionDiv = cE("div") // Seconda sezione
document.body.append(SecondSectionDiv)

const SecondSubTitle = cE("h2")
SecondSubTitle.className = "sub__title"
SecondSubTitle.textContent = "Done Places"
SecondSectionDiv.append(SecondSubTitle)

const ThirdSectionDiv = cE("div") // Terza sezione
document.body.append(ThirdSectionDiv)

const ThirdSubTitle = cE("h2")
ThirdSubTitle.className = "sub__title"
ThirdSubTitle.textContent = "To-Do Places"
ThirdSectionDiv.append(ThirdSubTitle)

// Prima e seconda sezione : Esercizio 1(/2)


const nameLabel = cE("label")
nameLabel.textContent = "Luogo"
FirstSectionDiv.append(nameLabel)

const nameInput = cE("input")
nameInput.setAttribute("type", "text")
nameInput.setAttribute("placeholder", "Place")
nameLabel.append(nameInput)

// Select input

const nationInput = cE("select")
nationInput.setAttribute("placeholder", "Nation")
nameLabel.append(nationInput)

let nationList = [{
    name: "Andorra",
    code: "AD"
  }, {
    name: "Albania",
    code: "AL"
  }, {
    name: "Austria",
    code: "AT"
  }, {
    name: "Åland Islands",
    code: "AX"
  }, {
    name: "Bosnia and Herzegovina",
    code: "BA"
  }, {
    name: "Belgium",
    code: "BE"
  }, {
    name: "Bulgaria",
    code: "BG"
  }, {
    name: "Belarus",
    code: "BY"
  }, {
    name: "Switzerland",
    code: "CH"
  }, {
    name: "Cyprus",
    code: "CY"
  }, {
    name: "Czech Republic",
    code: "CZ"
  }, {
    name: "Germany",
    code: "DE"
  }, {
    name: "Denmark",
    code: "DK"
  }, {
    name: "Estonia",
    code: "EE"
  }, {
    name: "Spain",
    code: "ES"
  }, {
    name: "Finland",
    code: "FI"
  }, {
    name: "Faroe Islands",
    code: "FO"
  }, {
    name: "France",
    code: "FR"
  }, {
    name: "United Kingdom",
    code: "GB"
  }, {
    name: "Guernsey",
    code: "GG"
  }, {
    name: "Greece",
    code: "GR"
  }, {
    name: "Croatia",
    code: "HR"
  }, {
    name: "Hungary",
    code: "HU"
  }, {
    name: "Ireland",
    code: "IE"
  }, {
    name: "Isle of Man",
    code: "IM"
  }, {
    name: "Iceland",
    code: "IC"
  }, {
    name: "Italy",
    code: "IT"
  }, {
    name: "Jersey",
    code: "JE"
  }, {
    name: "Liechtenstein",
    code: "LI"
  }, {
    name: "Lithuania",
    code: "LT"
  }, {
    name: "Luxembourg",
    code: "LU"
  }, {
    name: "Latvia",
    code: "LV"
  }, {
    name: "Monaco",
    code: "MC"
  }, {
    name: "Moldova, Republic of",
    code: "MD"
  }, {
    name: "Macedonia, The Former Yugoslav Republic of",
    code: "MK"
  }, {
    name: "Malta",
    code: "MT"
  }, {
    name: "Netherlands",
    code: "NL"
  }, {
    name: "Norway",
    code: "NO"
  }, {
    name: "Poland",
    code: "PL"
  }, {
    name: "Portugal",
    code: "PT"
  }, {
    name: "Romania",
    code: "RO"
  }, {
    name: "Russian Federation",
    code: "RU"
  }, {
    name: "Sweden",
    code: "SE"
  }, {
    name: "Slovenia",
    code: "SI"
  }, {
    name: "Svalbard and Jan Mayen",
    code: "SJ"
  }, {
    name: "Slovakia",
    code: "SK"
  }, {
    name: "San Marino",
    code: "SM"
  }, {
    name: "Ukraine",
    code: "UA"
  }, {
    name: "Holy See (Vatican City State)",
    code: "VA"
  }]

for (var i = 0; i < nationList.length; i++) {
    var nationOption = document.createElement("option");
    nationOption.value = nationList[i].code; // Valore utilizzato come ID
    nationOption.text = nationList[i].name;  // Valore utilizzato come Titolo
    nationInput.appendChild(nationOption);
}

const brElOne = cE("br")
FirstSectionDiv.append(brElOne)

const dateLabel = cE("label")
dateLabel.textContent = "Date"
FirstSectionDiv.append(dateLabel)

const dateInput = cE("input")
dateInput.setAttribute("type", "date")
// dateInput.setAttribute("placeholder", "GG/MM/YYYY")
dateLabel.append(dateInput)

const brElTwo = cE("br")
FirstSectionDiv.append(brElTwo)

const submitBtn = cE("button")
submitBtn.setAttribute("type", "submit")
submitBtn.textContent = "Add to Done List"
FirstSectionDiv.append(submitBtn)

const toDoBtn = cE("button")
toDoBtn.setAttribute("type", "submit")
toDoBtn.textContent = "Add to To-DoList"
FirstSectionDiv.append(toDoBtn)

const listAdds = cE("ul")
SecondSectionDiv.append(listAdds)

const listToDo = cE("ul")
listToDo.className = 'select'
ThirdSectionDiv.append(listToDo)

// Array di oggetti 

let placesData = [] 

// Struttura oggetto: let placesData = [{titoe: "nameInput(nationList.name)", id:"nameInput(nationList.code)"}]

// Creare struttura lista

const addPlace = (placesData) => {
    const listItemEl = cE("li");
    let i = placesData.length - 1
    // listItemEl.id = placesData.id;
    listItemEl.textContent = placesData[i].titolo + "(" + placesData[i].id + ")"
    listItemEl.className = "added__item"
    listAdds.append(listItemEl)
    
    return listItemEl;
  };


// Event - click Add

submitBtn.addEventListener("click", () => {
    placesData.push({
        id: nationInput.value,
        titolo: nameInput.value,
        date: dateInput.value
    })

    
    addPlace(placesData)
})

// Esercizio 3 : Terza Sezione



const addPlaceToDo = (placesData) => {
    const listItemEl = cE("li");
    let i = placesData.length - 1
    // listItemEl.id = placesData.id;
    listItemEl.textContent = placesData[i].date + " - " + placesData[i].titolo + "(" + placesData[i].id + ")"
    listItemEl.className = "todo__item"
    listToDo.append(listItemEl)
    
    return listItemEl;
  };


  toDoBtn.addEventListener("click", () => {
    placesData.push({
        id: nationInput.value,
        titolo: nameInput.value,
        date: dateInput.value
    })

    console.log(placesData)

    
    addPlaceToDo(placesData)
})

// Rimuovi elemento dalla lista To Do - Porta nel Done

let item = document.getElementsByTagName("li")

item.addEventListener("click", () => {
    if (item.classList.contain("todo__item")) {
        ItemSelect.textContent = ""
    } 
    
})










