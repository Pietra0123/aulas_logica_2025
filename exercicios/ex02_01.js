const prompt = require(`prompt-sync`)()

let Nota1 = (prompt('Digite a nota do aluno '))
let Nota2 = (prompt('Digite a segunda nota do auno '))

let soma = Nota1 + Nota2
console.log(soma)
let media = soma /2 
console.log(media)

if(Nota1 >= 7){
    console.log('aprovado')
}else{
    console.log('reprovado')
}