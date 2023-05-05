// Esercizio 2: tra commento ho laciato le versioni non definitive
// Non sono riuscito a trovare una soluzione all'eventualità che l'array abbia più elementi

const randomArray = [126, 47, 58, 1, 922] 

for (let i = randomArray.length - 1; i >= 0; i--) {
    if (
      randomArray[i] < randomArray[0] ||
      randomArray[i] < randomArray[1] ||
      randomArray[i] < randomArray[2] ||
      randomArray[i] < randomArray[3] ||
      randomArray[i] < randomArray[4]  
    ) {}
     else {
      console.log(randomArray[i])
    }
}

/* for (let i = randomArray.length - 1; i >= 0; i--) {
        if (randomArray[i] < randomArray[0]) {
        } else if (randomArray[i] < randomArray[1]) {
        } else if (randomArray[i] < randomArray[2]) {
        } else if (randomArray[i] < randomArray[3]) {
        } else if (randomArray[i] < randomArray[4]) {
        } else if (randomArray[i] < randomArray[5]) {
        } else {
          console.log(randomArray[i])
        }
} */

for (let i = randomArray.length - 1; i >= 0; i--) {
    switch (randomArray[i] > randomArray[0] || 
            randomArray[i] > randomArray[1] ||
            randomArray[i] > randomArray[2] ||
            randomArray[i] > randomArray[3] ||
            randomArray[i] > randomArray[4] 
           ) {
      case true : 
        break;
      default:   
        console.log(randomArray[i])  
        }
}


/* for (let i = randomArray.length - 1; i >= 0; i--) {
    switch (randomArray[i] > randomArray[0]) {
      case true : 
        break;
      default: 
        switch (randomArray[i] > randomArray[1]) {
        case true : 
         break;
        default:   
        switch (randomArray[i] > randomArray[2]) {
            case true : 
             break;
            default:  
            switch (randomArray[i] > randomArray[3]) {
                case true : 
                 break;
                default:  
                switch (randomArray[i] > randomArray[4]) {
                    case true : 
                     break;
                    default:   
                        console.log(randomArray[i])  
                        }
                    } 
                } 
            }
        }
    }

     */
