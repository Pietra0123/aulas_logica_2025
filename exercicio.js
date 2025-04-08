const prompt = require('prompt-sync')()

console.log("exercicio aula de logica")
console.log("bem vindo ao curso de JavaScript")
console.log("estou aprendendo a usar o console.log")

console.log( 15 + 25 )//soma
console.log( 100 - 45 )//subtração
console.log( 12 * 7 )
console.log( 144 / 12 )
console.log( 20 % 3 )
console.log( 2 ** 5 )

//exercicios de variaveis 

//1-Criar 3 variaveis nome, altura, escola, ano
let nome = "Pietra"
let altura = 1.60
let escola = "SESI"
let ano = 2025
//exibir os valores das variaveis 
console.log(`a aluna${nome} tem ${altura} estuda na escola ${escola} e esta no ano ${ano}`)

//2- Crie 3 variaveis e atribua valores 
let nomeProfessor = "Edcarlos"
let materia = "Matematica"
let anoIngresso = 2020;
//Exibir valores das variaveis 
 console.log(`O professor ${nomeProfessor} que leciona
     a materia ${materia} no ${ano}.
     E ingressou na ${escola} no ano de ${anoIngresso}`)

 //Retribuindo valores as nossas variaveis.
 nome = prompt('Digite o nome do aluno? ')
 altura = parseFloat(prompt('Digite a altura? '))
 escola = prompt(' Digite o nome da escola?')
 ano = parseIntro(prompt('Digite o ano da turma? '))
 console.log(`a aluna ${nome} tem ${altura} estuda na escola ${escola} e esta no ano${ano}`)

 nomeProfessor = prompt('digite o nome do professor: ')
 materia = prompt('digite o nome da materia:')
 console.log(`o professor ${nomeProfessor} que leciona
    a materia ${materia} no ${ano}.
    e ingressou na${escola} no ano de ${anoIngresso}`)

