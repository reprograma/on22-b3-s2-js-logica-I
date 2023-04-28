
let bichoEstimacao = {
	nome: "Joy",
	idade: 6,
	raça: "Daschund",
	vacinada: false,
    complemento: {
        cor: "preta e amarela",
        pelo: "curto"
    }
}


let pessoa = {
	nome: "Nazareth",
	medo: "Objeto dentro de objeto",
	animal: bichoEstimacao
}	

console.log(bichoEstimacao.complemento)

let bichoDeEstimacao = {
    nome: "Theo",
    idade: 3,
    porteMedio: true
} // JSO - Javascript Object

"{ 'chave':'Valor'}" // JSON - Javascript Object Notation

let comanda = {
    nome: "Pessoa",
    nPedido: 123,
    valorPedido: 200
}



let pessoa = {
    nome: "Nazaré",
    medo: "Objeto dentro de Objeto",
    endereco: {
        rua: "do desespero",
        numero: "",
        bairro: "",
        complemento: {
            eCasa: true,
            eApartamento: false
        }
    }
}
// para acessar o endereço que está dentro do Objeto pessoa
console.log(pessoa.endereco)

