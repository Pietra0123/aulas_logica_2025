const prompt = require(`prompt-sync`)()

let altura = Number(prompt('Digite sua altura:'))
let peso = Number(prompt('Digite seu peso:'))
let imc = peso /(altura ** 2) 
if(imc < 18.5){
    console.log('Abaixo do peso ideal')
}else if(imc >= 18.5 && imc < 25){
    console.log('Sobrepeso')
}else{
    console.log('Obesidade')
}

//Verificar se o triangulo é equilatero ou escaleno 
//Receber o lado 1
let lado1 = Number(prompt('Digite o valor do lado 1: '))
let lado2 = Number(prompt('Digite o valor do lado 2: '))
let lado3 = Number(prompt('Digite o valor do lado 3: '))

//verificar se o triangulo é equilatero caso tenha todos os lados iguais 
//lados iguais
let eq = (lado1 == lado2) && (lado2 == lado3)
let es = (lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3)

console.log('Triangulo equilatero ?', eq, 'Triangulo escaleno ?', es)

let ladod1 =Number(prompt('digite o valor de um lado de um tirnagulo:'))
let ladod2 =Number(prompt('digite o valor de outro lado de um tirnagulo:'))
let ladod3 =Number(prompt('digite o valor de outro do outro lado de um tirnagulo:'))

if(ladod1== ladod2 && ladod2 == ladod3){
    console.log('seu tiangulo e equilatero')
}else if(ladod1 != ladod2 && ladod2 != ladod3 && ladod1 != ladod3)
    {console.log('seu tiangulo e escaleno')

    }else{
        console.log('triangulo e isosceles');
       
    }


    //Descobrir a quantidade de horas trabalhadas 
    let horas = Number(prompt('Total de horas trabalhadas: '))
    let vendas = Number(prompt('Total de vendas: '))

    //Validar se uma das condições foi atendida 
    //(mais de 5000 em vendas ou mais de 40 horas trabalhadar)
    if(vendas > 40){
        console.log("Tem direito ao bonus")
    }else{
        console.log("Nao tem direito ao bonus")
    }

    //crie um algoritimo que receba um caractere e verifique se ele é 
    //uma vogal ou uma consoante
    let letra = Number('Digite uma letra: ')

    //sinal lógico do "OU" = ||
    //sinal logico "E" = &&
    if(letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U") 
    {
       console.log(`A letra ${letra} é uma Vogal`)
    }
    else{
        console.log(`A letra ${letra} é uma Consoante`)
    }
       
    

    


