//Utilizando o comando for, exiba todos os números ímpares, de 1 a 40.

const prompt = require('prompt-sync')();

for(let i = 1; i <= 40; i++){
    //if(i % 2 == 1 )
    if(i % 2 != 0){
    console.log(`${i} é impar`)
    }
}
