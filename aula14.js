let frutas = ['Maça', 'Banana', 'Uva', 'Abacaxi' ]

//A variavel x serve para iterar os valores ate o limite da lista 
//O nome não é obrigatoriamente ser o nome i, x ou contador
//pode ser qualquer nome de variavel 
for(let x = 0; x < frutas.length; x++){
    //O lenght identifica o tamanho total da lista 
    console.log(`A fruta é ${frutas[x]}`)
}

let ListaNomes = ['Bill Gates', 'Rafinha', 'Raul Seixas', 'Esteves', 'Vieira']
//
for(let nome of ListaNomes){
    console.log(nome)
}

//verificando se é uma consoante
const prompt =require('prompt-sync')()
const vogais = ['a', 'e', 'i', 'o', 'u']
let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']

let letra = prompt('Digite uma letra: ')
//Se letra estiver incluso na lista de vogais, identifico que
//é uma vogal 
if(vogais.includes(letra.toLowerCase())){
    console.log('É uma vogal')
}else if(consoantes.includes(letra.toLowerCase())){

    console.log('Coansoante');}
else{console.log('Não e uma letra');}

//Obtendo a posição do item
for(let[pos,fruta] of frutas.entries()){
   //entries retorna o par de cada elemento do vetor
   // no caso a posição e a fruta 
   console.log(`Posição ${pos} e a fruta ${fruta}`)
}

//separando os itens em uma lista
let produtos = `Celular, Notebook, Tv, Tablet, Headset`
//O split divide a string e forma uma lista a partir do limite
//no caso abaixo uma virgula
let ListaProdutos = produtos.split(',')
for(let produto of ListaProdutos){
    console.log(produto)
}

//Percorrendo uma string com uma lista(lista de caracteres)
let palavra = 'SENAI'
for(let letra of palavra){
    console.log(letra)
}