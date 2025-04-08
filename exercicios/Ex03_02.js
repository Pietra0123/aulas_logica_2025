const prompt = require('prompt-sync')()

//Peça ao usuário o ano atual e o ano de nascimento e verifique em qual faixa etária ele pertence.

let anoAtual = Number(prompt(`digite seu ano atual: `))
let anoNasc = Number(prompt(`digite seu ano de nascimento: `))

let idade = anoAtual - anoNasc
console.log(idade)
//verificar se o ano menos 2025 é abaixo de 10 é criança, de 11 a 17 adolescente, de 18 a 59 adulto,acima de 60 idoso)
//sinal lógico do "E" = &&
if(idade <= 10){
    console.log(`voce é criança `)
    }
else if( idade >= 11 && idade <= 17 ){
    console.log(`voce é adolescente`)
}
else if(idade >= 18 && idade <= 59){
    console.log(`voce é adulto`)
}
else if(idade >60){
    console.log(`voce é idoso`)
}