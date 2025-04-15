//Receba uma palavra do usuário e calcule quantas vogais há nesta palavra.
const prompt = require('prompt-sync')();

let vogais = ['a', 'e', 'i', 'o,', 'u']
let palavra = prompt('Digite uma palavra: ')
let qtdVogal = 0;

for(let letra of palavra){
    if(vogais.includes(letra)){
        console.log('é uma vogal')
        qtdVogal++
    }else{
        console.log('não é uma vogal')
    }
}
console.log(qtdVogal)