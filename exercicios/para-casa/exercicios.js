// Exercicio 1
let user = {
    nome: "Maya Alcantara",
    idade: 29,
    transcendeu: false, //Caso tenha transcendido a vida, alcançado a iluminação da mente e a sabedoria superior, deverá ser True.
    data_transcedencia: null //data de quando a variável acima foi modificada. Por padrão virá como null.
}

console.log("Meu nome é " + user.nome + " e tenho " + user.idade + " anos.");

// Exercicio 2

let conta_bancaria = {
    saldo: 120.00,
    despesas: 119.90,
    recebimentos: 0.00,
    emprestimos_disp: false,
}

let saldoFinal = conta_bancaria.saldo - conta_bancaria.despesas + conta_bancaria.recebimentos

console.log("\nMeu saldo final é de R$ " + saldoFinal.toFixed(2) + ".")
