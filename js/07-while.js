//let i = 0 ; variável auxiliar contadora

// while (condição verdadeira) {
//      executa ação
// }

let i = 0;

while (i < 5) {
    console.log(i);
    i ++;
}

// conta de 10 até 0
let j = 0;

while (j >= 0) {
    console.log(j);
    j--;
}


// advinhar um numero

let num = +prompt("Advinhe um número: "); // + aqui seria igual à Number(prompt("..."))
while (num != 7){
    num = +prompt("Advinhe um número: ");
}


// DO / WHILE

    // do {

    // } while (condição verdadeira)

let numero;
do {
    numero = +prompt("Advinhe um número: ");
} while (numero != 5);


do {
    numero = +prompt("Advinhe um número: ");
} while (numero < 0 || numero > 1000);