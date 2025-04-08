const prompt = require('prompt-sync')();
// Ex01_10.js - Cálculo do preço do aluguel de um carro
let dias = parseInt(prompt(`Digite a quantidade de dias q o carro foi alugado: `))
let kmPercorrido = parseInt(prompt(`Digite a quantidade de km percorrido: `))
let custoPorDia = 60
let custoPorKm = 0.15
let custoTotal = (dias * custoPorDia) + (kmPercorrido * custoPorKm)
console.log(`custo da viagem: ${custoTotal.toFixed(2)}`)