// Exercicio 1
/* Crie uma variável chamada "nome" e atribua a ela seu nome completo como 
uma string. Em seguida, crie uma segunda variável chamada "idade" e atribua 
a ela sua idade como um número. Finalmente, exiba no console uma mensagem que 
diga "Meu nome é [nome] e tenho [idade] anos". */

let nome = "Aline de Oliveira Machado"
let idade = 38

console.log("Meu nome é " +nome+ " e tenho " +idade+ " anos.")

// Exercicio 2
/* Crie uma variável chamada "saldo" e atribua a ela um valor numérico que 
represente o saldo da sua conta bancária. Em seguida, crie uma segunda variável 
chamada "gastos" e atribua a ela um valor numérico que represente a quantia de 
dinheiro que você gastou em um mês. Finalmente, crie uma terceira variável 
chamada "saldoFinal" que represente o saldo da sua conta após subtrair seus 
gastos do saldo inicial. Exiba no console uma mensagem que diga "Meu saldo 
final é de [saldoFinal] reais".*/
let saldo = 84500.00
let gastos = 520.00
let saldoFinal = saldo - gastos

let saldoFinalFormatado = saldoFinal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
console.log("Meu saldo final é " +saldoFinalFormatado+ " reais.")

