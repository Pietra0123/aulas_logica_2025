//declarar um novo vetor
//reconheço que é um vetor pelo uso dos colchetes 
let listaVazia = [];
console.log(listaVazia)
//declarar uma lista de numeros 
let numeros = [1,2,3,4,5,6];
console.log(numeros);
console.log(numero[2]);

//declaração de uma lista de strings
let nomes = ["Ana", "João", "Maria"];
console.log(nomes);

//declaração de uma lista mista 
let listaMista = [1,"dois", true, 2.5]
console.log(listaMista)

let listaComLista = [
    ["coca-cola", "Cachorro-Quente"]
    [5.0, 10.0]
]
console.log(listaComLista)

////alterando valores da lista
let frutas = [`Maçã` , `Pera` , `Uva` , `Abacaxi`]
console.log(frutas)
//a função push adiciona um novo elemento no vetor
frutas.push(`Laranja`)
console.log(frutas);
//A função push adiciona um novo elemento no vetor
frutas.push('Laranja')
console.log(frutas);
//o spread adiciona um novo elemento no vetor
frutas = [...frutas, 'Banana']
console.log(frutas);

frutas.splice(2, 0, `Morango`)
console.log(frutas)

//excluindo item na lista
frutas.splice(3,1)//excluindo item pelo indice 
console.log(frutas)

frutas.shift() //excluindo primeiro item da lista
frutas.pop() //excluindo ultimo item da lista
console.log(frutas)

//acessar os itens da lista
console.log(frutas[3]); //acesso a partir de uma posição específica
console.log(frutas.slice(0.4)) //posição 0 até 4
console.log(frutas.slice(1)) // a partir da posição 1
console.log(frutas.slice(-1))//mostra os itens do fim para o inicio
console.log(frutas.length); // total de itens na lista 

//ordenar itens da lista
console.log(frutas);
frutas.sort()//ordenar a lista de forma crescente
console.log(frutas)
frutas.reverse()//Ordenando de forma decrescente 
console.log(frutas);