const prompt = require('prompt-sync')()

let mes = prompt('Digite o nome de um mês: ')

if(mes == 'Janeiro' || mes == 'Março' || mes == 'Maio' || mes == 'Julho' || mes == 'Agosto' || mes == 'Outubro' || mes == 'Dezembro' ){
    console.log('O mês tem 31 dias')
}
else if( mes == 'Abril' || mes == 'Junho' || mes == 'Setembro' || mes == 'Novembro'){
    console.log('Seu mês tem 30 dias')
}
else if(mes == 'Fevereiro'){
     console.log('Seu mês tem 28 dias')
}
    
