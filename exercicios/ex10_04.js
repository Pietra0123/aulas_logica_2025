let saldo = 0 

//criar função depositar]
function depositar(ValorDeposito){
    saldo = ValorDeposito
}

//criar função sacar
function sacar (valorSaque){
    saldo -= valorSaque
}

// funçao mostrar saldo
function mostrarSaldo(){
    console.log(`Seu saldo: ${saldo}`)
}

//menu interativo
function caixaEletronico(){
    const prompt = require('prompt-sync')()
    let opcao = 0;

    while(opcao != 4){
      console.log('=== Caixa Eletronico ===');
      console.log('[1] - Depositar')
      console.log('[2] - Sacar')
      console.log('[3] - Mostrar saldo') 
      console.log('[4] - Sair')   
      
      opcao = Number(prompt("Escolha uma opção:"))


      switch(opcao){
        case 1:
            let valorDeposito = Number(prompt("Digite o valor a ser depositado: "))
            depositar(valorDeposito)
            break

        case 2: 
             let valorSaque = Number(prompt("Digite o valor a ser sacado: "))
             sacar(valorSaque)
             break
        case 3: 
             mostrarSaldo()
             break
        case 4:
            console.log("Obrigado por usar o banco: ")
            break
        default:
            console.log("Opção invalida")
      }
    }
}
caixaEletronico()