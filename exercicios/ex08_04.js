//Crie uma lista com as palavras "gato", "cachorro", "pássaro" e "peixe"
//e imprima cada palavra em maiúsculas.

const prompt = require('prompt-sync')();

let ListaPalavras = ["gato", "cachorro", "passaro", "peixe"]
for(let animal of ListaPalavras){
    console.log(animal.toUpperCase())

}