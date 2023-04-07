/**
 * Crie uma variável chamada "saldo" e atribua a ela um valor numérico que represente o saldo da sua conta bancária. Em seguida, crie uma segunda variável chamada "gastos" e atribua a ela um valor numérico que represente a quantia de dinheiro que você gastou em um mês. Finalmente, crie uma terceira variável chamada "saldoFinal" que represente o saldo da sua conta após subtrair seus gastos do saldo inicial. Exiba no console uma mensagem que diga "Meu saldo final é de [saldoFinal] reais".
 */

let conta = {
    saldo: 2,
    gastos: 200
}

console.log(conta)

conta.saldoFinal = conta.saldo - conta.gastos
conta.mensagem = `Meu saldo final é de ${conta.saldoFinal} reais`
conta.nome_proprietario = "Suzik"

console.log(conta)
