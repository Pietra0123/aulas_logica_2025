const prompt = require('prompt-sync')();

let anoAtual = parseInt(prompt("Em que ano estamos?"))
let anoNascimento = parseInt(prompt('Digite o ano de nascimento: '))
let idade = anoAtual - anoNascimento

switch(true){
    case idade < 10:
        console.log("Faixa etária: Criança");
        break;
    case idade >= 11 && idade <= 17:
        console.log("Faixa etária: Adolescente");
        break;
    case idade >= 18 && idade > 59:
         console.log("Faixa etária: Adulto");
         break;
    case idade >= 60:
        console.log("Faixa etária: Idoso")
        break;
    
}