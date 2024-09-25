
// Operadores Logicos

// &&   E
// ||   OU
// !    NOT

// Lógica E  (&&)

// Email   Senha   entrar no sistema  (email && senha)
// true    true       true
// true    false      false
// false   true       false
// false   false      false

//simulação  E (&&) , dados corretos
let email = "a@b.com";
let senha = "123";
// dados digitados
let emailDigitado = prompt("Digite seu email");
let senhaDigitada = prompt("Digite sua senha");

console.log(`Verificação de email: ${emailDigitado == email}`)
console.log(`Verificação de senha: ${senhaDigitada == senha}`)

let statusLogin = (emailDigitado == email) && (senhaDigitada == senha);
console.log(`Status de Login: ${statusLogin}`);


// simulação OU (||)

// Sol  +  Jogo BR   +  churras no Domingo (sol || jogar)
// true    true          true
// true    false         true
// false   true          true
// false   false         false

let sol = true;
let jogoBr = true;
let aniversario = true;

console.log(sol || jogoBr || aniversario);

// Verificação de idade do voto opcional

let idade = 17;

let verificaMenor = idade >= 16 && idade < 18;
console.log(`Verifica voto opcional para menor: ${verificaMenor}`);

let verificaMaior = idade >= 70;
console.log(`Verifica voto opcional para Maior: ${verificaMaior}`);

let votoOpcional = verificaMenor || verificaMaior;