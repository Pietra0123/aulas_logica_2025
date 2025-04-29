//- Tendo como dado de entrada a altura (h) de uma pessoa e o sexo, construa um 
// algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas: 
//Para homens: (72.7 * altura) – 58		 Para mulheres: (62.1 * altura) - 44.7,
//  exiba qual é o peso ideal da pessoa.

const prompt = require(`prompt-sync`)()

let altura = Number(prompt(`Digite a sua altura: `))
let sexo = prompt(`Digite seu sexo(F ou M): `)

let pesoIdealM = (72.7 * altura)- 58
let pesoIdealF = (62.1 * altura) - 44.7

if(sexo == "M"){
   console.log(pesoIdealM)
}else{
    console.log(pesoIdealF)
}




