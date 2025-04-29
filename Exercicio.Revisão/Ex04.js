//Faça um algoritmo que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. 
// Calcule em uma nova variável e mostre o total do seu salário no referido mês.

const prompt = require(`prompt-sync`)()

let qntHora = Number (prompt ("Digite quanto você ganha por hora: "))
let totalMes = Number (prompt ("Digite o numero de horas trabalhadas por mês: "))
let Multiplicação = qntHora * totalMes
console.log(`O salário do mês é a  Multiplicação entre ${qntHora} * ${totalMes} é igual: ${Multiplicação}`)