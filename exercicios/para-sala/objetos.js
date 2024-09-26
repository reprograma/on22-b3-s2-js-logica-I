let bichoDeEstimacao = {
  nome: "Theo",
  idade: 3,
  porteMedio: true,
}; // JSO - Javascript Object

("{ 'chave':'Valor'}"); // JSON - Javascript Object Notation

let comanda = {
  nome: "Pessoa",
  nPedido: 123,
  valorPedido: 200,
};

let pessoa = {
  nome: "Nazaré",
  medo: "Objeto dentro de Objeto",
  endereco: {
    rua: "do desespero",
    numero: "",
    bairro: "",
    complemento: {
      eCasa: true,
      eApartamento: false,
    },
  },
};
// para acessar o endereço que está dentro do Objeto pessoa
console.log(pessoa.endereco);

let petDeEstimacao = {
  nome: "Bella",
  idade: 1,
  porteMedio: true,
};

let endereco = {
  rua: "Allonby Ave",
  numero: 15,
  bairro: "Thornton-Cleveleys",
};

let pessoaa = {
  nome: "Gessica",
  pet: petDeEstimacao,
  endereco: endereco,
};

console.log(pessoaa); //ou para chamar varios objetos dentro de um novo objeto
