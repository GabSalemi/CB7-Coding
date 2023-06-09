import { elementGen} from "./fn.js";
import { rootEl, selectEl } from "../script.js";
export const filterInput = document.querySelector(".filter__input")


export let wheaterPlaces = [
    {id:1, name:"Alia",value:"alia",residents:3581,img: "https://images.pexels.com/photos/4963106/pexels-photo-4963106.jpeg?auto=compress&cs=tinysrgb&w=600" }, 
    {id:2,name:"Alimena",value:"alimena",residents:1978,img:"https://images.pexels.com/photos/17057471/pexels-photo-17057471/free-photo-of-light-city-people-street.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:3,name:"Aliminusa",value:"aliminusa",residents:1215,img:"https://images.pexels.com/photos/11288332/pexels-photo-11288332.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:4,name:"Altavilla Milicia",value:"altavilla+milicia",residents:8285,img:"https://images.pexels.com/photos/17057471/pexels-photo-17057471/free-photo-of-light-city-people-street.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:5,name:"Altofonte",value:"altofonte",residents:10237,img:"https://images.pexels.com/photos/14688549/pexels-photo-14688549.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:6,name:"Bagheria",value:"bagheria",residents:55373,img:"https://images.pexels.com/photos/4783647/pexels-photo-4783647.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:7,name:"Balestrate",value:"balestrate",residents:6435,img:"https://images.pexels.com/photos/11148580/pexels-photo-11148580.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:8,name:"Baucina",value:"baucina",residents:1975,img:"https://images.pexels.com/photos/17057471/pexels-photo-17057471/free-photo-of-light-city-people-street.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:9,name:"Belmonte Mezzagno",value:"belmonte+mezzagno",residents:11253,img:"https://images.pexels.com/photos/14688549/pexels-photo-14688549.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:10,name:"Bisacquino",value:"bisacquino",residents:4560,img:"https://images.pexels.com/photos/11288332/pexels-photo-11288332.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:11,name:"Blufi",value:"blufi",residents:1011,img:"https://images.pexels.com/photos/4963106/pexels-photo-4963106.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:12,name:"Bolognetta",value:"bolognetta",residents:4158,img:"https://images.pexels.com/photos/17057471/pexels-photo-17057471/free-photo-of-light-city-people-street.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:13,name:"Bompietro",value:"bompietro",residents:1354,img:"https://images.pexels.com/photos/4963106/pexels-photo-4963106.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:14,name:"Borgetto",value:"borgetto",residents:7434,img:"https://images.pexels.com/photos/4963106/pexels-photo-4963106.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:15,name:"Caccamo",value:"caccamo",residents:8183,img:"https://images.pexels.com/photos/4783647/pexels-photo-4783647.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:16,name:"Caltavuturo",value:"caltavuturo",residents:3986,img:"https://images.pexels.com/photos/14493645/pexels-photo-14493645.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:17,name:"Campofelice di Fitalia",value:"campofelice+di+fitalia",residents:514,img:"https://images.pexels.com/photos/14688549/pexels-photo-14688549.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:18,name:"Campofelice di Roccella",value:"campofelice+di+roccella",residents:7511,img:"https://images.pexels.com/photos/14493308/pexels-photo-14493308.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:19,name:"Campofiorito",value:"campofiorito",residents:1293,img:"https://images.pexels.com/photos/14688549/pexels-photo-14688549.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:20,name:"Camporeale",value:"camporeale",residents:3294,img:"https://images.pexels.com/photos/14688549/pexels-photo-14688549.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:21,name:"Capaci",value:"capaci",residents:11482,img:"https://images.pexels.com/photos/11148580/pexels-photo-11148580.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:22,name:"Carini",value:"carini",residents:38627,img:"https://images.pexels.com/photos/11148580/pexels-photo-11148580.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:23,name:"Castelbuono",value:"castelbuono",residents:8843,img:"https://images.pexels.com/photos/14688549/pexels-photo-14688549.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:24,name:"Casteldaccia",value:"casteldaccia",residents:11641,img:"https://images.pexels.com/photos/14688549/pexels-photo-14688549.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:25,name:"Castellana Sicula",value:"castellana+sicula",residents:3339,img:"https://images.pexels.com/photos/11288332/pexels-photo-11288332.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:26,name:"Castronovo di Sicilia",value:"castronovo+di+sicilia",residents:3053,img:"https://images.pexels.com/photos/11288332/pexels-photo-11288332.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:27,name:"Cefalà Diana",value:"cefalà+diana",residents:1028,img:"https://images.pexels.com/photos/14493308/pexels-photo-14493308.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:28,name:"Cefalù",value:"cefalù",residents:14310,img:"https://images.pexels.com/photos/10089681/pexels-photo-10089681.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:29,name:"Cerda",value:"cerda",residents:5235,img:"https://images.pexels.com/photos/14688549/pexels-photo-14688549.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:30,name:"Chiusa Sclafani",value:"chiusa+sclafani",residents:2766,img:"https://images.pexels.com/photos/4963106/pexels-photo-4963106.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:31,name:"Ciminna",value:"ciminna",residents:3737,img:"https://images.pexels.com/photos/14493645/pexels-photo-14493645.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:32,name:"Cinisi",value:"cinisi",residents:12438,img:"https://images.pexels.com/photos/14493308/pexels-photo-14493308.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:33,name:"Collesano",value:"collesano",residents:4030,img:"https://images.pexels.com/photos/17057471/pexels-photo-17057471/free-photo-of-light-city-people-street.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:34,name:"Contessa Entellina",value:"contessa+entellina",residents:1744,img:"https://images.pexels.com/photos/14688549/pexels-photo-14688549.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:35,name:"Corleone",value:"corleone",residents:11158,img:"https://images.pexels.com/photos/14688549/pexels-photo-14688549.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:36,name:"Ficarazzi",value:"ficarazzi",residents:13078,img:"https://images.pexels.com/photos/4963106/pexels-photo-4963106.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:37,name:"Gangi",value:"gangi",residents:6736,img:"https://images.pexels.com/photos/4963106/pexels-photo-4963106.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:38,name:"Geraci Siculo",value:"geraci+siculo",residents:1871,img:"https://images.pexels.com/photos/5801963/pexels-photo-5801963.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:39,name:"Giardinello",value:"giardinello",residents:2315,img:"https://images.pexels.com/photos/14493645/pexels-photo-14493645.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:40,name:"Giuliana",value:"giuliana",residents:1904,img:"https://images.pexels.com/photos/4963106/pexels-photo-4963106.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:41,name:"Godrano",value:"godrano",residents:1174,img:"https://images.pexels.com/photos/14493645/pexels-photo-14493645.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:42,name:"Gratteri",value:"gratteri",residents:940,img:"https://images.pexels.com/photos/11288332/pexels-photo-11288332.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:43,name:"Isnello",value:"isnello",residents:1525,img:"https://images.pexels.com/photos/17057471/pexels-photo-17057471/free-photo-of-light-city-people-street.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:44,name:"Isola delle Femmine",value:"isola+delle+femmine",residents:7285,img:"https://images.pexels.com/photos/11148580/pexels-photo-11148580.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:45,name:"Lascari",value:"lascari",residents:3611,img:"https://images.pexels.com/photos/5396033/pexels-photo-5396033.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:46,name:"Lercara Friddi",value:"lercara+friddi",residents:6829,img:"https://images.pexels.com/photos/4783647/pexels-photo-4783647.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:47,name:"Marineo",value:"marineo",residents:6588,img:"https://images.pexels.com/photos/14688549/pexels-photo-14688549.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:48,name:"Mezzojuso",value:"mezzojuso",residents:2908,img:"https://images.pexels.com/photos/4963106/pexels-photo-4963106.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:49,name:"Misilmeri",value:"misilmeri",residents:29283,img:"https://images.pexels.com/photos/5801963/pexels-photo-5801963.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:50,name:"Monreale",value:"monreale",residents:39187,img:"https://images.pexels.com/photos/10862491/pexels-photo-10862491.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:51,name:"Montelepre",value:"montelepre",residents:6213,img:"https://images.pexels.com/photos/11288332/pexels-photo-11288332.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:52,name:"Montemaggiore Belsito",value:"montemaggiore Belsito",residents:3314,img:"https://images.pexels.com/photos/17057471/pexels-photo-17057471/free-photo-of-light-city-people-street.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:53,name:"Palazzo Adriano",value:"palazzo+adriano",residents:2116,img:"https://images.pexels.com/photos/17057471/pexels-photo-17057471/free-photo-of-light-city-people-street.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:54,name:"Palermo",value:"palermo",residents:673735,img:"https://images.pexels.com/photos/13849372/pexels-photo-13849372.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:55,name:"Partinico",value:"partinico",residents:31847,img:"https://images.pexels.com/photos/5801963/pexels-photo-5801963.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:56,name:"Petralia Soprana",value:"petralia+soprana",residents:3308,img:"https://images.pexels.com/photos/11288332/pexels-photo-11288332.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:57,name:"Petralia Sottana",value:"petralia+sottana",residents:2766,img:"https://images.pexels.com/photos/11288332/pexels-photo-11288332.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:58,name:"Piana degli Albanesi",value:"piana+degli+albanesi",residents:6219,img:"https://images.pexels.com/photos/11288332/pexels-photo-11288332.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:59,name:"Polizzi Generosa",value:"polizzi+generosa",residents:3334,img:"https://images.pexels.com/photos/14493308/pexels-photo-14493308.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:60,name:"Pollina",value:"pollina",residents:2978,img:"https://images.pexels.com/photos/17057471/pexels-photo-17057471/free-photo-of-light-city-people-street.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:61,name:"Prizzi",value:"prizzi",residents:4788,img:"https://images.pexels.com/photos/14493645/pexels-photo-14493645.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:62,name:"Roccamena",value:"roccamena",residents:1493,img:"https://images.pexels.com/photos/11288332/pexels-photo-11288332.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:63,name:"Roccapalumba",value:"roccapalumba",residents:2466,img:"https://images.pexels.com/photos/5801963/pexels-photo-5801963.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:64,name:"San Cipirello",value:"san+cipirello",residents:5353,img:"https://images.pexels.com/photos/11288332/pexels-photo-11288332.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:65,name:"San Giuseppe Jato",value:"san+giuseppe+jato",residents:8653,img:"https://images.pexels.com/photos/4963106/pexels-photo-4963106.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:66,name:"San Mauro Castelverde",value:"san+mauro+castelverde",residents:1643,img:"https://images.pexels.com/photos/14493645/pexels-photo-14493645.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:67,name:"Santa Cristina Gela",value:"santa+cristina+gela",residents:1011,img:"https://images.pexels.com/photos/4783647/pexels-photo-4783647.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:68,name:"Santa Flavia",value:"santa+flavia",residents:11238,img:"https://images.pexels.com/photos/17057471/pexels-photo-17057471/free-photo-of-light-city-people-street.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:69,name:"Sciara",value:"sciara",residents:2810,img:"https://images.pexels.com/photos/5801963/pexels-photo-5801963.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:70,name:"Scillato",value:"scillato",residents:612,img:"https://images.pexels.com/photos/11288332/pexels-photo-11288332.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:71,name:"Sclafani Bagni",value:"sclafani+bagni",residents:430,img:"https://images.pexels.com/photos/14493645/pexels-photo-14493645.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:72,name:"Termini Imerese",value:"termini+imerese",residents:26144,img:"https://images.pexels.com/photos/4783647/pexels-photo-4783647.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:73,name:"Terrasini",value:"terrasini",residents:12423,img:"https://images.pexels.com/photos/4783647/pexels-photo-4783647.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:74,name:"Torretta",value:"torretta",residents:4328,img:"https://images.pexels.com/photos/17057471/pexels-photo-17057471/free-photo-of-light-city-people-street.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:75,name:"Trabia",value:"trabia",residents:10481,img:"https://images.pexels.com/photos/14493308/pexels-photo-14493308.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:76,name:"Trappeto",value:"trappeto",residents:3184,img:"https://images.pexels.com/photos/11148580/pexels-photo-11148580.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:77,name:"Ustica",value:"ustica",residents:1308,img:"https://images.pexels.com/photos/5396033/pexels-photo-5396033.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:78,name:"Valledolmo",value:"valledolmo",residents:3552,img:"https://images.pexels.com/photos/11288332/pexels-photo-11288332.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:79,name:"Ventimiglia di Sicilia",value:"ventimiglia+di+sicilia",residents:1925,img:"https://images.pexels.com/photos/5801963/pexels-photo-5801963.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:80,name:"Vicari",value:"vicari",residents:2698,img:"https://images.pexels.com/photos/4963106/pexels-photo-4963106.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:81,name:"Villabate",value:"villabate",residents:20212,img:"https://images.pexels.com/photos/14688549/pexels-photo-14688549.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:82,name:"Villafrati",value:"villafrati",residents:3340,img:"https://images.pexels.com/photos/11288332/pexels-photo-11288332.jpeg?auto=compress&cs=tinysrgb&w=600"}
]

// placeholder imgs:
// borgo montano: https://images.pexels.com/photos/11288332/pexels-photo-11288332.jpeg?auto=compress&cs=tinysrgb&w=600
// paesaggio costa: https://images.pexels.com/photos/11148580/pexels-photo-11148580.jpeg?auto=compress&cs=tinysrgb&w=600
// borgo marino: https://images.pexels.com/photos/14493308/pexels-photo-14493308.jpeg?auto=compress&cs=tinysrgb&w=600
// paesaggio campagna: https://images.pexels.com/photos/4963106/pexels-photo-4963106.jpeg?auto=compress&cs=tinysrgb&w=600
// città marina: https://images.pexels.com/photos/4783647/pexels-photo-4783647.jpeg?auto=compress&cs=tinysrgb&w=600
// città montana: https://images.pexels.com/photos/14688549/pexels-photo-14688549.jpeg?auto=compress&cs=tinysrgb&w=600
// Altro 1: https://images.pexels.com/photos/5801963/pexels-photo-5801963.jpeg?auto=compress&cs=tinysrgb&w=600
// Altro 2: https://images.pexels.com/photos/14493645/pexels-photo-14493645.jpeg?auto=compress&cs=tinysrgb&w=600
// Altro 3: https://images.pexels.com/photos/17057471/pexels-photo-17057471/free-photo-of-light-city-people-street.jpeg?auto=compress&cs=tinysrgb&w=600
// Altro 4: https://images.pexels.com/photos/5396033/pexels-photo-5396033.jpeg?auto=compress&cs=tinysrgb&w=600

// Palermo: https://images.pexels.com/photos/13849372/pexels-photo-13849372.jpeg?auto=compress&cs=tinysrgb&w=600
// Cefalu: https://images.pexels.com/photos/10089681/pexels-photo-10089681.jpeg?auto=compress&cs=tinysrgb&w=600
// Monreale: https://images.pexels.com/photos/10862491/pexels-photo-10862491.jpeg?auto=compress&cs=tinysrgb&w=600



export const renderOptions = (place) => {
   
    wheaterPlaces.forEach((option) => {
        let optionEl = elementGen("option", "select__option", option.name)
        selectEl.append(optionEl)

       
        return optionEl

    })
}

  
/* filterInput.addEventListener("input", (e) => {
       
    let filterText = e.target.value
    let filterLower = filterText.toLowerCase()
    

    wheaterPlaces.filter((place) => {
        let placeValue = place.value
        if (placeValue !== filterLower) {
            wheaterPlaces.find((place) => {
                place.name === placeValue
                console.log(wheaterPlaces)
            })
        }
    })

}) */



