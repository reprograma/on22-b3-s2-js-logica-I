/*Exercício 2:

Crie uma variável chamada "saldo" e atribua a ela um valor numérico que represente o saldo da sua conta bancária. 
Em seguida, crie uma segunda variável chamada "gastos" e atribua a ela um valor numérico que represente a quantia de dinheiro que você gastou em um mês. 
Finalmente, crie uma terceira variável chamada "saldoFinal" que represente o saldo da sua conta após subtrair seus gastos do saldo inicial. 
Exiba no console uma mensagem que diga "Meu saldo final é de [saldoFinal] reais".*/


let contaBancaria = {
    saldo: 1000,
    gastos: 1500
};

console.log(contaBancaria)

let saldoFinal = contaBancaria.saldo - contaBancaria.gastos
console.log(`Meu saldo final é de R$${saldoFinal.toFixed(2)} reais`)




