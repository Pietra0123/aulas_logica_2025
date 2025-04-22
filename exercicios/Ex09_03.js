//Crie uma função que recebe um número como parâmetro e exiba a tabuada até o 10
//chame essa função por 3 vezes enviando parâmetros diferentes

function multiplicacao(n1){
    console.log(`tabuada do ${n1}`);
    for(let i = 0; i <= 10; i ++)
        console.log(`${n1} x ${i} = ${n1 * i}`);
       
}
multiplicacao(7)
multiplicacao(8)
multiplicacao(5)
