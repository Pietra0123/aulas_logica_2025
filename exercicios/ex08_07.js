//Nessa string ‘Gol;Corsa;Palio;Monza;Fusca;’
//faça a separação desses itens para uma lista e exiba o item e a posição que ele está.
const prompt = require('prompt-sync')();

let carros = 'Gol, Corsa, Palio, Monza, Fusca'
let listaCarros = carros.split(';')

listaCarros.pop()
for(let[posicao, carro] of listaCarros.entries()){
    console.log(`Posição ${posisão}: ${carro}`)
}