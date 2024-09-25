// declarar variaveis
// let   - variavel global
// var - evitar usar
// const  - constante

/*
comentário com multiplas linhas
*/

// texto - string
let nomePessoa = "Alvaro";
console.log(nomePessoa, ", variavel tipo:", typeof(nomePessoa));

// Numeros - numbers
let idade = 30;
console.log(idade, typeof(idade));

let preco = 14.34; // numero decial = float ou double
console.log(preco, typeof(preco));

// Valores Logicos - Boolean
let autenticado = true;
console.log(autenticado, typeof(autenticado));


// variavel não declarado - undefined
let email;
console.log(email, typeof(email));

// vazio - object
let nulo = null;
console.log(nulo, typeof(nulo));

// mudança de tipo
email = "a@b.com";
console.log(email, typeof(email));

// Constante
const CPF = "123.456.789-10";
console.log(CPF, typeof(CPF));

// erro devido a tentativa de alocar outro valor a constante
//CPF = "555222";


// =======================================================================================

// Conversões

// Coerção Implícita  --- Conversão de valores de forma implícita

let soma = "3" + 2; // vira string "32"
console.log(soma); 

// Coerção Explícita --- Conversão de valores de forma explícita

// Number() - converte texto para numero
let pontos = Number("120");
console.log(pontos, typeof(pontos));

// Boolean
let valorLogico = "";
valorLogico = Boolean(valorLogico);
console.log(valorLogico, typeof(valorLogico));

// pedir valores para o usuario

let nomeDigitado = prompt("Digite seu nome aqui:");
alert(`Olá, ${nomeDigitado}! Seja Bem vindo`);  // template string js / template literals
alert("Olá, " + nomeDigitado + "! Seja Bem vindo"); // concatenação