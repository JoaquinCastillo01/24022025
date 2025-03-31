function suma(numero1, numero2){
    return parseInt(numero1) + parseInt(numero2);
}

function resta(numero1, numero2){
    return parseInt(numero1) - parseInt(numero2);
}

function multiplicacion(numero1, numero2){
    return parseInt(numero1) * parseInt(numero2);
}

function division(numero1, numero2){
    return parseInt(numero1) / parseInt(numero2);
}

function modulo(numero1, numero2){
    return parseInt(numero1) % parseInt(numero2);
}

let opcionFuncion;

do{
    let numero1 = prompt("Ingresa un numero1: ");
    let numero2 = prompt("Ingresa un numero2: ");
    let resultado;

    console.log("numero 1: "+numero1);
    console.log("numero 2: "+numero2);

    opcionFuncion = prompt(`
        Elige que operacion realizar
        1.-Suma
        2.-Resta
        3.-Multiplicacion
        4.-Division
        5.-Modulo
        6.-Salir
    `)
    
    switch(opcionFuncion){
        case "1":
            resultado = suma(numero1, numero2);
            console.log(`La suma de ${numero1} + ${numero2} es: ${suma(numero1, numero2)}`);
            break;
        case "2":
            resultado = resta(numero1, numero2);
            console.log(`La resta de ${numero1} - ${numero2} es: ${resta(numero1, numero2)}`);
            break;
        case "3":
            resultado = multiplicacion(numero1, numero2);
            console.log(`La multiplicacion de ${numero1} * ${numero2} es: ${multiplicacion(numero1, numero2)}`);
            break;
        case "4":
            resultado = division(numero1, numero2);
            console.log(`La division de ${numero1} / ${numero2} es: ${division(numero1, numero2)}`);
            break;
        case "5":
            resultado = modulo(numero1, numero2);
            console.log(`El modulo de ${numero1} % ${numero2} es: ${modulo(numero1, numero2)}`);
            break;
        default:
            console.log("Saliste del programa");
    }
}while (opcionFuncion != 6);
