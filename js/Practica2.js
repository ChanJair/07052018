'use strict';
const SALIDA = 4;
function principal(){
    let opcion = 0;
    do{
        alert(
            'Escoje la opcion que deseas acceder: \n' +
            '1. Suma de dos valores: \n' +
            '2. Resta de dos valores: \n' +
            '3. Tabla de multiplicar de algun valor: \n' +
            '4. Salir'
        );
        opcion = Number(prompt("Escribe la opcion que deseas acceder"));

        switch (opcion){
            case 1:
            alert ("Resultado = " + suma());
        break;
            case 2:
            alert ("Resultado = " + resta());
        break;
            case 3:
            alert (multiplicacion());
        default:
            alert ("no mms");   
        }

    }while(opcion!=SALIDA)
}

function suma(){
    let digito1 = Number(prompt("Dame tu primer digito"));
    let digito2 = Number(prompt("Dame tu segundo digito"));
    suma = digito1 + digito2
    return (suma)
}
function resta(){
    let digito1 = Number(prompt("Dame tu primer digito"));
    let digito2 = Number(prompt("Dame tu segundo digito"));
    resta = digito1 - digito2
    return (resta)
}
function multiplicacion(){
    
    let digito1 = Number(prompt("Dame el numero que quieres multiplicar"));
    let resultado="Tu tabla de multiplicar es: ";
    let i = 1;
    for (i=1; i<=10; i++){
        resultado += digito1*i + '\n' ;
    }
        alert (resultado)
}