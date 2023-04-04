let bichoDeEstimacao = {
    nome: "Roni",
    idade: 8,
    porteMedio: false
} // JSO - Javascript Object

"{ 'chave':'Valor'}" // JSON - Javascript Object Notation

let comanda = {
    nome: "Pessoa",
    nPedido: 123,
    valorPedido: 200
}



let pessoa = {
    nome: "Aline",
    desejo: "fazer um arranjo de flores",
    endereco: {
        rua: "Territorio do Rio",
        numero: "34",
        bairro: "Pituba",
        complemento: {
            eCasa: false,
            eApartamento: true
        }
    }
}
// para acessar o endereço que está dentro do Objeto pessoa
console.log(pessoa.desejo)