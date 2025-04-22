const prompt = require('prompt-sync')();

function Cabecalho(){
    console.log('---------------------')
    console.log('    SESI/SENAI')
    console.log('---------------------')
}

//Criando outra função, função de saudação
function Saudacao(){
    let nome = prompt('Digite seu nome: ')
    console.log(`${nome} tenha um bom dia.`)
}
//chamando a função 
//Passando o parametro junto com a função
Cabecalho('SESI/SENAI')
//Posso declarar uma variavel e pass-la como parametro para função
let escola = 'Sesi 025'
Cabecalho(escola)
Saudacao()

//crie a função soma que ira receber dois valores como parametros 
//a partir desses valores, realizara o calculo e mostrara o
//resultado
function Soma(n1, n2){
    let resultado = n1 + n2
    console.log(resultado)
}

Soma(5,6)
Soma(8, 9)
Soma(8, 18)

//EXERCICIO

function ParImpar(numero){
   if(numero % 2 == 0){
    console.log(`${numero} é par`)
   }else{
    console.log(`${numero} é impar`)
   }
}

ParImpar(5)
ParImpar(10)
//função com retorno do resultado
//o calculo é realizado e é retornada para a chamada da função
function Media(n1, n2){
    let resultado = (n1, n2) / 2;
    return(resultado)
}
console.log(Media(6,8))
//Armazenei o retorno da função em uma variavel 
let valor = Media(9,7)
//Utilizei o retorno da função para escrever na tela 
console.log(valor)
 //utilizei a variavel que recebeu o retorno da função para
//chamar a função Par ou impar passando o valor como parametro
ParImpar(valor)

