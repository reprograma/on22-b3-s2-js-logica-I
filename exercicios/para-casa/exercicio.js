// Exercício 01:

let nome = "Aline Lima Monteiro";
let idade = 25;

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

// Exeercício 02:

let conta = {
saldo: 100000,
gastos: 15000,
saldoFinal: null,
mensagem: null
}
conta.saldoFinal = conta.saldo - conta.gastos;
conta.mensagem = (`Meu saldo final será de ${conta.saldoFinal} reais.`);
console.log(conta.mensagem);
