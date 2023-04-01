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