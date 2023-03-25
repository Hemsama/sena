const prompt = require('prompt-sync')(); 

/** Creacion y asignación Arreglo 1 **/
let numeros1 = []; // Almacena el arreglo 1
for(i = 0; i < 5; i++){
    numeros1[i] = Math.floor(Math.random()*10); //Genera números aleatorios para rellenar el arreglo 1
}

/** Creacion y asignación Arreglo 2 **/
let numeros2 = []; // Almacena el arreglo 1
for(i = 0; i < 5; i++){
    numeros2[i] = Math.floor(Math.random()*10); //Genera números aleatorios para rellenar el arreglo 1
}

/**  Ordena los arreglos 1 y 2 de forma ascendente **/

// Ordenar Array 1- Metodo Burbuja
for(i = 0; i < 5; i++){
    for(j = 0; j < 5; j++){  
        if(numeros1[j] > numeros1[j+1]){
            let aux = numeros1[j];
            numeros1[j] = numeros1[j+1];
            numeros1[j+1] = aux;
        }
    }
}
// Ordenar Array 2- Metodo Burbuja
for(i = 0; i < 5; i++){
    for(j = 0; j < 5; j++){
        if(numeros2[j] > numeros2[j+1]){
            let aux = numeros2[j];
            numeros2[j] = numeros2[j+1];
            numeros2[j+1] = aux;
        }
    }
}

/** Imprime los arreglos en consola **/
console.log(`Arreglo 1: ${numeros1}`); //Imprime arreglo 1
console.log(`Arreglo 2: ${numeros2}`); //Imprime arreglo 2

// Itera el arreglo 2 y lo agrega al arreglo 1
numeros2.forEach(function(numero){
    numeros1.push(numero)
});

/**  Ordena el nuevo arreglo 1  de forma ascendente **/

// Ordenar Array 1- Metodo Burbuja
for(i = 0; i < 5; i++){
    for(j = 0; j < 5; j++){  
        if(numeros1[j] > numeros1[j+1]){
            let aux = numeros1[j];
            numeros1[j] = numeros1[j+1];
            numeros1[j+1] = aux;
        }
    }
}

/** Imprime el arreglo 1 en consola **/
console.log(`Arreglos combinados: ${numeros1}`); // Imprime el arreglo 1