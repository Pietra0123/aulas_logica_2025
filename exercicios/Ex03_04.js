const prompt = require('prompt-sync')()


//Peça ao usuário para digitar 2 notas e calcule sua média
let nota1 = Number(prompt(`${nome}qual sua primeira nota`))
let nota2 = Number(prompt(`${nome} qual sua segunda nota`))
//calcule sua media
let media = (nota1 + nota2) / 2
//considere a média acima de 7 aprovado, entre 5 e 7, em recuperação, abaixo de 5 reprovado.
if(media >= 7){
    console.log(`olá ${nome}, voce foi aprovada! Com média: ${media}`)
}
else if(media > 5 || media < 7){
    console.log(`olá ${nome}, voce esta em recuperação! Com média: ${media}`)
}
else {
    console.log(`olá ${nome}, voce foi reprovada! Com média: ${media}`)
}