const prompt = require('prompt-sync')();

//Crie uma lista com os 20 times do campeonato brasileiro de futebol
let times = ['Corinthians', 'Palmeiras', 'Flamengo', 'São Paulo', 'Vasco da Gama','Fluminense', 'Internacional', 'Grêmio', 'Atlético Mineiro', 'Cruzeiro', 'Bahia', 'Santos', 'Botafogo', 'Athletico Paranaense', 'Sport Recife','Guarani', 'Bangu', 'Vitória', 'Ceará', 'Fortaleza' ]
//Exiba o primeiro time da lista como campeão
console.log(`O time campeão foi o: ${times[0]}`)
//Exiba os 4 primeiros times como que irão jogar a libertadores
console.log(times.slice(0,3))
//Exiba os 4 últimos times como os que estão rebaixados para a série B
console.log(times.slice(16,20))