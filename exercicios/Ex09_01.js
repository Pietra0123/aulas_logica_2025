//Crie uma função com o nome FormatarData,
//que receba por parâmetro o dia, o mês e o ano e
//retorne ela no formato 'dia/mês/ano'chame ela 3 vezes passando valores diferentes

function formatarData(dia, mes, ano){
    let data = `${dia}/${mes}/${ano}`
    return data
}

let valorRetornado = formatarData('19','12','2008')
console.log(valorRetornado)