let saldo = 150
let gastos = 70
let saldoFinal = saldo - gastos 

let mensagem1 = `Meu saldo final é ${saldoFinal}`
console.log(mensagem1)



 

let extratoBancario = {
    saldoInicial: 150,
    gastos: 70,
    saldoFinal: null,
    
}
extratoBancario.saldoFinal = extratoBancario.saldoInicial - extratoBancario.gastos
let mensagem = `Meu saldo final é ${extratoBancario.saldoFinal}`
console.log(mensagem)