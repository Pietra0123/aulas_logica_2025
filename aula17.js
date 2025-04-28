//Variaveis globais e locais

function nomeEscola(){
escola = "SESI"
console.log(escola)
//declarando uma variavel local 
var cidade = 'Andradina'
}


//Essa variavel é uma variavel global pois ela pode ser acessada em qualquer
//parte do codigo
var escola = "Senai"
console.log(escola)
nomeEscola()
var cidade = "Mirandopolis"
console.log(cidade)

var x = 10 //variavel global 
console.log('Fora da função',x)

function minhaFunção(){
let x = 0; //variavel local
x = x + 1;
console.log('Dentro da função' , x )
}

minhaFuncao()

console.log("Fora da funcao de novo" , x)

/////////////////////////////////////////////////
var x = 10 //variavel global
console.log('Fora da função', x)

function minhaFuncao(){
    //Estamos usando a variavel global
    x = x + 1
    console.log('Dentro da função' , x)
}

minhaFuncao()
x += 1
console.log("Fora da função de novo" , x)

