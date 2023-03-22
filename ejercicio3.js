const prompt = require('prompt-sync')();

let numeros1 = [];

for(i = 0; i < 5; i++){
    numeros1[i] = Math.floor(Math.random()*10);
}

let numeros2 = [];
for(i = 0; i < 5; i++){
    numeros2[i] = Math.floor(Math.random()*10);
}
// Orderar Array 1- Metodo Burbuja
for(i = 0; i < 5; i++){
    for(j = 0; j < 5; j++){
        if(numeros1[j] > numeros1[j+1]){
            let aux = numeros1[j];
            numeros1[j] = numeros1[j+1];
            numeros1[j+1] = aux;
        }
    }
}
// Orderar Array 2- Metodo Burbuja
for(i = 0; i < 5; i++){
    for(j = 0; j < 5; j++){
        if(numeros2[j] > numeros2[j+1]){
            let aux = numeros2[j];
            numeros2[j] = numeros2[j+1];
            numeros2[j+1] = aux;
        }
    }
}
console.log(numeros1);
console.log(numeros2);