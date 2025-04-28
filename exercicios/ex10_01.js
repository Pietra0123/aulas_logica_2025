//Escreva uma função que utilize uma variável global para contar o número de vezes que foi
//chamada. A função deve retornar o número atual de chamadas.

let contador = 0 
function Contar(){
    contador = contador + 1
}
Contar()
Contar()
Contar()
console.log(contador)