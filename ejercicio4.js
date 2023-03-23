/* 
    Este programa permite crear un maximo de 6 estudiantes y poder visualisar el estudiante que el usuario escoja en la consola. Si este ha
    sido creado con anterioridad
*/
const prompt = require('prompt-sync')();

/* Creacion del Objeto estudiante */
class Estudiante {
    //Constructor de estudiante
    constructor(nombre, cedula, fechaNacimiento, gmail, ciudadRecidencia, ciudadOrigen, artista, canciones) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.fechaNacimiento = fechaNacimiento;
        this.gmail = gmail;
        this.ciudadRecidencia = ciudadRecidencia;
        this.ciudadOrigen = ciudadOrigen;
        this.artista = artista;
        this.canciones = canciones;
    }
    // Metodo para mostrar los datos del estudiante
    imprimirEstudiante() {
        return `\nNombre: ${this.nombre} \nCedula: ${this.cedula} \nFecha Nacimiento: ${this.cedula} \nGmail: ${this.gmail} \nCiudad De Recidencia: ${this.ciudadRecidencia} \nCiudad De Origen: ${this.ciudadOrigen} \nArtista Favorito: ${this.artista} \nCanciones favoritas: ${this.canciones}`
    }
}
// Menú para elegir las opciones
let opciones = prompt('Digite: a, para agregar un estudiante. digite: b, para mostrar la información de un estudiante.O digite: c, para detener el programa. ')

// Definicion de variables globales
let contador = 0;
let estudiantes = [];
let nombre;
let cedula;
let fechaNacimiento;
let gmail;
let ciudadRecidencia;
let ciudadOrigen;
let artista;
let canciones;
let estudiante;

// While de la opcion c: cerrar programa
while (opciones !== 'c') {
    // While de la opcion a: agregar estudiante. El máximo de estudiantes es 6.
    while (opciones == 'a' && estudiantes.length < 6) {
        // Mensaque que muestra el estudiante que se va a crear
        console.log(`Ingrese los datos del estudiante #${contador + 1}: `)

        // Inicialización de variables globales
        nombre = prompt('Ingrese nombre: ');
        cedula = prompt('Ingrese cedula: ');
        fechaNacimiento = prompt('Ingrese fecha de nacimiento: ');
        gmail = prompt('Ingrese su gmail: ')
        ciudadRecidencia = prompt('Ingrese ciudad de recidencia: ')
        ciudadOrigen = prompt('Ingrese ciudad de origen: ')
        artista = prompt('Ingrese artista: ')
        canciones = [];
        numeroCanciones = prompt('¿Cuantas canciones vas a agregar? Digite: 0, 1, 2 o 3, según el número de canciones que desea agregar. ');

        // While de las canciones
        while (canciones.length < 1) {
            switch (numeroCanciones) {
                case '0':
                    console.log('No ingresaste ningúna cancion :(');
                    canciones.push('No se ingreso ningúna cancion');
                    break;
                case '1':
                    let cancion = prompt(`Ingresa cancion: `);
                    canciones.push(cancion)
                    break;
                case '2':
                    for (i = 0; i < 2; i++) {
                        let cancion = prompt(`Ingresa ${i + 1} cancion: `);
                        canciones.push(cancion)
                    }
                    break;
                case '3':
                    for (i = 0; i < 3; i++) {
                        let cancion = prompt(`Ingresa ${i + 1} cancion: `);
                        canciones.push(cancion)
                    }
                    break;
                default:
                    console.log('Ingrese algúna de las opciones. Tenga en cuenta que el número minimo es 0 y el máximo 3');
                    numeroCanciones = prompt('¿Cuantas canciones vas a agregar? Digite: 0, 1, 2 o 3, según el número de canciones que desea agregar. ');
                    break;
            }
        }

        // creación instancia Estudiante
        estudiante = new Estudiante(nombre, cedula, fechaNacimiento, gmail, ciudadRecidencia, ciudadOrigen, artista, canciones);

        // Mensaje de creacion de estudiante
        console.log(`¡Estudiante #${contador + 1}, ha sido creado!`)

        // Se agrega la intancia estudiante a el arreglo estudiantes
        estudiantes[contador] = estudiante;

        // Aumentamos el contador en 1
        contador++;

        // Se vuelve a mostrar el menú para salir del While
        opciones = prompt('Digite: a, para agregar un estudiante. digite: b, para mostrar la información de un estudiante, o c para terminar la ejecución del programa: ');
    }

    // While de la opcion b: Mostrar información del estudiante seleccionado, se toma en cuenta cuantos estudiantes se han ingresado.
    while (opciones == 'b') {

        // Este if se encarga de mostrar las opciones 1, 2, 3, 4 o 5
        if (estudiantes.length !== 6 && estudiantes.length !== 1 && estudiantes.length !== 0) {

            // Mensaje que indica el número de estudiantes que se pueden elegir
            console.log(`Ten en cuenta que solo has agregado ${estudiantes.length} estudiantes, así que solo puedes acceder a la información del estudiante número 1 al estudiante número ${estudiantes.length}`);

            // Menú para seleccionar alguno de los estudiantes existentes
            let opcion = prompt(`Digite un número del: 1 al ${estudiantes.length} para ver su información. O digite exit, para volver al menú principal: `);
            
            // Este while toma en cuenta que el usuario no haya salido o que escoja una opcion inexistente
            while (opcion !== 'exit'  && parseInt(opcion) !== 6) {
                // Este while se ejecuta si el usuario selecciona un estudiante que no ha sido creado
                while(parseInt(opcion) > estudiantes.length ){
                    //Se le indica al usuario que escoja una opcion válida
                    console.log('Selecciona una de las opciones que te di: ')
                    // Menú para seleccionar alguno de los estudiantes existentes
                     opcion = prompt(`Digite un número del: 1 al ${estudiantes.length} para ver su información. O digite exit, para volver al menú principal: `);
                }

                // Switch que guarda las opciones
                switch (opcion) {
                    // Lo que se ejecuta si la opcion escogida es el estudiante #1
                    case '1':
                        console.log(`Información estudiante #${opcion}: ${estudiantes[0].imprimirEstudiante()}`)
                        break;
                    // Lo que se ejecuta si la opcion escogida es el estudiante #2
                    case '2':
                        console.log(`Información estudiante #${opcion}: ${estudiantes[1].imprimirEstudiante()}`)
                        break;
                    // Lo que se ejecuta si la opcion escogida es el estudiante #3
                    case '3':
                        console.log(`Información estudiante #${opcion}: ${estudiantes[2].imprimirEstudiante()}`)
                        break;
                    // Lo que se ejecuta si la opcion escogida es el estudiante #4
                    case '4':
                        console.log(`Información estudiante #${opcion}: ${estudiantes[3].imprimirEstudiante()}`)
                        break;
                    // Lo que se ejecuta si la opcion escogida es el estudiante #5
                    case '5':
                        console.log(`Información estudiante #${opcion}: ${estudiantes[4].imprimirEstudiante()}`)
                        break;
                    // Lo que se ejecuta si la opcion escogida no concuerda con las opciones disponibles
                    default:
                        console.log(`Ingrese un número que concuerde con las opciones que te di`);
                        break;
                }
                // Se vuelve a mostrar el menú para seleccionar un estudiante, en caso de que se desee ver otro
                opcion = prompt(`Digite un número del: 1 al ${estudiantes.length} para ver su información. O digite exit, para volver al menú principal: `);
            }
            // Se vuelve a mostrar el menú principal
            opciones = prompt('Digite: a, para agregar un estudiante. digite: b, para mostrar la información de un estudiante, o c para terminar la ejecución del programa: ')
        
        // Este else if revisa se ejecuta si el arreglo estudiantes tiene un largo de 6 
        } else if (estudiantes.length == 6) {

            // Menú que se muestra, para indicar que puede escoger cualquier estudiante del 1 - 6
            opcion = prompt(`Digite un número del: 1 al 6 para ver la información de los estudiantes. O digite exit, para volver al menú principal: `);
            
            // Este while se ejecutara amenos que el usuario escriba exit, para volver al menú principal
            while (opcion !== 'exit') {
                // Switch que guarda las opciones
                switch (opcion) {
                    // Lo que se ejecuta si la opcion escogida es el estudiante #1
                    case '1':
                        console.log(`Información estudiante #${opcion}: ${estudiantes[0].imprimirEstudiante()}`)
                        break;
                    // Lo que se ejecuta si la opcion escogida es el estudiante #2
                    case '2':
                        console.log(`Información estudiante #${opcion}: ${estudiantes[1].imprimirEstudiante()}`)
                        break;
                    // Lo que se ejecuta si la opcion escogida es el estudiante #3
                    case '3':
                        console.log(`Información estudiante #${opcion}: ${estudiantes[2].imprimirEstudiante()}`)
                        break;
                    // Lo que se ejecuta si la opcion escogida es el estudiante #4
                    case '4':
                        console.log(`Información estudiante #${opcion}: ${estudiantes[3].imprimirEstudiante()}`)
                        break;
                    // Lo que se ejecuta si la opcion escogida es el estudiante #5
                    case '5':
                        console.log(`Información estudiante #${opcion}: ${estudiantes[4].imprimirEstudiante()}`)
                        break;
                    // Lo que se ejecuta si la opcion escogida es el estudiante #6
                    case '6':
                        console.log(`Información estudiante #${opcion}: ${estudiantes[5].imprimirEstudiante()}`)
                        break;
                    // Lo que se ejecuta si la opcion escogida no concuerda con las opciones disponibles
                    default:
                        console.log(`Ingrese un número que concuerde con las opciones que te di`);
                        break;
                }
                // Se vuelve a mostrar el menú para seleccionar un estudiante, en caso de que se desee ver otro
                opcion = prompt(`Digite un número del: 1 al 6 para ver su información. O digite exit, para volver al menú principal: `);
            }
            // Se vuelve a mostrar el menú principal
            opciones = prompt('Digite: a, para agregar un estudiante. digite: b, para mostrar la información de un estudiante, o c para terminar la ejecución del programa: ');
        
        // Este else if revisa se ejecuta si el arreglo estudiantes tiene un largo de 1
        } else if (estudiantes.length == 1) {
            
            // Menú que se muestra, para indicar que puede escoger la opción 1 o exit
            let opcion = prompt(`Solo has ingresado un estudiante, digite: 1, para ver su información. O exit, para volver al menú principal: `);
            
            // Este while se ejecutara hasta que el usuario escriba exit
            while (opcion !== 'exit') {
                // Switch que guarda las opciones
                switch (opcion) {
                    case '1':
                         // Lo que se ejecuta si la opcion escogida es el estudiante #1
                        console.log(`Información estudiante #${opcion}: ${estudiantes[0].imprimirEstudiante()}`)
                        break;
                    default:
                        // Lo que se ejecuta si la opcion escogida no concuerda con las opciones disponibles
                        console.log(`Ingrese un número que concuerde con las opcion que te di`);
                        break;
                }
                // Se vuelve a mostrar el menú para seleccionar el estudiante, en caso de que se desee ver el estudiante otra vez
                opcion = prompt(`Solo has ingresado un estudiante, digite: 1, para ver su información. O exit, para volver al menú principal: `);
            }
            // Se vuelve a mostrar el menú principal
            opciones = prompt('Digite: a, para agregar un estudiante. digite: b, para mostrar la información de un estudiante, o c para terminar la ejecución del programa: ');
       
        // Este else if revisa se ejecuta si el arreglo estudiantes tiene un largo de 0
        } else if (estudiantes.length == 0) {
            // Indica que no has ingresado estudiantes
            console.log('No has ingresado ningún estudiante')
            // Muestra el menú principal
            opciones = prompt('Digite: a, para agregar un estudiante. digite: b, para mostrar la información de un estudiante, o c para terminar la ejecución del programa: ');
        }
        // Si ningúna de las opciones alnteriores se ejecuta ejecutamos esta línea
        else {
            // Indica que tienes que escoger un valor valido
            console.log('Digite una opción valida')
            // Muestra el menú principal
            opciones = prompt('Digite: a, para agregar un estudiante. digite: b, para mostrar la información de un estudiante, o c para terminar la ejecución del programa: ');
        }
    }

    // Este while se ejecuta cuando el usuario selecciona una opcion no valida
    while (opciones !== 'a' && opciones !== 'b' && opciones !== 'c') {
        // Se le pide al usuario que ingrese un valor valido
        console.log('Ingrese un valor valido: ')
        // Se vuelve a mostrar el menú principal, para que el usuario pueda cambiar su opción
        opciones = prompt('Digite: a, para agregar un estudiante. digite: b, para mostrar la información de un estudiante, o c para terminar la ejecución del programa: ');
    }

    // Este while se ejecuta cuando el arreglo alcanza su límite de elementos(6) y el usuario quiere ingresar otro
    while (estudiantes.length == 6 && opciones == 'a') {
        // Se vuelve a mostrar el menú, pero esta vez se le indica que solo puede escoger b o c
        opciones = prompt('Se ha alcanzado el máximo de estudiantes. digite: b, para mostrar la información de un estudiante, o c para terminar la ejecución del programa: ');
    }
}