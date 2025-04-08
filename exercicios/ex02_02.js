const prompt = require('prompt-sync')()

let Numero1 = Number((prompt('Digite o numero ')))
let Numero2 = Number((prompt('Digite o segundo numero ')))

if(Numero1 > Numero2)
{
    console.log('valor1 > valor2')

}
else{
    console.log('valor1 < valor2')
}
    

