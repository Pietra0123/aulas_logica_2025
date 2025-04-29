//Escreva uma função que recebe um nome e o adicione a uma lista global.
//Em seguida, escreva outra função que remova um elemento dessa lista global.

let listaNomes = []

function adicionarNome(nome){
    listaNomes.push(nome);
}

function removerNome(){
    listaNomes.pop()
}

function removerPorNome(nome){
    let posição = listaNomes.indexOf(nome)
//Quandoo indexof nao encontra o elemento ele retorna -1
if(posição != -1){
    listaNomes.splice(posição, 1)
 }else{
    console.log("Nome não encontrado")
 }
}


adicionarNome('Pietra')
adicionarNome('Camila')
adicionarNome('Matheus')
console.log(listaNomes)
adicionarNome('Garro')
console.log(listaNomes)
removerNome()
console.log(listaNomes)
remover('Camila')
console.log(listaNomes)