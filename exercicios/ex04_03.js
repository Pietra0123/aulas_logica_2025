const prompt = require('prompt-sync')();

let mes = parseInt(prompt('digite o numero referente a um mes: '))

switch (mes) {
    case 1:
        console.log('mes de janeiro');
        break;
    case 2:
        console.log('mes de fevereiro');
        break
    case 3:
        console.log('mes de março');
        break
    case 4:
        console.log('mes de abril');
        break
    case 5:
        console.log('mes de maio');
        break
    case 6:
        console.log('mes de junho');
        break
    case 7:
        console.log('mes de julho');
        break
    case 8:
        console.log('mes de agosto');
        break
    case 9:
        console.log('mes de setembro');
        break
    case 10:
        console.log('mes de outubro');
        break
    case 11:
        console.log('mes de novembro');
        break
    case 12:
        console.log('mes de dezembro');
        break
default:
    console.log('mes inválido');
   
}