
let lista = ["joaquina", 25];
console.log(lista[0]);

// JSON - Javascript object notation
// Sintaxe basica para declaração de objetos

// atributos nome, idade
let pessoa = {
    nome: "Joaquina",
    idade: 25
}

// O Objeto
console.log(pessoa); // resultado igual a dicionário em python

// 2 formas de acessar valores

console.log(pessoa.nome)
console.log(pessoa.idade)

// ou

console.log(pessoa["nome"])
console.log(pessoa["idade"])

// conversão de objeto para string
const jsonString = JSON.stringify(pessoa);
console.log(jsonString);

// APIs rick and morty api, pokeapi, marvel api