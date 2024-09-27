// Arrays são listas

// 1 forma de declarar arrays

let lista1 = 
console.log(lista1);

// 2 forma

let lista2 = ["elementoA", "elementoB", 3, true, false];

// Lista de strings - frutass

let frutas = ["Banana", "Abacaxi", "Pera", "Melao"];

// frutas[indice]
// [0]
// [1]
// [2]
// [3]

console.log(frutas[2]);

// Grade de Produtos

let gradeProdutos = [
    ["Nome 1", "marca 1", 5.90],
    ["Nome 2", "marca 2", 10.90],
    ["Nome 3", "marca 3", 20.90],
]

console.table(gradeProdutos)
console.log(gradeProdutos[2][1]) // resultado = marca 3

// percorrer lista
// for indexado / for classico

for (let i = 0; i < frutas.length; i++) {
    console.log(`Posição ${i} | Valor ${frutas[1]}`);
}

// FOR IN

for (let x in frutas) {
    console.log(frutas[x]); // tras lista de valores, onde x é o indice
}

// FOR OF
for (let y of frutas) {
    console.log(y); // tras lista de valores, onde y é o valor
}