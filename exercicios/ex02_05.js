const prompt = require('prompt-sync')()

let anoNasc = parseInt(prompt('Digite o ano de nascimento: '))

if((2025 - anoNasc ) >= 18){
    console.log('Você é maior de idade')
}else{
    console.log('Você é menor de idade')
}