const prompt = require('prompt-sync')();

let salario = Number(prompt('digite o salario: '))

switch(true){
    case salario < 2000:
        salario = salario + (salario * 0.12);
        console.log(`Salario reajustado ${salario}`);
        break;
    case salario >= 2000 && salario < 4000:
         salario = salario + (salario * 0.10)
         console.log(`salario ${salario}`)

}