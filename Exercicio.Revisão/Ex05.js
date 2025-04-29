//- Faça um algoritmo que verifique se uma letra digitada é "F" ou "M". 
// Conforme a letra escrever: F - Feminino, M – Masculino, 
// se não for nenhuma das opções, Sexo Inválido

const prompt = require(`prompt-sync`)()

let letra = prompt(`digite uma letra: `)

if(letra == "F" ) {
       console.log(` ${letra} - Feminino`)
    }
    else if(letra == "M"){
        console.log(`${letra} - Masculino`)
    }
    else{
        console.log(`Sexo inválido`)
    }
