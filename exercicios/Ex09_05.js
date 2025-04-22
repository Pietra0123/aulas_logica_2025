//Crie uma função que receba 2 números e o operador matemático para realizar a operação 
//(Ex. envio os parâmetros 2 e 5 e *, fazer a multiplicação), tratar as operações + - * / **

function conta(n1, operacao, n2){
    if(operacao === '+'){
        console.log(n1 + n2);}
        else if(operacao === '-'){
             console.log(n1 - n2);}
       
             else if(operacao === '/'){
            console.log(n1 / n2);}
       
                else if(operacao === '*'){
            console.log(n1 * n2);}
       
            else{
            console.log(n1 ** n2);}
           
               
    }
    conta(7, '+', 7)
    conta(7, '-', 7)
    conta(7, '/', 7)
    conta(7, '*', 7)
    conta(7, '**', 7)
