// //trabalhando com laços de repetição(while)

// //executar o laço x vezes 

// let contador = 1 

// //irá repetir enquanto a condição for verdadeira 
// //ou seja sera verdade enquanto o contador for menor ou igual a 5 
// while(contador <= 5){
//     console.log(`o contador é ${contador}`)
// //incrementando a variavel ou seja adicionando valor a ela 
// //para que conntinue o processo ate que a condução seja atingida
// //contador = contador++;
// contador = contador + 1;
// }

// console.log("Fim")

// const prompt = require(`prompt-sync`)()

// let senha_senai = '12345'

// while(true){
//     let senha = prompt("Digite sua senha: ")
//     if(senha_senai == senha){
//         console.log('Você hackeou a senha');
//         break;
//     }else if(senha == 'Desisto'){
//         break;
//     }
// }

// // Escrever um programa que fique recebendo o valor de varios produtos
// // até que eu digite 0,
// // e exiba no final a soma da minha compra e a quantidade de produtos 

// let soma = 0;
// let qtd = 0;

// while(true){
//     let valor = Number(prompt('Digite o valor do produto(0 para encerrar):'))
//     if(valor == 0){
//         break;
//     }
//     else{
//         soma = soma + valor;
//         qtd++;
//     }
// }

// let soma2 = 0;
// let qtd2 = 0;
// let encerrar = ""
// while(encerrar != "SUB-TOTAL"){
//     let valor = Number(prompt('Digite o valor do produto'));
//         soma2 = soma + valor;
//         qtd2++;
//         encerrar = prompt("Deseja continuar: (digite SUB-TOTAL)")
//  }

// console.log(`Foram informados ${qtd}`)
// //toFixed para colocar somente dois digitos apos a virgula
// console.log(`Valor total dos produtos${soma.toFixed(2)}`)


// Crie um jogo de adivinhação de números,
// o computador precisa sortear um número aleatório com o Random
// e o usuario precisa digitar um numero,
// enquanto ele não acertar continua pedindo um novo numero

const prompt = require('prompt-sync')()

console.log("############################");
console.log("😘  JOGO DA ADIVINHAÇÃO  😘");
console.log("############################");

let nrSorteado = Math.floor(Math.random() * 100 + 1); //gera um numero aleatorio
let acertou = false;

while(!acertou){
    const chute = parseInt(prompt('😘 Digite um numero entre 1 e 100 para adivinhar'))

    if(chute > nrSorteado){
        console.log(`Você chutou ${chute}, tente um numero 👇!`);
    }
    else if(chute < nrSorteado){
        console.log(`Você chutou ${chute}, tente um numero ☝️!`)
    }
    else if(chute == nrSorteado){
        console.log(`Você chutou ${chute}, 🎉 Parabens você acertou!`);
        
    }

    }

    console.log('Fim')

    