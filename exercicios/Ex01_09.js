const prompt = require('prompt-sync')()

let preco = Number(prompt('Digite o preço'));
let desconto = (preco * 5) / 100 ;
let valorFinal = preco - desconto;

console.log(valorFinal);