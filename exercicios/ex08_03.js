//Crie uma lista com 5 números aleatórios e exiba o nr e seu dobro.

const prompt = require('prompt-sync')();

let meses = [
    "Janeiro", "Fevereiro", "Março", "Abril","Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

let letra = 'J'

for(let mes of meses){
    if(mes.startsWith(letra)){
     console.log(mes)
    }
}
