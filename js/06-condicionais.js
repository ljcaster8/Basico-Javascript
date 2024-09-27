// Estrutura condicional simples

let idade = 65;


// joga valor de idade como texto para o index html
let spanIdade = document.getElementById("span-idade");
spanIdade.innerHTML = idade;

// joga texto inteiro dentro da condição if para o html
// no caso, o query selector deixa selecionar outros tipos de ids, como por exemplo
// querySelector(".verifica-idade") - "ponto" se refere a uma classe, no html seria chamado como class=verifica-idade
let verificaIdade = document.querySelector("#verifica-idade");

if (idade < 18) {
    verificaIdade.innerHTML = "o usuário é menor de idade";
}

// Estrutura condicional composta

    // Se (Condição) {

    // } Senao {

    // }

if (idade < 18) {
    verificaIdade.innerHTML = "O usuário é menor de idade";
// } else {
} else if (idade < 55) {
    verificaIdade.innerHTML = "O usuário é maior de idade e ainda está bem";
} else {
    verificaIdade.innerHTML = "Sua hora está chegando";
    // verificaIdade.className = "dark"; descreve um estilo CSS via Javascript, o CSS pode estar cadastrado no html sendo importado on como CSS interno (no proprio html)
}


// IF Ternário

let mes = 9; // julho

let semestre;

if (mes <= 6) {
    semestre = "1 semestre";
} else {
    semestre = "2 semestre";
}

console.log (`Estamos no ${semestre}`);

let semestreTernario = mes <= 6 ? "1 semestre" : "2 semestre";

console.log (`Estamos no (t) ${semestreTernario}`);