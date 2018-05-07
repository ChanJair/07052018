'user strict'
let edad = prompt("Escribe la edad");
function ejercicio1(){

switch (edad){
    case '24':
        alert ("es la edad de Ramses. " + fecha_nacimiento());
        break;
    case '27':
        alert ("es la edad de Jonathan. " + fecha_nacimiento());
        break;
    case '30':
        alert ("es la edad de Jessi. " + fecha_nacimiento());
        break;
    case '36':
        alert ("es la edad de Liz. " + fecha_nacimiento());
        break;
    case '32':
        alert ("es la edad de Jorge. " + fecha_nacimiento());
        break;
    case '24':
        alert ("es la edad de Ricardo. " + fecha_nacimiento());
        break;
    case '31':
        alert ("es la edad de Jair. " + fecha_nacimiento());
        fecha_nacimiento()
        break;
    default:
        alert ("no hay nadie con esa edad");    
}
}
function fecha_nacimiento(){
    resta=2018-edad;
    return ('Fecha de nacimiento'+ resta)
}