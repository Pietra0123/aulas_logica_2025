//- Faça um algoritmo que receba 2 números inteiros armazenando-os em variáveis e 
// exiba a divisão entre eles no console.

const prompt = require(`prompt-sync`)()

let nr1 = Number (prompt ("Digite um numero: "))
let nr2 = Number (prompt ("Digite um numero: "))
let divisão = nr1 / nr2
console.log(`A divisão entre ${nr1} / ${nr2} é igual: ${divisão}`)
