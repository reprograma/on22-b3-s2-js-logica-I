/**
 * Crie uma variável chamada "nome" e atribua a ela seu nome completo como uma string. Em seguida, crie uma segunda variável chamada "idade" e atribua a ela sua idade como um número. Finalmente, exiba no console uma mensagem que diga "Meu nome é [nome] e tenho [idade] anos".
 */

let nome = "Manuelly Suzik Nunes Melo"
let idade = 30
// Com template string
let messagem = `Meu nome é ${nome} e tenho ${idade} anos`
// Sem template string
//let messagem2 = "Meu nome é " + nome + " e tenho " + idade + " anos"
console.log(messagem)