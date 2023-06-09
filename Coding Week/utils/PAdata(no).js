import { elementGen} from "./fn.js";
import { rootEl, selectEl } from "../script.js";

export let wheaterPlaces = []

class Place {
    constructor(id, nome, valore, popolazione) {
        this.idByPop = id;
        this.name = nome;
        this.value = valore;
        this.population = popolazione
       this.pushPlace = () => { 
           wheaterPlaces.push(this);
        }
        this.pushPlace() 
    }
}

let placePalermo = new Place(1, "Palermo", "palermo", 673735)
let placeBagheria = new Place(2, "Bagheria", "bagheria", 55373)
let placeMonreale = new Place(3, "Monreale", "monreale", 39187)
let placeCarini = new Place(4, "Carini", "carini", 38627)
let placePartinico = new Place(5, "Partinico", "partinico",	31847)
let placeMisilmeri = new Place(6, "Misilmeri", "misilmeri",	29283)
let placeTerminiImerese = new Place (7, "Termini Imerese", "termini+imerese", 26144)
let placeVillabate = new Place(8, "Villabate", "villabate",	20212)
let placeCefalu = new Place(9, "Cefalù", "cefalu", 14310)
let placeFicarazzi	= new Place(10, "Ficarazzi", "ficarazzi", 13078)
let placeCinisi = new Place (11, "Cinisi", "cinisi", 12438)
let placeTerrasini = new Place(12, "Terrasini", "terrasini", 12423)
let placeCasteldaccia = new Place(13, "Casteldaccia", "casteldaccia", 11641)
let placeCapaci = new Place(14, "Capaci", "capaci", 11482)
let placeBelmonteMezzagno = new Place(15, "Belmonte Mezzagno", "belmonte+mezzagno", 11253)
let placeSantaFlavia = new Place(16, "Santa Flavia", "santa+flavia", 11238)
let placeCorleone = new Place(17, "Corleone", "corleone", 11158)
let placeTrabia = new Place(18, "Trabia", "trabia", 10481)
let placeAltofonte = new Place(19, "Altofonte", "altofonte", 10237)
let placeCastelbuono = new Place(20, "Castelbuono", "castelbuono", 8843)
let placeSanGiuseppeJato = new Place(21, "San Giuseppe Jato", "san+giuseppe+jato", 8653)
let placeAltavillaMilicia = new Place(22, "Altavilla Milicia", "altavilla+milicia", 8285)
let placeCaccamo = new Place(23, "Caccamo", "caccamo", 8183)
let placeCampofelicediRoccella = new Place(24, "Campofelice di Roccella", "campofelice+di+roccella", 7.511)
let placeBorgetto = new Place(25, "Borgetto", "borgetto", 7434)
let placeIsoladelleFemmine = new Place("Isola delle Femmine", "isola+delle+femmine", 7285)
let placeLercaraFriddi = new Place(27, "Lercara Friddi", "lercara+friddi", 6829)
// 27	Lercara Friddi	6.829	183,2	2.752
// 28	Gangi	6.736	53,0	2.824
// 29	Marineo	6.588	197,7	2.608
// 30	Balestrate	6.435	1.662,8	2.729
// 31	Piana degli Albanesi	6.219	95,8	2.515
// 32	Montelepre	6.213	628,2	2.328
// 33	San Cipirello	5.353	255,6	2.035
// 34	Cerda	5.235	119,5	2.042
// 35	Prizzi	4.788	50,4	2.069
// 36	Bisacquino	4.560	70,4	1.938
// 37	Torretta	4.328	170,3	1.558
// 38	Bolognetta	4.158	150,8	1.556
// 39	Collesano	4.030	37,2	1.928
// 40	Caltavuturo	3.986	41,0	1.806
// 41	Ciminna	3.737	66,3	1.566
// 42	Lascari	3.611	347,5	1.609
// 43	Alia	3.581	78,4	1.548
// 44	Valledolmo	3.552	137,7	1.605
// 45	Villafrati	3.340	130,4	1.414
// 46	Castellana Sicula	3.339	46,0	1.419
// 47	Polizzi Generosa	3.334	24,8	1.505
// 48	Montemaggiore Belsito	3.314	104,1	1.422
// 49	Petralia Soprana	3.308	58,2	1.470
// 50	Camporeale	3.294	85,3	1.298
// 51	Trappeto	3.184	770,9	1.439
// 52	Castronovo di Sicilia	3.053	15,3	1.331
// 53	Pollina	2.978	59,7	1.346
// 54	Mezzojuso	2.908	58,8	1.240
// 55	Sciara	2.810	90,1	1.037
// 56	Petralia Sottana	2.766	15,5	1.200
// 57	Chiusa Sclafani	2.766	48,2	1.236
// 58	Vicari	2.698	31,5	1.146
// 59	Roccapalumba	2.466	78,5	999
// 60	Giardinello	2.315	185,3	830
// 61	Palazzo Adriano	2.116	16,4	922
// 62	Alimena	1.978	33,3	883
// 63	Baucina	1.975	81,1	786
// 64	Ventimiglia di Sicilia	1.925	72,1	834
// 65	Giuliana	1.904	78,7	793
// 66	Geraci Siculo	1.871	16,6	841
// 67	Contessa Entellina	1.744	12,8	758
// 68	San Mauro Castelverde	1.643	14,4	838
// 69	Isnello	1.525	30,4	707
// 70	Roccamena	1.493	44,8	656
// 71	Bompietro	1.354	31,9	690
// 72	Ustica	1.308	161,7	589
// 73	Campofiorito	1.293	60,6	531
// 74	Aliminusa	1.215	88,6	508
// 75	Godrano	1.174	30,2	438
// 76	Cefalà Diana	1.028	114,0	450
// 77	Blufi	1.011	49,2	475
// 78	Santa Cristina Gela	1.011	26,2	439
// 79	Gratteri	940	24,4	454
// 80	Scillato	612	19,8	283
// 81	Campofelice di Fitalia	514	14,6	229
// 82	Sclafani Bagni	430	3,2	219


export const renderOptions = () => {
   
    wheaterPlaces.forEach((option) => {
        let optionEl = elementGen("option", "select__option", option.name)
        selectEl.append(optionEl)

        return optionEl

    })
}


