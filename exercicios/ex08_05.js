//Crie uma lista com 5 números aleatórios e exiba o nr e seu dobro.
const prompt = require('prompt-sync')();

let numeros = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) + 1);


numeros.forEach(numeros => {
  console.log(`Número: ${numeros}, Dobro: ${numeros * 2}`);
});
